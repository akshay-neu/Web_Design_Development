import todoRouter from './todo.js';

export default (app) => {
    /* Todo routes  */
    app.use('/',todoRouter);
}
