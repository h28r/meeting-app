module.exports = (Sequelize, DataTypes) => {
    const ActionItem= Sequelize.define('ActionItems',{
        actionItemId:{
            type : DataTypes.STRING,
            primaryKey: true,
            required:true,	
        },
        emailId:{
            type : DataTypes.STRING,
            required :true,	
            isEmail : true,
        },
        actionItem:{
            type : DataTypes.STRING,
            required : true,
        },
        createdAt:{
            type : DataTypes.TIME,

        },
        createdBy:{
            type : DataTypes.STRING,
        },
        meetingId:{
            type : DataTypes.STRING,
            required :true,
        },
        feedbackId:{
            type : DataTypes.STRING,
            required: true,
        },
        status:{
            type : DataTypes.STRING,
            required : true,
        }
        },{
            freezeTableName : true,
            timeStamps: true,
            updatedAt:false,
            underscored : true,
            tableName : 'actions_items',
        })
    return ActionItem;
};