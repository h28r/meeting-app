module.exports = (Sequelize, DataTypes) => {
    const ActionItem= Sequelize.define('ActionItems',{
        actionItemId:{
            type : DataTypes.STRING,
            primaryKey: true,		
        },
        email_id:{
            type : DataTypes.STRING,	
        },
        action_item:{
            type : DataTypes.STRING,
        },
        created_at:{
            type : DataTypes.TIME,	
        },
        created_by:{
            type : DataTypes.STRING,
        },
        meeting_id:{
            type : DataTypes.STRING,
        },
        feedback_id:{
            type : DataTypes.STRING, 
        },
        status:{
            type : DataTypes.STRING,
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