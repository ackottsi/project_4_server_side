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


const getImageById=(req,res)=>{
    Image.findByPk(req.params.id)
    .then(foundImage=>{
        if(foundImage === null){
            res.status(constants.BAD_REQUEST).send('ERROR: Incorrect Image Id')
        }else{
            res.status(constants.SUCCESS).json(foundImage)
        }
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

const removeImage = (req,res)=>{
    console.log(req.params)
    Image.destroy({where: {id:req.params.id} })
    .then(()=>{
        res.status(constants.SUCCESS).send("success")
        
    })
}

module.exports={
    getAll,
    postImages,
    removeImage,
    getImageById
}