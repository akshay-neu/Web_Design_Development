import AppState from "../State"; // importing the entire app state
import { ContactActionTypes } from "../Actions/contact.action";

const reducer = (state=AppState, action) => {

    const type = action.type;
    let contacts;

    switch(type) {


        case ContactActionTypes.ADD_MANY_CONTACTS:
            contacts = [...state.contacts, ...action.payload]
            break;

        case ContactActionTypes.ADD_CONTACT:
            contacts = [...state.contacts, action.payload]
            break;

        case ContactActionTypes.DELETE_CONTACT:
            contacts = state.contacts.filter(c => c.firstName != action.payload.firstName);
            contacts = [...contacts];
            break;

    }
    return  Object.assign({}, state, {contacts});
    // contacts -- is the new state
    // state -- is the old state
    // we are merging them

};

export default reducer;

// Store is an immutable object
// we will be giving this reducer to the store for initialization
// so the store knows if certain action is dispatched to the store
// then how to update the state in it

