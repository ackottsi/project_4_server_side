const Image=require('../models').Image;
const constants = require('../constants');

const getAll = (req, res) => {
    Image.findAll()
    .then(images => {
        res.status(constants.SUCCESS).json(images)
    })
    .catch(err => {
        res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
    })
}

const postImages=(req,res) =>{
    console.log(req.body)
    Image.create(req.body)
    .then(addImage=>{
        res.status(constants.SUCCESS.json(addImage))
    })
}

module.exports={
    getAll,
    postImages
}