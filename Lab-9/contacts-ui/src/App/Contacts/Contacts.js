
import React from 'react';
import './Contacts.scss'


import {connect} from 'react-redux';

const mapStoreToProps = (state) => ({contacts: state.contacts});


export class Contacts extends React.Component {

    constructor(props) {
        super(props);
        // const contacts = this.props.contacts;
    }

    render () {
        const contactElements = this.props.contacts.map((c,i) => 
        <li key={i} >{c.firstName || c.firstName} {c.lastName || c.lastName}</li>);
        return <div className="contacts-container"> 
            Contacts
            <ul> 
                    {contactElements}
            </ul>
            
            <h1> this is contacts.js ! </h1>
            
            </div>
    }
}

const ConnectedContacts = connect(mapStoreToProps, null)(Contacts);
export default ConnectedContacts;

