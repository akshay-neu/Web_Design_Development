import todoService from './../services/todo.service.js';



const index = (request, response) => {
    todoService.search({})
        .then((todo) => {
            response.status(200);
            response.json(todo);
        })
        .catch(handleError(response));
};




// Get the data
const get = (request, response) => {
    const id = request.params.id;
    todoService.get(id)
        .then((todo) => {
            response.status(200);
            response.json(todo);
        })
        .catch(handleError(response));
};


// Post the data
const create = (request, response) => {
    const newTodo = Object.assign({}, request.body);
    todoService.create(newTodo)
        .then((todo) => {
            response.status(200);
            response.json(todo);
        })
        .catch(handleError(response));
};



//Update the data
const update = (request, response) => {
    const id = request.params.id;
    const updateTodo = Object.assign({}, request.body);
    todoService.update(id, updateTodo)
        .then((todo) => {
            response.status(200);
            response.json(todo);
        })
        .catch(handleError(response));
};



// Update The data
const remove = (request, response) => {
    const id = request.params.id;
    todoService.remove(id)
        .then((todo) => {
            response.status(200);
            response.json({
                message: "Deleted Successfully!"
            });
        })
        .catch(handleError(response));
};



//Here all errors will be handled
const handleError = (response) => {
    return (error) => {
        response.status(500);
        response.json({
            message: error.message
        })
    };
}

export default {
    create: create,
    index: index,
    get: get,
    update: update,
    remove: remove
}