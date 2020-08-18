require('dotenv').config();

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');

//My Routes
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const CategoryRoutes = require('./routes/category');
const ProductRoutes = require('./routes/product');
const OrderRoutes = require('./routes/order');
const Player = require('./routes/Player');


//Port
const port = process.env.PORT || 1519;

//db connection..
const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE, 
{useNewUrlParser: true, 
useUnifiedTopology: true,
useCreateIndex:true
}).then(()=>{
    console.log("DB CONNECTED");
});

//Middle ware..
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());


//My Routes..
app.use('/api',authRoutes);
app.use('/api',userRoutes);
app.use('/api',CategoryRoutes);
app.use('/api',ProductRoutes);
app.use('/api',OrderRoutes);
app.use('/api',Player);


app.get('/', (req, res) => res.send('Ritesh Mern BootCamp!'))

app.listen(port, () => console.log(`App listening at http://localhost:${port}`))