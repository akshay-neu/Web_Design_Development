import TodoRouter from './todo.route.js';

export default (app) => {
    app.use('/', TodoRouter);
};