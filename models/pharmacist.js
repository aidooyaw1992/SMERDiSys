module.exports=function(sequelize,DataTypes){

    var Pharmacist = sequelize.define('Pharmacist',{
        user_name:DataTypes.STRING,
        first_name: DataTypes.STRING,
        last_name:DataTypes.STRING,
        pin:DataTypes.INTEGER,
    });

    return Pharmacist;
};