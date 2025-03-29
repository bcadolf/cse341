const mongodb = require('../data/database');
const {Decimal128, ObjectId} = require('mongodb');

// products crud
const getAll = async (req, res) => {
    try {
    const result = await mongodb
        .getDatabase()
        .collection('renewableEnergy')
        .find()
        .toArray();

    res.status(200).json(result);
    } catch (err) {
        console.error('Error retrieving data:', err);
        res.status(500).json({ error: 'An error occurred while retrieving the data.'});
    }
};

const getOne = async (req, res) => {
    try {
        const productId = new ObjectId(req.params.id)
        const result = await mongodb
            .getDatabase()
            .collection('renewableEnergy')
            .find( {_id: productId})
            .toArray()
            
        res.status(200).json(result);
    } catch (err) {
        console.error('Error retrieving product:', err);
        res.status(500).json({ error: 'An error occurred while retrieving the product.'});
    }
}

const addProduct = async (req, res) => {
    try {
        const product = {
            name: req.body.name,
            price: Decimal128.fromString(req.body.price.toString()),
            form: req.body.form,
            description: req.body.description,
            stock: Number(req.body.stock),
            ingredients: req.body.ingredients,
            warnings: req.body.warnings,
            size: req.body.size,
            flavor: req.body.flavor
        }
        const result = await mongodb
            .getDatabase()
            .collection('renewableEnergy')
            .insertOne(product);
        res.status(201).json({message: 'Product added', ObjectId: result.insertedId});
    } catch (err) {
        console.error('Error adding product:', err);
        res.status(500).json({error: 'Unknown error occured while adding the product'});
    }
};

const updateProduct = async (req, res) => {
    try {
        const productId = new ObjectId(req.params.id);
        const product = {
            name: req.body.name,
            price: Decimal128.fromString(req.body.price.toString()),
            form: req.body.form,
            description: req.body.description,
            stock: Number(req.body.stock),
            ingredients: req.body.ingredients,
            warnings: req.body.warnings,
            size: req.body.size,
            flavor: req.body.flavor
        }
        const result = await mongodb
            .getDatabase()
            .collection('renewableEnergy')
            .replaceOne({_id: productId}, product);
        if (result.matchedCount === 0) {
            res.status(404).json({message: 'Product not found'});
        } else {
            res.status(200).json({message: 'Product updated'});
        }
    } catch (err) {
        console.error('Error updating product:', err);
        res.status(500).json({error: 'Unknown error occured while updating the product'});
    }
};

const removeProduct = async (req, res) => {
    try {
        const productId = new ObjectId(req.params.id);
        const result = await mongodb
            .getDatabase()
            .collection('renewableEnergy')
            .deleteOne({_id: productId});
        if (result.deletedCount === 1) {
            res.status(200).json({message: 'Product deleted.'})
        } else {
            res.status(404).json({message: 'Product not found'});
        }
    } catch (err) {
        console.error('Error deleting product:', err);
        res.status(500).json({ error: 'An error occurred while deleting the product.' })
    }
};


module.exports = {
    getAll,
    getOne,
    addProduct,
    updateProduct,
    removeProduct
};