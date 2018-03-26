var Product = require('../src/models/product');

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/shopping',{
  useMongoClient:true
});

console.log("Seeding...");
var products = [
    new Product({
        imagePath: 'http://139.59.35.188:3000/vuejs.png',
        title: 'Gothic Video Game',
        description: 'Awesome Game!!!!',
        price: 10,
        qty:1,
        inStock:20
    }),
    new Product({
        imagePath: 'http://139.59.35.188:3000/vuejs.png',
        title: 'Casserol Set',
        description: 'Helps keep your breads warm for a longer time',
        price: 20,
        qty:1,
        inStock:10
    }),
    new Product({
        imagePath: 'http://139.59.35.188:3000/vuejs.png',
        title: 'Garnier Essential Oils Shampoo',
        description: 'Cleanses and nourishes hair from roots to tips',
        price: 40,
        qty:1,
        inStock:40
    }),
    new Product({
        imagePath: 'http://139.59.35.188:3000/vuejs.png',
        title: 'Caprese Peach Clutch',
        description: 'This elegant clutch comes with high quality leather make',
        price: 15,
        qty:1,
        inStock:60
    }),
    new Product({
        imagePath: 'http://139.59.35.188:3000/vuejs.png',
        title: 'Dark Souls 3 Video Gam',
        description: 'Will keep you engaged till the end',
        price: 50,
        qty:1,
        inStock:90
    })
];

var done = 0;
for (var i = 0; i < products.length; i++) {
    products[i].save(function(err, result) {
        done++;
        if (done === products.length) {
            exit();
        }
    });
}
function exit() {
  mongoose.disconnect();
}
