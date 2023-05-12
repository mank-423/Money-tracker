const express = require('express');
const cors = require('cors');
const Transaction = require('../api/models/Transaction');
const { default: mongoose } = require('mongoose');
require('dotenv').config();
const app = express();

app.use(cors());

app.use(express.json());

app.get('/api/test', (req, res)=> {
    res.json('test ok');
});

app.post('/api/transaction', async(req, res)=>{
    await mongoose.connect(process.env.MONGO_URI)
    // Create a new transaction with the data from the request body
    const { name, description, datetime, price } = req.body;
    const transaction = await Transaction.create({
      name,
      description,
      datetime,
      price,
    });
  
    res.json(transaction);
});

app.get("/api/transaction", async (req, res) => {
    await mongoose.connect(process.env.MONGO_URI);
    const transactions = await Transaction.find();
    res.json(transactions);
});

app.listen(4000, () => {
    console.log("Listening on port 4000");
});

