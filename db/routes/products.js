const router = require('express').Router();
let Product = require('../models/product.model');
const isAuth = require("../util").isAuth;
const isAdmin = require("../util").isAdmin;

router.route('/').get(async(req, res) => {
    const product = await Product.find({});
    res.send(product);
    // Product.find()
    //     .then(products => res.json(products))
    //     .catch(err => res.status(400).json('Error: ' + err));
});

router.route('checkout/:id').get(async(req, res) => {
    const product = await Product.find({_id: req.params.id});
    if(product){
        res.send(product);
    } else{
        res.status(404).send({message: " "});
    }

});

router.route('/add').post(isAuth, isAdmin, async(req, res) => {
    const name = req.body.name;
    const price = Number(req.body.price);
    const image = req.body.image;
    const brand = req.body.brand;
    const category = req.body.category;
    const countInStock = Number(req.body.countInStock);
    const description = req.body.description;

    const newProduct = await new Product({
        name,
        price,
        image,
        brand,
        category,
        countInStock,
        description
    });

    newProduct.save()
        .then(() => res.json('Product added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Product.findById(req.params.id)
        .then(product => res.json(product))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id', isAuth, isAdmin).delete((req,res) => {
    Product.findById(req.params.id)
        .then(() => res.json('Product deleted.'))
        .catch(err => res.status(400).json('Error: '+ err));
});

router.route('/update/:id', isAuth, isAdmin).put((req, res) => {
    const productId = req.params.id;
    Product.findById(productId)
        .then(product => {
            product.name = req.body.name;
            product.price = req.body.price;
            product.image = req.body.image;
            product.brand = req.body.brand;
            product.category = req.body.category;
            product.countInStock = req.body.countInStock;
            product.description = req.body.description;
            product.save()
                .then(() => res.status(200).send({message: 'Product updated!' }))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;