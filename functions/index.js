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

// Token is created using Checkout or Elements!
// Get the payment token ID submitted by the form:
const token = request.body.stripeToken; // Using Express

const charge = stripe.charges.create({
  amount: 999,
  currency: 'usd',
  description: 'Example charge',
  source: token,
});