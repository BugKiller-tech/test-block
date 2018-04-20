const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });


// Set your secret key: remember to change this to your live secret key in production
// See your keys here: https://dashboard.stripe.com/account/apikeys

var stripe = require("stripe")("sk_test_IOqUUmheBCzexCbNcCnHmPNQ");


exports.charge = functions.https.onRequest((req, res) => {

  
  // Token is created using Checkout or Elements!
  // Get the payment token ID submitted by the form:
  
  const token = req.body.stripeToken; // Using Express

  stripe.customers.create({
    email: req.body.stripeEmail,
    source: token
  })
  .then(customer => stripe.charges.create({
    amount: 999,
    description: 'Example charge',
    currency: 'usd',
    customer: customer.id
  }))
  .then(charge => res.json({success: true, message: 'Successfully paid'}))
  .catch(err => {
    res.status(400).json({ errors: JSON.stringify(err) })
  })
});
