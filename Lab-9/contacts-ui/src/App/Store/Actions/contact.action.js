
// Action is just same as JS Event Listner - matching name
export const ContactActionTypes = {

    ADD_MANY_CONTACTS: '[Contact] Add many contacts',
    ADD_CONTACT: '[Contact] Add a new contact',
    DELETE_CONTACT: '[Contact] Delete a contact',
    UPDATE_CONTACT: '[Contact] Update a contact'
};

export const addContact = (payload) => ({type: ContactActionTypes.ADD_CONTACT, payload});
// a function which take payload as an input object and returns it in a specified format

export const deleteContact = (payload) => ({type: ContactActionTypes.DELETE_CONTACT, payload});
export const updateContact = (payload) => ({type: ContactActionTypes.UPDATE_CONTACT, payload});
export const addManyontacts = (payload) => ({type: ContactActionTypes.ADD_MANY_CONTACTs, payload});




