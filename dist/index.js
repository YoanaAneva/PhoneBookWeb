"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const body_parser_1 = __importDefault(require("body-parser"));
app.use(body_parser_1.default.json());
app.use('/contacts', require('./routes/api/contactRoutes'));
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
const MONGO_URL = 'mongodb+srv://admin:adminpassword@phonebook-cluster.7idhfe1.mongodb.net/?retryWrites=true&w=majority&appName=phonebook-cluster';
mongoose.Promise = Promise;
mongoose.connect(MONGO_URL);
mongoose.connection.on('error', (error) => console.log(error));
