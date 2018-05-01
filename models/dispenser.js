module.exports=function(sequelize,DataTypes){

    var Dispenser=sequelize.define('Dispenser', {
        dispenser_number:DataTypes.INTEGER,
        device_name:DataTypes.STRING,
        
    });

    return Dispenser;
};