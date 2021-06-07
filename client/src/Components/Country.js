import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import axios from 'axios';



const BasicTable = () => {
  
  const [lots, setLots] = React.useState([]);
 
const columns = [
  {
    name: 'ID',
    selector: 'id',
    sortable: true,
  },
  {
    name: 'ISO',
    selector: 'iso',
    sortable: true,
  },
  {
    name: 'Name',
    selector: 'name',
    sortable: true,
  },
  {
    name: 'Nice name',
    selector: 'nicename',
    sortable: true,
  },
  {
    name: 'Num Code',
    selector: 'numcode',
    sortable: true,
  },
  {
    name: 'Phone code',
    selector: 'phonecode',
    sortable: true,
  },
];


useEffect(()=>{
  axios.post('http://127.0.0.1:443/api/par-vehicles', {
  })
    .then(res => {
      console.log(res, "res")
      setLots( res.data.message );
    }).catch(error => {
    });
},[]);


const data = lots.map((localData) => {
  return {
    id: localData.id,
    iso: localData.iso,
    iso3: localData.iso3,
    name: localData.name,
    nicename: localData.nicename,
    numcode: localData.numcode,
    phonecode: localData.phonecode
  };
});

const tableDataa = {
  columns,
  data,
};

  return (
    <DataTableExtensions {...tableDataa} exportHeaders>
                        <DataTable
                          columns={columns}
                          data={data}
                          defaultSortField="id"
                          defaultSortAsc={false}
                          pagination
                          highlightOnHover
                        />
                      </DataTableExtensions>
  );
};

export default BasicTable