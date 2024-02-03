const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Product = require('../models/Product.js');

router.get('/', (req, res, next) => {
    // Product.find((err, products) => {
    //     if (err) return next(errz);
    //     res.json(products);
    // })
    Product.find().then(products=>{
        res.json(products);
    })
})

router.get('/:id', (req, res, next) => {
    Product.findById(req.params.id).then((post) => {
        res.json(post);
    }).catch(err=>{return next(err)})
})

router.post('/', (req, res, next) => {
    Product.create(req.body).then((post) => {
        res.json(post);
    }).catch(err=>{return next(err)})
})

router.put('/:id', (req, res, next) => {
    Product.findByIdAndUpdate(req.params.id, req.body).then(post => {
        res.json(post);
    }).catch(err=>{return next(err)})
})

router.delete('/:id', (req, res, next) => {
    Product.findByIdAndDelete(req.params.id).then(post => {
        res.json(post);
    }).catch(err=>{return next(err)})
})

module.exports = router;