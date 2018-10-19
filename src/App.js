import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { Input, Form, Button,Table,Layout,columns} from 'antd';

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     search: '',
  //   };
  // }
 
  constructor( ) {
    super()
    this.state = {
      dataSource: []
    }
  }

  componentDidMount() {

    axios.get('https://ffc-nectec.herokuapp.com/v0/org?query=')  
      .then(res => console.log(res)
      )
      .catch(function (error) {
    }) 
  }

  render() {
    console.log(this.data);
    
    console.log(this.state.dataSource);
    // console.log(columns);

    const columns = [{
      title: 'NAME',
      dataIndex: 'name',
      key: 'name',
      width: '2%'
    },{
      title: 'TEL',
      dataIndex: 'tel',
      key: 'tel',
      width: '5%'
    },{
      title: 'ADDRESS',
      dataIndex: 'address',
      key: 'address',
      width: '5%'
    },{
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      width: '5%'
    },{
      title: 'TYPE',
      dataIndex: 'type',
      key: 'type',
      width: '5%'
    },{
      title: 'TIMESTAMP',
      dataIndex: 'timestamp',
      key: 'timestamp',
      width: '5%'
    }]    

    const Search = Input.Search;
    return (
      <div style={{marginTop:100}}>
        <div className="App">
          <div style={{marginTop:10}}>
            {/* <h2></h2> */}
          </div>
        </div >
        <center>
        <div style={{marginTop:50,width:600}}>  
        <Search
      placeholder="input search text"
      enterButton="Search"
      size="large"
      onSearch={value => console.log(value)}
    />
        </div>  
        <Layout.Content style = {{margin: '24px 16px 0', overflow: 'auto', display: 'flex', flexDirection: 'row'}}>
        <div style = {{ padding: 24, background: '#fff', 'flex': 1, minHeight: '800px', minWidth: '800px', textAlign: 'left'}}>
        <Table dataSource = {this.state.dataSource} columns = {columns}/>
        </div>
      </Layout.Content>
        </center>
      </div>
    );
  }
}
export default App;

