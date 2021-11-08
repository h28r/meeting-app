module.exports = (Sequelize, DataTypes) => {
    const Feedback = Sequelize.define('feedbacks',{
        feedbackId:{
            type : DataTypes.STRING,
            primaryKey : true,
            retuired : true,
        },
        emailId:{
            type : DataTypes.STRING,
            isEmail : true,
            required : true,
        },
        feeback:{
            type : DataTypes.STRING,
            required : true,
        },
        createdAt:{
            type : DataTypes.TIME,
        },
        createdBy:{
            type : DataTypes.STRING,
            required : true,
        },
        meetingId:{
            type : DataTypes.STRING,
            required :  true,
        }
    },
    {
        freezeTableName : true,
        underscored : true,
        timestamps : true,
        updatedAt : false,
        tableName :'feedbacks',
    })
    
    return Feedback;
    };