module.exports = (Sequelize, DataTypes) => {
    const ActionItems = Sequelize.define('ActionItems',{
        actionItemId:{
            type : DataTypes.STRING,
            field:'action_item_id',
            primaryKey: true		
        },
        email_id:{
            type : DataTypes.STRING,
            field:'email_id'	
        },
        action_item:{
            type : DataTypes.STRING,
            field:'action_item' 
        },
        created_at:{
            type : DataTypes.TIME,
            field:'created_at'	
        },
        created_by:{
            type : DataTypes.STRING,
            field:'created_by'
        },
        meeting_id:{
            type : DataTypes.STRING,
            field:'meeting_id' 
        },
        feedback_id:{
            type : DataTypes.STRING,
            field:'feedback_id' 
        },
        status:{
            type : DataTypes.STRING,
            field:'status'
        }
        },{
            tableName : 'actions_items',
            freezeTableName : true,
            timeStamps: true,
            updatedAt:false,
            underscored : true,
        })
    return ActionItems;
};