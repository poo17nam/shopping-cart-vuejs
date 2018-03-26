# Shopping-Cart Using Vue.js

A simple order management system similar to a shopping cart model found on a typical consumer website.

![No image available](https://raw.githubusercontent.com/poo17nam/shopping-cart-vuejs/master/server/public/view.png)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have Node, NPM, MongoDB installed.

### Steps

Clone the repository
```
$  git clone git@github.com:poo17nam/shopping-cart-vuejs.git
```

Navigate to server and client, install necessary packages
```
$  cd server/ & npm install
$  cd client/ & npm install
```

Run MongoDB on port 27017
```
$  service mongod start
```

Populate db with user and products data :
```
$  cd server/
$  node seed/product-seeder.js
$  node seed/user-seeder.js
```

Run node server :
```
$   node_modules/.bin/nodemon index.js
```

Initialize views :
```
$  cd client/
$  npm run dev
```

Node server is now running on http://localhost:3000 and views are available on http://localhost:8081/
