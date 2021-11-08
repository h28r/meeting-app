module.exports = (Sequelize, DataTypes) => {
    const ActionItem= Sequelize.define('ActionItems',{
        actionItemId:{
            type : DataTypes.STRING,
            primaryKey: true,
            required:true,	
        },
        email_id:{
            type : DataTypes.STRING,
            required :true,	
            isEmail : true,
        },
        action_item:{
            type : DataTypes.STRING,
            required : true,
        },
        created_at:{
            type : DataTypes.TIME,

        },
        created_by:{
            type : DataTypes.STRING,
        },
        meeting_id:{
            type : DataTypes.STRING,
            required :true,
        },
        feedback_id:{
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