import React from 'react';
import ToDoList from './ToDoAppList.js';
import './main.scss';

export class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      data: ''
    }
  }
  componentDidMount(){
    this.getData();
  }
  getData(){
    fetch('http://localhost:3000/todolist/', {
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
      },
    }).then(response => response.json())
    .then(data => {
        this.setState({
       data: data
      })
      if(!data.length) {
        alert("Hurray! All your tasks are completed");
      }
    })
    .catch(error => this.setState({ error }));
  }
 
  
  render(){
    
    return (
      <ToDoList result={this.state.data}></ToDoList>
     );
  }
  
}

export default App;