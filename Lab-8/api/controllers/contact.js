import { response } from "express";
import * as contactService from "../services/contact.js";

const errorHandler = (message, response) => {
    response.status(500);
    response.json({ error: message });
}

const setResponse = (data, response) => {
    response.status(200);
    response.json(data);
}

export const index = async (request, response) => {
    try {
        const contacts = await contactService.search();
        setResponse(contacts, response);
    } catch (e) {
        errorHandler(e.message, response);
    }
}

export const save = async (request, response) => {
    try {
        const contact = { ...request.body };
        const newContact = await contactService.create(contact);
        setResponse(newContact, response);
    } catch (e) {
        errorHandler(e.message, response);
    }
};

export const get = async (request, response) => {
    try {
        const id = request.params.id;
        const contact = await contactService.get(id);
        setResponse(contact, response);
    } catch (error) {
        errorHandler(error.message, response);
    }
}

export const update = async (request, response) => {
    try {
        const id = request.params.id;
        const contact = { ...request.body, id };
        const updateContact = await contactService.update(contact);
        setResponse(updateContact, response);
    } catch (error) {
        errorHandler(error.message, response);
    }
}

export const remove = async (request, response) => {
    try {
        const id = request.params.id;
        const contact = await contactService.get(id);
        setResponse({ message: `Contact ${id} deleted successfully!` }, response);
    } catch (error) {
        errorHandler(error.message, response);
    }
}