//'use strict';
var controller = require('../controllers/shoppingController');

module.exports = function(app) {


  app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.route('/product')
.get(controller.getProducts)

app.route('/login')
.post((req,res,next)=>{
  console.log("Payloads:",req.body)
  next();
},controller.login)

app.route('/order')
.post((req,res,next)=>{
  //console.log("Headers------------:",req.headers)
  //console.log("Body--------:",req.body)
  next();
},controller.order)

app.route('/logout')
.get(controller.logout)

app.route('/adduser')
.post(controller.addUser)


  /*app.route('/contact')
  .get((req,res,next)=> {
    //middleware
    console.log(`Request from ${req.originalUrl}`);
    console.log(`Request from ${req.method}`);
    next(); //makes sure we get out of the middleware and allows us to get to the second function.
  }, controller.getContacts)

  //POST endpoint
  .post(controller.addNewContact);


  app.route('/contact/:contactId')
  // get specific contact
  .get(controller.getContactWithID)

  // put request
  .put(controller.updateContact)

  //delete request
  .delete(controller.deleteContact); */



};
