import React from 'react';
import './Navbar.scss';

export class Navbar extends React.Component {

    constructor (props) {
        super(props);
    }
    // props have the contactlist

    createContact() {
        this.props.createHandler();
    }

    // onClick = {this.createContact.bind(this)}
    // setting the event handler

    render() {
        return (<nav>

             <h1 className="title"> Contacts App nav bar</h1>

             <span className="create" onClick={this.props.createHandler}>
              

             <img alt="Create" src="assets/image2.jpeg"/>  

             </span>

             </nav>);
    }
}


