"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const app = express();
const contact_1 = require("../model/contact");
let contactsDB = contact_1.contacts;
app.get('/contacts', (req, res) => {
    res.send(contact_1.contacts);
});
app.get('/contacts/:id', (req, res) => {
    const contact = contact_1.contacts.find(contact => contact.id === req.params.id);
    if (!contact) {
        return res.status(404).json({ error: `No contact with id: ${req.params.id}` });
    }
    return res.send(contact);
});
app.get('/contacts/:id/phoneNumbers', (req, res) => {
    const contact = contact_1.contacts.find(contact => contact.id === req.params.id);
    if (!contact) {
        return res.status(404).json({ error: `No contact with id: ${req.params.id}` });
    }
    return res.send(contact.phoneNumbers);
});
app.post('/contacts', (req, res) => {
    contactsDB.push(req.body);
    return res.status(201).json(req.body);
});
app.put('/contacts/:id', (req, res) => {
});
app.delete('/contacts/:id', (req, res) => {
    contactsDB = contactsDB.filter(contact => contact.id != req.params.id);
    return res.status(200);
});
