"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbMethods = exports.ContactModel = void 0;
const mongoose = require('mongoose');
const contactSchema = new mongoose.Schema({
    name: { type: "string", required: true },
    surname: { type: "string", optional: true },
    picture: { type: "string", optional: true },
    phoneNumbers: {
        type: "array",
        minItems: 1,
        maxItems: 10,
        items: {
            type: "object",
            properties: {
                type: { type: "string", enum: ['HOME', 'WORK', 'MOBILE'], default: 'MOBILE' },
                number: { type: "string", required: true },
            },
        },
    },
    metadata: {
        type: "object",
        properties: {
            email: { type: "string", optional: true },
            address: { type: "string", optional: true },
            website: { type: "string", optional: true },
            birthdate: { type: "date", optional: true },
            notes: { type: "string", optional: true },
        },
    },
    user_username: { type: "string", required: true },
}, { versionKey: false });
exports.ContactModel = mongoose.model('Contact', contactSchema);
exports.dbMethods = {
    getAllContacts: () => exports.ContactModel.find(),
    getContactById: (id) => exports.ContactModel.findOne({ _id: id }),
    getContactsByUser: (username) => exports.ContactModel.find({ user_username: username }).then((contacts) => contacts.map(contact => contact.toObject())),
    getAllNumbersForContact: (id) => exports.ContactModel.findOne({ _id: id }).then(contact => contact.phoneNumbers),
    addContact: (values) => new exports.ContactModel(values).save().then((contact) => contact.toObject()),
    updateContactById: (id, values) => exports.ContactModel.findByIdAndUpdate(id, values, { new: true }),
    deleteContactById: (id) => exports.ContactModel.findOneAndDelete({ _id: id })
};
