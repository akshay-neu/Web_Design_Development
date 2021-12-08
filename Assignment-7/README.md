# assignment-7-akshay-neu
assignment-7-akshay-neu created by GitHub Classroom


| Northeastern ID | Name | Email ID | GitHub ID
| --- | --- | --- | ---
|001563326 | Akshay Khandelwal | khandelwal.ak@northeastern.edu | akshay-neu


# Name of the Assignment:

Assignment 7
 
# Assignment Requirement:
User Requirements:
1. As a developer, I should be able to fetch all existing to-do items using Todo Resource.
2. As a developer, I should be able to add a to-do item using Todo Resource.
3. As a developer, I should be able to update a to-do item using Todo Resource.
4. As a developer, I should be able to delete a to-do item using Todo Resource.

Technical Requirements:
1. The goal of this assignment is to learn about Nodejs and REST API.
2. Use the express framework for developing the endpoints.
3. Use MongoDB for the persistence layer.
4. A todo object has id, title, description, createdDate, & lastModifiedDate properties.

# Folder Structure

1. 'api' folder contains controllers, models, routes, services directories.
2. .gitignore file.
3. README.md file.

# Project Run guidelines:

1. Download/clone the repository.
2. Open a terminal at the file location.
3. Create a 'data' folder in the BIN directory of the MongoDB
4. In the MongoDB BIN folder, run command: mongod --dbpath ../../data
5. In the folder structure, run command: npm i --save express mongoose cookie-parser debug morgan
6. Then run the command: node server.js
7. Try POST, GET, PUT, DELETE in Postman at http://localhost:3000/todolist
8. Check the changes in the MongoDB Compass 'todo.todos'
