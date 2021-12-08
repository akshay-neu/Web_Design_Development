import { response } from 'express';
import * as TodoService from '../services/todo.js';

const errorhandler = (message, response) => {
    response.status(500);
    response.json({error: message});
};

const setSuccessResponse = (data, response) => {
    response.status(200);
    response.json(data);
}

// to get specific id data
export const get = async (request, response) => {
    try {
        const id = request.params.id;
        const todo = await TodoService.get(id);
        setSuccessResponse(todo, response);
    } catch (error) {
        errorhandler(error.message, response);
    }
};

// to get all data saved in db
export const index = async (request, response) => {
    try {
        const todos = await TodoService.search();
        setSuccessResponse(todos, response);
    }catch(e) {
        errorhandler(e.message, response);
    }

};

// to save in db
export const save = async (request, response) => {
    try {
        const todo = {...request.body};
        const newTodo = await TodoService.create(todo);
        setSuccessResponse(newTodo, response);
    } catch(e) {
        errorhandler(e.message, response);
    }
};

// to update an id
export const update = async (request, response) => {
    try {
        const id = request.params.id;
        const todo = { ...request.body, id };
        const updateTodo = await TodoService.update(todo);
        setSuccessResponse(updateTodo, response);
    } catch (error) {
        errorhandler(error.message, response);
    }
};


// to remove an id
export const remove = async (request, response) => {
    try {
        const id = request.params.id;
        const todo = await TodoService.remove(id);
        setSuccessResponse({ message: `Todo ${id} deleted successfully!` }, response);
    } catch (error) {
        errorhandler(error.message, response);
    }
};