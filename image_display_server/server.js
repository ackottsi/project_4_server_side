require('dotenv').config();
const express = require('express');  
const app = express();

const methodOverride = require('method-override'); 


app.use(methodOverride('_method'));


app.get('/somedata', (req, res) => {
    res.send('here is your information');
});

app.listen(process.env.PORT, () => {
    console.log(`I am listening on port ${process.env.PORT}`);
})
