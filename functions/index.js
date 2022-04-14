const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  // eslint-disable-next-line max-len
  "sk_test_51KltKULZrIsaOHRhF5rUhV0d03JKmpYEV5M1Dmz4iyk2Xnwi5edGxV6wMK25LpdkYLmnnzW5EZkxMQOd0AYlm2LP00IWUC3gVG"
);

const corsOptions = {
  origin: true,
};
const app = express();

app.use(cors(corsOptions));
app.use(express.json());

app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("Payments request recieved", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currenct: usd,
  });

  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

exports.api = functions.https.onRequest(app);
