import BootstrapTable from 'react-bootstrap-table-next';

const products = [ {
        'id': 1,
        'name': 'Test',
        'price': '$100'
    },
    {
        'id': 2,
        'name': 'Test2',
        'price': '$200'
    },
    {
        'id': 3,
        'name': 'Test3',
        'price': '$300'
    } ];
const columns = [{
  dataField: 'id',
  text: 'Product ID'
}, {
  dataField: 'name',
  text: 'Product Name'
}, {
  dataField: 'price',
  text: 'Product Price'
}];

const Table = () => {
    return (
        <BootstrapTable keyField='id' data={ products } columns={ columns } />
    )
}

export default Table;
  