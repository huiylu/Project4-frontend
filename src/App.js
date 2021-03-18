import './App.css';
import Table from './component/Table';
import axios from 'axios';
import React, { useState } from 'react';
import Header from './component/Header'
// es5 
//require('react-bootstrap-table-next/dist/react-bootstrap-table2.min.css');

// es6
//import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';




function App() {
  const [items, setItems] = useState([]);
  const [next_id, setNextid] = useState('0');
  const getProduct = ()=>{
    console.log('Axios calling')
    axios.get(`${process.env.REACT_APP_SERVER_URL}/${next_id}`)
    .then(response => {
      console.log('success');
      console.log(response.data.items);
      setNextid(response.data.next_id)
      setItems(response.data.items);
    }).catch(err=>{
      console.log('failure');
      console.log(err);
    })
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <div className="header">
        Current Change id: {next_id}
        <Table items={items} setItems={setItems} next_id={next_id} setNextid={setNextid} getProduct={getProduct} />
      </div>
      
    </div>
  );
}

export default App;
