import React, { Component } from 'react';
import Country from './Country';
import $ from 'jquery';
import axios from 'axios';
import './Login.css';




class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lots: []
  };
  }
   
  onLogin=()=> {
          this.props.history.push('/timeSheet');
  }

  uploadCSV=(data)=> {
        console.log("hhh");
         //const FormData = require('form-data')
         const element = document.getElementById('csv')
          const file = element.files[0]
          const bodyFormData = new FormData();
          bodyFormData.append('file', file);
        
          console.log(bodyFormData)
          
            axios.post('http://127.0.0.1:443/api/bulk-upload', bodyFormData, 
            { 
              headers: {'content-type': `multipart/form-data; boundary=${bodyFormData._boundary}`} })
            .then(function(res) {
              
              console.log("res");
            }).catch(function(error) {
              console.log("error");
           
              
            });
}


  onDelete=(data)=> {
    axios.post('http://127.0.0.1:443/api/delete-all')
      .then(res => {
        console.log(res);
          // this.props.history.push('/home');
         
      }).catch(error => {
      });
}


onCSVDwonload=(data)=> {
  const rowTwo = [];
  const rows = [];
  var col=this.state.column.map( (result, i)=> {
    rowTwo.push(result.COLUMN_NAME)
  });
  rows.push(rowTwo);
  let csvContent = "data:text/csv;charset=utf-8," 
      + rows.map(e => e.join(",")).join("\n");

      var encodedUri = encodeURI(csvContent);
      var link = document.createElement("a");
      link.setAttribute("href", encodedUri);
      link.setAttribute("download", "my_data.csv");
      document.body.appendChild(link);
      link.click();
  }
    componentWillMount() {

      
      axios.post('http://127.0.0.1:443/api/par-vehicles', {
      })
        .then(res => {
            this.setState({ lots: res.data.message });
        }).catch(error => {
        });

        axios.post('http://127.0.0.1:443/api/column', {
        })
          .then(res => {
            console.log(res);
              this.setState({ column: res.data.message });
          }).catch(error => {
          });
      
  }


  
      render() {
                
        return (
         
          <div className=" ">
                    <h3>Countries</h3>
                    <button type="button" className="btn btn-primary" ripple="ripple" onClick={()=>{this.onDelete()}}>Delete All</button>
                    <button type="button" className="btn btn-primary" ripple="ripple" onClick={()=>{this.onCSVDwonload()}}>Download CSV Template</button>
                    <div>
                    <input type="file" id="csv"/>
                    <button type="button" className="btn btn-primary" ripple="ripple" onClick={()=>{this.uploadCSV()}}>Upload CSV</button>
                    </div>
                    
                    <form >
                      <div className="">
                      <Country/>
                      </div>
                        
                    </form>
                </div>
      
      )
      
    }
  };

export default Main;