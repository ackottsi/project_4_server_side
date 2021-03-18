require('dotenv').config();
const express = require('express');  
const app = express();
const routes = require('./routes');
const cors = require('cors');
const methodOverride = require('method-override'); 
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const constants = require('./constants');
const cookieParser = require("cookie-parser");


app.use((req, res, next)=>{
    next();
  })
  
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(methodOverride('_method'));

const corsOptions = {
    origin: ['http://localhost:3000'],
    methods: "GET,POST,PUT,DELETE",
    credentials: true, //allows session cookies to be sent back and forth
    optionsSuccessStatus: 200 //legacy browsers
  }

app.use(cors(corsOptions))

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://imagephotobookgaproject4.surge.sh/");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
})








app.use(bodyParser.json());

const verifyToken = (req, res, next) => {
    let token = req.cookies.jwt; // COOKIE PARSER GIVES YOU A .cookies PROP, WE NAMED OUR TOKEN jwt
    
    jwt.verify(token, process.env.JWT_SECRET, (err, decodedUser) => {
      if (err || !decodedUser) {
        return res.status(401).json({ error: "Unauthorized Request" });
      }
      req.user = decodedUser; // ADDS A .user PROP TO REQ FOR TOKEN USER
  
      next();
    });
  };


app.use(express.static(__dirname + '/uploads'));// provides ability to serve local images

app.use('/images', routes.images);
app.use('/user', routes.user)
app.use('/auth', routes.auth)

app.use('/auth/verify', verifyToken, routes.auth);
app.use('/user', verifyToken, routes.user);

app.listen(process.env.PORT, () => {
    console.log(`I am listening on port ${process.env.PORT}`)
})
