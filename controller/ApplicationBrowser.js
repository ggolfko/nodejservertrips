const models = require('../model/Providers');
const jwt = require('jwt-simple');
const config = require('../config');

exports.getactivities = function (req,res,next) {
    models.Activities.findAll({
        attributes:[['id','value'],['name','label']]
    }).then(activities=>{
        res.send(activities);
})
};

exports.getlanguages = function (req,res,next) {
    models.Languages.findAll({
        attributes:[['id','value'],['languages','label']]
    }).then(languages=>{
        res.send(languages);
})
};
exports.gettrip = function (req,res,next) {
    models.Trip.findAll({
        include: [{
            model: models.Guide,
            attributes: ['name', 'email', 'gender']

        },{
            model:models.Schedule
        }]
    }).then(response=>{
        res.send(response)
})
};
exports.getPlacebyactivities = function (req,res,next) {
    models.Activities.findAll({
        include:[{
            model:models.Places,
            attributes:[['id','value'],['name_place','label']]

        }]
    }).then(response=>{
        res.send(response);
    })

};


