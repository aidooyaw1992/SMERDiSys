module.exports=function(sequelize,DataTypes){

    var Drug = sequelize.define('Drug', {
        name:DataTypes.STRING,
        manufacturer: DataTypes.STRING,
        quantity: DataTypes.INTEGER,
        expiry_date: DataTypes.DATE,
        time_of_intake: DataTypes.STRING
    });

    return Drug;
};