const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
     //#swagger.tags=[ 'Contacts']
    const result = await mongodb.getDatabase().db('project1').collection('contacts').find();
    result.toArray().then((contacts) => {
       res.setHeader('Content-Type', 'application/json');
       res.status(200).json(contacts); 
    });
};

const getSingle = async (req, res) => {
    //#swagger.tags=[ 'Contacts']
    const contactId = new ObjectId(req.params.id);
    const result = await mongodb.getDatabase().db('project1').collection('contacts').find( {_id: contactId});
    result.toArray().then((contacts) => {
       res.setHeader('Content-Type', 'application/json');
       res.status(200).json(contacts); 
    });
};

const createContact = async (req, res) => {
    //#swagger.tags=[ 'Contacts']
    const contact = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favoriteColor: req.body.favoriteColor,
        dob: req.body.dob
    }
    const response = await mongodb.getDatabase().db('project1').collection('contacts').insertOne(contact);
    if (response.acknowledged) {
        res.status(204).end();
    } else {
        res.status(500).json(response.error || 'Some error occurred while updating the user.');
    }
};

const updateContact = async (req, res) => {
    //#swagger.tags=[ 'Contacts']
    const contactId = new ObjectId(req.params.id);
    const contact = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favoriteColor: req.body.favoriteColor,
        dob: req.body.dob
    }
    const response = await mongodb.getDatabase().db('project1').collection('contacts').replaceOne({_id: contactId}, contact);
    if (response.modifiedCount > 0) {
        res.status(204).end();
    } else {
        res.status(500).json(response.error || 'Some error occurred while updating the user.');
    }
};

const deleteContact = async (req, res) => {
    //#swagger.tags=[ 'Contacts']
    const contactId = new ObjectId(req.params.id);
    const result = await mongodb.getDatabase().db('project1').collection('contacts').deleteOne({_id: contactId}, true);
    if (result.deletedCount > 0) {
        res.status(204).end();
    } else {
        res.status(500).json(result.error || 'Some error occurred while updating the user.');
    }
};

module.exports = {
    getAll,
    getSingle,
    createContact,
    updateContact,
    deleteContact
};