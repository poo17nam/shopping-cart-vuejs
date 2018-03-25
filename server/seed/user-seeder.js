var User = require('../src/models/user');

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/shopping',{
  useMongoClient:true
});

console.log("Seeding user data...");
var users = [
    new User({
        email:'test@test.com',
        password:'test'
    }),
    new User({
        email:'abc@gmail.com',
        password:'test'
    }),
    new User({
        email:'apurv@yahoo.com',
        password:'test'
    }),
    new User({
        email:'poo@gmail.com',
        password:'test'
    }),
    new User({
        email:'xyz@gmail.com',
        password:'test'
    }),
];

var done = 0;
for (var i = 0; i < users.length; i++) {
    users[i].save(function(err, result) {
        done++;
        if (done === users.length) {
            exit();
        }
    });
}
function exit() {
  mongoose.disconnect();
}
