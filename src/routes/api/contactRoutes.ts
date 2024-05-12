const express = require('express');

import { getAllContacts, getContactByIdr, getAllNumbersForContact, getContactsByUser,
         addContact, updateContactById, partiallyUpdateContactById,  deleteContactById } from '../../controller/contactController';

import { validateContact } from '../../middleware/contactValidation';

const router = express.Router();

router.route('/')
    .get(getAllContacts)
    .post(validateContact, addContact);

router.route('/:id')
    .get(getContactByIdr)
    .put(validateContact, updateContactById)
    .patch(partiallyUpdateContactById)
    .delete(deleteContactById)

router.route('/:id/phoneNumbers').get(getAllNumbersForContact)

router.route('/user/:username').get(getContactsByUser)

module.exports = router;