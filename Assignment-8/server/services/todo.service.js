import ToDo from './../models/todomodels.js';

//Searching for the data
const search = (param) => {
    const promise = ToDo.find(param).exec();
    return promise;
};


//get method 
const get = (id) => {
        const promise = ToDo.findById(id).exec();
        return promise;
    }

//create method
const create = (newTodo) => {
        const todo = new ToDo(newTodo);
        const promise = todo.save();
        return promise;
    }

//update method
const update = (id, updatedTodo) => {
        const promise = ToDo.findByIdAndUpdate({ _id: id },
            updatedTodo, { new: true }
        ).exec();
        return promise;
    }

//delete method
const remove = (id) => {
    const promise = ToDo.remove({ _id: id }).exec();
    return promise;
}

export default {
    search: search,
    get: get,
    create: create,
    update: update,
    remove: remove
}