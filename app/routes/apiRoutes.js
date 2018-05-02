module.exports=function(app,db){

//main dashboard
app.get('/', function(req, res){
    res.sendFile( __dirname +  "/index.html" );
});

//CRUD
//----------------PATIENTS------------------------//
//get all patient call
    app.get('/api/patients', function(req,res){
        db.Patient.findAll({include:[{all:true}]}).then(function(result){
            res.json(result);
        });
    });

//Get By Id
    app.get('/api/patient/:id', function(req,res){
        db.Patient.findById(id=req.params.id,{include:[{all:true}]}).then(function(result){
            res.json(result);
        });    
    });


//Post new Patient
    app.post('/api/patient/add', function(req,res){
        
        db.Patient.create({
            first_name:req.body.first_name,
            last_name:req.body.last_name,
            user_name:req.body.user_name,
            contact:req.body.contact,    
            complaint:req.body.complaint,
            prescription_time:req.body.prescription_time,
            care_taker_contact:req.body.care_taker_contact,  
                                   
        },
        // {include:[db.Image]}
        ).then(function(result){
            console.log(result);
            res.json(result);
        })
        .then(function(result,err){
            if(err){
                throw err;
            }
            console.log(result);
        });
    });

    //PUT
    app.put('/api/patient/update/:id', function(req,res){
        db.Patient.create({
            first_name:req.body.first_name,
            last_name:req.body.last_name,
            user_name:req.body.user_name,
            contact:req.body.contact,    
            complaint:req.body.complaint,
            prescription_time:req.body.prescription_time,
            care_taker_contact:req.body.care_taker_contact,  
            // Image:{
            //     image_name:req.body.Image.image_name,
            //     url:req.body.Image.url,                
            // }                           
        },
        // {include:[db.Image]},
        {
            where:{
                id:req.params.id,
            }
        })
        .then(function(result){
            res.json(result);
        })
    });
  
//DELETE
    app.delete('/api/patient/delete/:id', function(req,res){
        db.Patient.destroy({
            where:{
                id:req.params.id
            }
        })
        .then(function(result){
            res.json(result);
        });
    });

    //CRUD
//----------------DISPENSERS------------------------//
//get all dispensers call
app.get('/api/dispensers', function(req,res){
    db.Dispenser.findAll({include:[{all:true}]}).then(function(result){
        res.json(result);
    });
});

//Get By Id
app.get('/api/dispenser/:id', function(req,res){
    db.Dispenser.findById(id=req.params.id,{include:[{all:true}]}).then(function(result){
        res.json(result);
    });    
});


//Post new Dispenser
app.post('/api/dispenser/add', function(req,res){
    
    db.Dispenser.create({
        device_name:req.body.device_name,
        dispenser_number:req.body.dispenser_number,                       
    },
    // {include:[db.Image]}
    ).then(function(result){
        console.log(result);
        res.json(result);
    })
    .then(function(result,err){
        if(err){
            throw err;
        }
        console.log(result);
    });
});

//PUT
app.put('/api/dispenser/update/:id', function(req,res){
    db.Dispenser.create({
        device_name:req.body.device_name,
        dispenser_number:req.body.dispenser_number,
    },
    // {include:[db.Image]},
    {
        where:{
            id:req.params.id,
        }
    })
    .then(function(result){
        res.json(result);
    })
});

//DELETE
app.delete('/api/dispenser/delete/:id', function(req,res){
    db.Dispenser.destroy({
        where:{
            id:req.params.id
        }
    })
    .then(function(result){
        res.json(result);
    });
});

//CRUD
//----------------PHARMACIST------------------------//
//get all pharmacist call
app.get('/api/pharmacists', function(req,res){
    db.Pharmacist.findAll({include:[{all:true}]}).then(function(result){
        res.json(result);
    });
});

//Get By Id
app.get('/api/pharmacist/:id', function(req,res){
    db.Pharmacist.findById(id=req.params.id,{include:[{all:true}]}).then(function(result){
        res.json(result);
    });    
});


//Post new pharmacist
app.post('/api/pharmacist/add', function(req,res){
    
    db.Pharmacist.create({
        user_name:req.body.user_name,
        first_name:req.body.first_name,
        last_name:req.body.last_name,
        pin:req.body.pin
                       
    },
    // {include:[db.Image]}
    ).then(function(result){
        console.log(result);
        res.json(result);
    })
    .then(function(result,err){
        if(err){
            throw err;
        }
        console.log(result);
    });
});

//PUT
app.put('/api/pharmacist/update/:id', function(req,res){
    db.Pharmacist.create({
        user_name:req.body.user_name,
        first_name:req.body.first_name,
        last_name:req.body.last_name,
        pin:req.body.pin
                              
    },
    // {include:[db.Image]},
    {
        where:{
            id:req.params.id,
        }
    })
    .then(function(result){
        res.json(result);
    })
});

//DELETE
app.delete('/api/pharmacist/delete/:id', function(req,res){
    db.Pharmacist.destroy({
        where:{
            id:req.params.id
        }
    })
    .then(function(result){
        res.json(result);
    });
});

//CRUD
//----------------DRUG------------------------//
//get all drugs call
app.get('/api/drugs', function(req,res){
    db.Drug.findAll({include:[{all:true}]}).then(function(result){
        res.json(result);
    });
});

//Get By Id
app.get('/api/drug/:id', function(req,res){
    db.Drug.findById(id=req.params.id,{include:[{all:true}]}).then(function(result){
        res.json(result);
    });    
});


//Post new drug
app.post('/api/drug/add', function(req,res){
    
    db.Drug.create({
        name:req.body.name,
        manufacturer:req.body.manufacturer,
        quantity: req.body.quantity,
        expiry_date:req.body.expiry_date
                       
    },
    // {include:[db.Image]}
    ).then(function(result){
        console.log(result);
        res.json(result);
    })
    .then(function(result,err){
        if(err){
            throw err;
        }
        console.log(result);
    });
});

//PUT
app.put('/api/drug/update/:id', function(req,res){
    db.Drug.create({
        name:req.body.name,
        manufacturer:req.body.manufacturer,
        quantity: req.body.quantity,
        expiry_date:req.body.expiry_date
                              
    },
    // {include:[db.Image]},
    {
        where:{
            id:req.params.id,
        }
    })
    .then(function(result){
        res.json(result);
    })
});

//DELETE
app.delete('/api/drug/delete/:id', function(req,res){
    db.Drug.destroy({
        where:{
            id:req.params.id
        }
    })
    .then(function(result){
        res.json(result);
    });
});



//Post (complete adding including adding the url in the images table)
    // app.post('/api/new', function(req,res){
       
    //     db.Item.create({
    //         name:req.body.name,
    //         description:req.body.description,
    //         category:req.body.category,    
    //         Image:{
    //             image_name:req.body.Image.image_name,
    //             url:req.body.Image.url,
                
    //         }                           
    //     },{include:[db.Image]}
    //      ).then(function(result){
    //         console.log(result);
    //         res.json(result);
    //     })
    //     .then(function(result,err){
    //         if(err){
    //             throw err;
    //         }
    //         console.log(result);
    //     });
    // });

}