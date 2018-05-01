var express=require('express');
var app=express();
var bodyParser=require('body-parser');
var db=require('./models');
var apiRoutes=require('./app/routes/apiRoutes.js');
// var PORT=process.env.PORT||3000;
var PORT=process.env.PORT||80;
var path=require('path');
var morgan=require('morgan');

//Sets up the express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:"application/vnd.api+json"}));

//display  http requests in console
app.use(morgan('dev'));

//api routes
apiRoutes(app,db);

db.sequelize.sync({
    force:true
}).then(function(){
    app.listen(PORT, function(){
        console.log(`Listening on port ${PORT}`);
    });
});

// SEEDING THE DB WITH DATA
// db.sequelize.models.Patient.build({
//     user_name:'nice one',
//     first_name:'Junior',
//     last_name:'Aidoo',
//     complaint:'sick of Malaria',
//     care_taker_contact:'0244123456',
//     contact:'0501123456',
//     PharmacistId: 1,
//     DispenserId: 1,
//     DrugId: 1 
//  },
//  {include:[
//     db.sequelize.models.Pharmacist,
//     db.sequelize.models.Dispenser,
//     db.sequelize.models.Drug,
//     ]}

// ).save();

 // SEEDING THE DB WITH DATA
// db.sequelize.models.Patient.build({
//     user_name:'rainchichi',
//     first_name:'Kwamena',
//     last_name:'Aidoo',
//     complaint:'Flu',
//     care_taker_contact:'0244123456',
//     contact:'0501123456',
//     PharmacistId: 1,
//     DispenserId: 1,
//     Drug: {name:'Pro Cold', manufacturer: 'CONCEPT PHARMA', quantity: 2, time_of_intake: '6:00' }
//  },
//  {include:[
//     db.sequelize.models.Pharmacist,
//     db.sequelize.models.Dispenser,
//     db.sequelize.models.Drug,
//     ]}

// ).save();


// // SEEDING THE DB WITH DATA
// db.sequelize.models.Dispenser.build({
//     dispenser_number: 22,
//     user_name: 'hopins',
//     first_name:'Michael',
//     last_name:'Newman',
//     PharmacistId: 1,
//  },
//  {include:[
//     db.sequelize.models.Pharmacist,
//     // db.sequelize.models.Drug,
//     ]}

// ).save();

// // // SEEDING THE DB WITH DATA
// db.sequelize.models.Pharmacist.build({
//     first_name:'John',
//     last_name:'Moraels',
//  },


// ).save();




