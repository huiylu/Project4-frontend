import { useEffect } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import React from 'react';
// es6
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

const Table = (props) => {
  // const products = [ props.items ];
  const columns = [{
      dataField: 'number',
      text: 'Amount Seen',
      sort: true
    }, {
      dataField: 'name',
      text: 'Unique Name',
      sort: true
  }];

  useEffect(() => {
      setTimeout(props.getProduct() , 300);
      
  });
  console.log(props.items)
  return (

      <BootstrapTable keyField='id' data={ props.items } columns={ columns } striped hover condensed />
  )
}

export default Table;
  