import contactRouter from './contact.js';

export default(app) => {

    /* Contacts routes */
    app.use('/', contactRouter);


}





