module.exports=function(sequelize,DataTypes){

    var Dispenser=sequelize.define('Dispenser', {
        dispenser_number:DataTypes.INTEGER,
        first_name: DataTypes.STRING,
        last_name:DataTypes.STRING,
        
    });

    return Dispenser;
};