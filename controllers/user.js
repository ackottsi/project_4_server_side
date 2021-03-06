const User = require('../models').User;
const Image = require('../models').Image;

const constants = require('../constants')

const getUserProfile = (req,res)=>{
    User.findByPk(req.params.id,{
        include:[
            {model:Image}
        ]
    })
    .then(userProfile => {
        res.status(constants.SUCCESS).json(userProfile)
    })
    .catch(err => {
        res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
    })
}



const getUserImages=(req,res)=>{
    User.findByPk(req.params.id,{
        include:[
            {model:Image}
        ],
    })
            .then(user=>{
                Image.findAll()
                .then(allImages => {
                    res.status(constants.SUCCESS).json(allImages)
                })
                .catch(err => {
                    res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
        })
    })
}




module.exports = {
    getUserProfile,
    getUserImages
}