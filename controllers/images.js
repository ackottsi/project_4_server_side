const Image=require('../models').Image;
const User=require('../models').User;
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


const editImageInfo = (req,res)=>{
    Image.update(req.body,{
        where: {
            id:req.params.id
        },
        returning:true
    })
    .then(updateImage=>{
        if(updateImage[0]===0){
            res.status(constants.BAD_REQUEST).send('ERROR: did not find image')
        }else{
            Image.findByPk(req.params.id)
            .then(foundImage=>{
                if(foundImage === null){
                    res.status(constants.BAD_REQUEST).send('ERROR: Incorrect image Id')
                }else{
                    res.status(constants.SUCCESS).json(foundImage)
                }
            })
            .catch(err => {
                res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
            })
        }
    })
    .catch(err => {
        res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
    })
}




const postImages=(req,res) =>{
    Image.create(req.body)
    .then(addImage=>{
        res.status(constants.SUCCESS).json(addImage)
        
    })

    .catch(err => {
        res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
    })
}




const removeImage = (req,res)=>{
    Image.destroy({where: {id:req.params.id} })
    .then(()=>{
        res.status(constants.SUCCESS).send("success")
        
    })
}

module.exports={
    getAll,
    postImages,
    removeImage,
    getImageById,
    editImageInfo,

}