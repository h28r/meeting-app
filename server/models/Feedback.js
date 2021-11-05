module.exports = (Sequelize, DataTypes) => {
    const Feedback = Sequelize.define('feedbacks',{
        feedbackId:{
            type : DataTypes.STRING,
            primaryKey:true,
        },
        emailId:{
            type : DataTypes.STRING,
        },
        feeback:{
            type : DataTypes.STRING,
        },
        createdAt:{
            type : DataTypes.TIME,
        },
        createdBy:{
            type : DataTypes.STRING,
        },
        meetingId:{
            type: DataTypes.STRING,
        }
    },
    {
        freezeTableName:true,
        underscored: true,
        timestamps:true,
        updatedAt:false,
        tableName :'feedbacks',
    })
    
    return Feedback;
    };