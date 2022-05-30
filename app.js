const express = require('express')

var cors = require('cors')
var bodyParser = require('body-parser')

const app = express()
const port = 8000

require('dotenv').config()

const connectDB = require('./config/db');
connectDB();

const OrderRoutes = require('./routes/OrderRoutes');
const CategoryRoutes = require('./routes/CategoryRoutes');

// Init Middleware
app.use(express.json());
app.use(cors())
app.use('/api/orders', OrderRoutes);
app.use('/api/categories', CategoryRoutes);

// parse application/json
app.use(bodyParser.json());

app.get('/', (req, res)=>{
    res.send('Hello Refera Team')
})

app.listen(port, ()=>{
    console.log('The API is running on: '+port)
})