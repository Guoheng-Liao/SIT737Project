const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

require('dotenv').config();


const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true}
).catch(error => console.log(error.reason));

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfull");
})

const exercisesRouter = require('./routes/exercises');
const productRouter = require('./routes/products');
const userRouter = require('./routes/userRouter');

app.use(bodyParser.json());
app.use('/exercises', exercisesRouter);
app.use('/users', userRouter);
app.use('/products', productRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})

