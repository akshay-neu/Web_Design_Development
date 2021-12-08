

// creating store
// install the Redux package
// npm i react-redux --save
// npm i redux --save


import {createStore} from 'redux';

import reducer from './Reducers';

const store = createStore(reducer);

export default store;
