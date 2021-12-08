
import React from 'react';
import './App.scss';
import { Navbar } from './Navbar/Navbar';
import { Contacts } from './Contacts/Contacts';

import { addManyontacts, ContactActionTypes } from './Store/Actions/contact.action';
import {connect} from 'react-redux';

const mapDispatchToProps = (dispatch) => {

  return{
    addMany: contacts => dispatch(addManyContacts(contacts))
  }
};

// export class App extends React.Component 
class App extends React.Component{

  constructor(props){
    super(props);

   // this.state = {
   //   contacts: [                         // now reading data from public/data/contacts.json
   //     {"firstName" : "Quincy", "lastName" : "Adams"}
   //   ]
   // };
  }

  create() { // creates a new contact and adds in the list
   // this.setState((state, props) => ({
   //   contacts: [...state.contacts, {"firstName": "Add First Name", "lastName": "Add Last Name"}]
   // // // // contacts: state.contacts.push()
   //  }));
   
 
  }

  componentDidMount() {
    var toJson = (response) => response.json();

    const loadData = (config) => {
      fetch(config.contacts_api_url).then(toJson)
      .then((contacts) => {
        this.setState({contacts });
      });

    }

    // fetch('config/config.json').then(toJson)
    // .then((config)=> {
    //   fetch(config.contacts_api_url).then(toJson)
    //   .then((contacts) => {
    //   //  this.setState({contacts});
      
    //       this.props.addMany(contacts);
    // });
    // });
  }

  // render() {
  //   return (
  //   <div>
  //     <Navbar create= {this.create.bind(this)}> </Navbar> // CREATE function is written above
  //    <Contacts  contacts= {this.state.contacts}> </Contacts> // contacts array passed to .js
  //        <h1>HELLO WORLD this is a REACT Project!! </h1>
  //   </div>
  //   );
  // }

  render() {
    return (
      <div>
        <Navbar>

        </Navbar>
        <Contacts>
          
        </Contacts>
      </div>
    )
  }

}

const ConnectedApp = connect(null, mapDispatchToProps) (App); // connect() method of react-redux

export default ConnnectedApp;


