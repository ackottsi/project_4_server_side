require('dotenv').config();
const express = require('express');  
const app = express();
const routes = require('./routes');
const cors = require('cors');

const methodOverride = require('method-override'); 


app.use(methodOverride('_method'));

const corsOptions = {
    origin: ['http://localhost:3000'],
    methods: "GET,POST,PUT,DELETE",
    credentials: true, //allows session cookies to be sent back and forth
    optionsSuccessStatus: 200 //legacy browsers
  }

app.use(cors(corsOptions))

app.use('/images', routes.images)

app.get('/somedata', (req, res) => {
    res.send('here is your information');
});

app.listen(process.env.PORT, () => {
    console.log(`I am listening on port ${process.env.PORT}`);
})
