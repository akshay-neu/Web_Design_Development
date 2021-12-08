import Todo from "../models/todo.js";

// fetching all the data from db
export const search = (params ={}) => {
    const promise = Todo.find(params).exec();
    return promise;
};


// creating the data in db
export const create = (todo) => {
    const newTodo = new Todo(todo);
    return newTodo.save();
}


// fetching the id data from db
export const get = (id) => {
    const promise = Todo.findById(id).exec();
    return promise;
}


// updating the data in db
export const update = (todo) => {
    todo._id = todo.id;
    todo.lastModifiedDate = new Date();
    const promise = Todo.findByIdAndUpdate(todo.id, todo, { new: true }).exec();
    return promise;
}


// removing the data from db
export const remove = (id) => {
    const promise = Todo.findByIdAndRemove(id).exec();
    return promise;
}

