require('dotenv').config();
const express = require('express');  
const app = express();
const routes = require('./routes');
const cors = require('cors');
const methodOverride = require('method-override'); 
const bodyParser = require('body-parser');


app.use((req, res, next)=>{
    console.log('I run for all routes');
    next();
  })
  

app.use(express.urlencoded({ extended: true }));


app.use(methodOverride('_method'));

const corsOptions = {
    origin: ['http://localhost:3000'],
    methods: "GET,POST,PUT,DELETE",
    credentials: true, //allows session cookies to be sent back and forth
    optionsSuccessStatus: 200 //legacy browsers
  }

app.use(cors(corsOptions))
app.use(bodyParser.json());

app.use(express.static(__dirname + '/uploads'));// provides ability to serve local images

app.use('/images', routes.images);
app.use('/user', routes.user);


app.listen(process.env.PORT, () => {
    console.log(`I am listening on port ${process.env.PORT}`);
})
