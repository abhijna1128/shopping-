const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 8080;

// Middleware
app.use(express.json());
app.use(cors());

// Database Connection
mongoose.connect('mongodb+srv://abhijnarao11:abhi1128@cluster0.dmdrozp.mongodb.net/',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
).then(() => {
  console.log('Database Connected');
}).catch((error) => {
  console.log(error);
});

// Product Schema
const productSchema = new mongoose.Schema({
  id: Number,
  name: String,
  price: Number,
  rating: Number,
  image: String
});

const Product = mongoose.model('Product', productSchema);

// Routes
app.get('/api/products', async (req, res, next) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    next(error);
  }
});

app.post('/api/products', async (req, res, next) => {
  try {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    next(error);
  }
});

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Internal Server Error');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
