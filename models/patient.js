module.exports=function(sequelize,DataTypes){

    var Patient=sequelize.define('Patient',{
        first_name: DataTypes.STRING,
        last_name:DataTypes.STRING,
        user_name:DataTypes.STRING,
        contact:DataTypes.INTEGER,
        complaint:DataTypes.TEXT,
        care_taker_contact: DataTypes.INTEGER,
        prescription_time:DataTypes.TEXT,
    });

    return Patient;
};