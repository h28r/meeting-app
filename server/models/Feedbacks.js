module.exports = (Sequelize, DataTypes) => {
    const Feedbacks = Sequelize.define('feedbacks',{
        feedbackId:{
            type : DataTypes.STRING,
            primaryKey:true,
            field : 'feedback_id',
        },
        emailId:{
            type : DataTypes.STRING,
            field : 'email_id'
        },
        feeback:{
            type : DataTypes.STRING,
        },
        createdAt:{
            type : DataTypes.TIME,
            field: 'created_at',

        },
        createdBy:{
            type : DataTypes.STRING,
            field : 'created_by'
        },
        meetingId:{
            type: DataTypes.STRING,
            field : 'meeting_id'
        }
    },
    {
        freezeTableName:true,
        underscored: true,
        timestamps:true,
        updatedAt:false,
        tableName :'feedbacks',
    })
    
    return Feedbacks;
    };