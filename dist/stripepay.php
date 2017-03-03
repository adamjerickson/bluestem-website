<?php
require_once('stripe/init.php');

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: accept, content-type");

// Set your secret key: remember to change this to your live secret key in production
// See your keys here https://dashboard.stripe.com/account/apikeys
\Stripe\Stripe::setApiKey("sk_live_NrxtLlNLQJPXLElFEIGBTpN3");

// Get the credit card details submitted by the form
$data = json_decode(file_get_contents('php://input'), true);

$token = $data['token'];
$amount = $data['amount'];
$description = $description['description'];



// Create the charge on Stripe's servers - this will charge the user's card
try {
  $charge = \Stripe\Charge::create(array(
    "amount" => $amount, // amount in cents, again
    "currency" => "usd",
    "source" => $token,
    "description" => $description
    ));
  echo "success";
} catch(\Stripe\Error\Card $e) {
  // The card has been declined
  http_response_code(500);
  echo "failure";
  die();
}

?>