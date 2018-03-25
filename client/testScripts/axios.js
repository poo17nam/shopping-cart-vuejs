var axios = require('axios');

var data;
async function getProducts(){
axios.get('http://localhost:3000/product')
  .then(function (response) {
      data = response
  })
  .catch(function (error) {
    console.log(error);
  });
}

console.log(getProducts(),data)
