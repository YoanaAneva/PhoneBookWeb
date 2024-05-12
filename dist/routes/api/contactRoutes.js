"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const contactController_1 = require("../../controller/contactController");
const contactValidation_1 = require("../../middleware/contactValidation");
const router = express.Router();
router.route('/')
    .get(contactController_1.getAllContacts)
    .post(contactValidation_1.validateContact, contactController_1.addContact);
router.route('/:id')
    .get(contactController_1.getContactByIdr)
    .put(contactValidation_1.validateContact, contactController_1.updateContactById)
    .patch(contactController_1.partiallyUpdateContactById)
    .delete(contactController_1.deleteContactById);
router.route('/:id/phoneNumbers').get(contactController_1.getAllNumbersForContact);
router.route('/user/:username').get(contactController_1.getContactsByUser);
module.exports = router;
