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
// const userRouter = require('./routes/users');
const productRouter = require('./routes/products');
const userRouter = require('./routes/userRouter');


// const data = require('./Data');

// app.get("/product/:id", (req, res)=>{
//     const productId = req.params.id;
//     const product = data.products.find(x=> x._id === productId);
//     // const product = data.products.find(x=> x._id === props.match.params.id);
//     if(product)
//     {
//         res.send(product);
//     }
//     else{
//         res.status(404).send({msg: "Product Not Found."});
//     }
// });


// app.get("/product/:id", (req, res)=>{
//     const productId = req.params.id;
//     const product = data.products.find(x=>x._id === productId);
//     if(product){
//         res.send(product);
//     }else{
//         res.status(404).send({msg: "Product Not Found." })
//     }
// });

// app.get("/shopping", (req, res)=>{
//     res.send(data.products);
// });

app.use(bodyParser.json());
app.use('/exercises', exercisesRouter);
app.use('/users', userRouter);
app.use('/products', productRouter);

// app.use('/users', userRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})

