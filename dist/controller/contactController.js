"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteContactById = exports.partiallyUpdateContactById = exports.updateContactById = exports.addContact = exports.getContactsByUser = exports.getAllNumbersForContact = exports.getContactByIdr = exports.getAllContacts = void 0;
const mongoose = require('mongoose');
const contactsSchema_1 = require("../model/contactsSchema");
const getAllContacts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const contacts = yield contactsSchema_1.dbMethods.getAllContacts();
        return res.send(contacts);
    }
    catch (error) {
        handleErrors(res, error);
    }
});
exports.getAllContacts = getAllContacts;
const getContactByIdr = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const contact = yield contactsSchema_1.dbMethods.getContactById(req.params.id);
        if (!contact) {
            return res.status(404).json({ error: `No contact found with id: ${req.params.id}` });
        }
        return res.send(contact);
    }
    catch (error) {
        handleErrors(res, error);
    }
});
exports.getContactByIdr = getContactByIdr;
const getAllNumbersForContact = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const phoneNumbers = yield contactsSchema_1.dbMethods.getAllNumbersForContact(req.params.id);
        if (phoneNumbers.lenght === 0) {
            return res.status(404).json({ error: `No contact found with id: ${req.params.id}` });
        }
        return res.send(phoneNumbers);
    }
    catch (error) {
        handleErrors(res, error);
    }
});
exports.getAllNumbersForContact = getAllNumbersForContact;
// // will be moved to userController
const getContactsByUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const contacts = yield contactsSchema_1.dbMethods.getContactsByUser(req.params.username);
        return res.send(contacts);
    }
    catch (error) {
        handleErrors(res, error);
    }
});
exports.getContactsByUser = getContactsByUser;
const addContact = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const contact = yield contactsSchema_1.dbMethods.addContact(req.body);
        return res.status(201).json(contact);
    }
    catch (error) {
        handleErrors(res, error);
    }
});
exports.addContact = addContact;
const updateContactById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let contact = yield contactsSchema_1.dbMethods.updateContactById(req.params.id, req.body);
        if (!contact) {
            contact = yield contactsSchema_1.dbMethods.addContact(req.body);
            res.status(201);
        }
        return res.send(contact);
    }
    catch (error) {
        handleErrors(res, error);
    }
});
exports.updateContactById = updateContactById;
const partiallyUpdateContactById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const contact = yield contactsSchema_1.dbMethods.updateContactById(req.params.id, req.body);
        if (!contact) {
            return res.status(404).json({ error: `No contact found with id: ${req.params.id}` });
        }
        return res.send(contact);
    }
    catch (error) {
        handleErrors(res, error);
    }
});
exports.partiallyUpdateContactById = partiallyUpdateContactById;
const deleteContactById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const contact = yield contactsSchema_1.dbMethods.deleteContactById(req.params.id);
        if (!contact) {
            return res.status(404).json({ error: `No contact found with id: ${req.params.id}` });
        }
        return res.status(204).send();
    }
    catch (error) {
        handleErrors(res, error);
    }
});
exports.deleteContactById = deleteContactById;
function handleErrors(res, error) {
    if (error instanceof mongoose.Error.CastError) {
        return res.status(400).json({ error: 'Invalid id format' });
    }
    console.log(error);
    return res.status(500).json({ error: 'Internal Server Error' });
}
