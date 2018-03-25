var mongoose = require('mongoose');
var config = require('../../config')
var jwt = require('jsonwebtoken');
//var ContactSchema = require('../models/crmModel');

//const Contact = mongoose.model('Contact',ContactSchema); // leverage ContactSchema on Contact collection
const Product = require('../models/product');
const User = require('../models/user');
const Order = require('../models/order');

exports.getProducts = (req,res) => {
  Product.find({},(err,product) => {
    if(err){
      res.send(err);
    }
    res.json(product);
  });
};

//add new user
exports.addUser = (req,res) => {
  let newUser = new User(req.body);

  newUser.save((err, user) => {
    if(err) {
      res.send(err);
    }
    res.json(user);
  });
};

//get user details
exports.login = (req,res) => {
  User.findOne({'email':req.body.email,'password':req.body.password},(err,user) => {
    if(err){
      res.send(err);
    }
    if(!user){
      res.json({ code: 400, message: 'Authentication failed. User not found.' });
    }else if(user){
      // check if password matches
      if (user.password != req.body.password) {
        res.json({ code: 400, message: 'Authentication failed. Wrong password.' });
      } else {
        const payload = {
          email : user.email
        }

        var token = jwt.sign(payload, config.secret, {
         expiresIn: '1h'
       });

       res.json({
        code: 200,
        message: 'success',
        token: token,
        data: user
      });

      }

    }
  });
};

exports.order = (req,res) =>{
  let token = req.body.token;
  console.log("headers------------------------------------------",req.headers);
  isAuthenticated(req,res,token);

  let newOrder = new Order({email:req.decoded.email,cart:req.body.cart})

  newOrder.save((err, resp) => {
    if(err) {
      res.send(err);
    }
      res.json({code:200,decoded : req.decoded.email, cart: req.body.cart})
  });

}

//logout
exports.logout = (req,res) =>{
  res.json({code:200,message:"User logged out"})
}


function isAuthenticated(req,res,token){
  // decode token
  if (token) {

    // verifies secret and checks exp
    jwt.verify(token, config.secret, function(err, decoded) {
      if (err) {
        return res.json({ success: false, message: 'Failed to authenticate token.' });
      } else {
        // if everything is good, save to request for use in other routes
        req.decoded = decoded;

      }
    });

  } else {

    // if there is no token
    // return an error
    return res.status(403).send({
        code: 400,
        message: 'No token provided.'
    });

  }
}

/*exports.addNewContact = (req,res) => {
  let newContact = new Contact(req.body);

  newContact.save((err, contact) => {
    if(err) {
      res.send(err);
    }
    res.json(contact);
  });
};

exports.getContacts = (req,res) => {
  Contact.find({},(err,contact) => {
    if(err){
      res.send(err);
    }
    res.json(contact);
  });
};

exports.getContactWithID = (req,res) => {
  Contact.findById(req.params.contactId, (err,contact) =>{
    if(err){
      res.send(err);
    }
    res.json(contact);
  });
}

exports.updateContact = (req,res) => {
  Contact.findOneAndUpdate({_id:req.params.contactId},req.body, {new:true},(err,contact) => {
    if(err){
      res.send(err);
    }
    res.json(contact);
  })
}

exports.deleteContact = (req,res) => {
  Contact.remove({_id: req.params.contactId}, (err,contact) => {
    if(err){
      res.send(err);
    }
    res.json({message: 'Successfully deleted contact'});
  })
}*/


/*module.exports = addNewContact;
module.exports = getContacts;
module.exports = getContactWithID;
module.exports = updateContact;
module.exports = deleteContact;*/
