/*
import express from 'express';

//const express = require('express')
const app = express();
const port = 3001;

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/contacts', (req,res) => {
    res,send('contactsss!')
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});

*/


import { response } from 'express';
import app from './api/app.js';

const port = 3000;

app.listen(port, ()=> {

    console.log(`Example app listening at http://localhost:${port}`)
});
