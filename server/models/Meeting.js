module.exports = (Sequelize, DataTypes) => {
    const Meeting = Sequelize.define('meetings',{
        meetingId:{
            type: DataTypes.INTEGER,
            primaryKey:true,
        },
        createdAt:{
            type :DataTypes.TIME,
        },
        createdBy:{
            type : DataTypes.STRING,
        },
        scheduledAt:{
            type : DataTypes.TIME,
        },
        scheduledBy:{
            type : DataTypes.STRING,
        },
        scheduledWith :{
            type : DataTypes.STRING,
        },
        link:{
            type : DataTypes.STRING,
        }
        },{
        freezeTableName:true,
        underscored: true,
        timestamps:true,
        updatedAt:false,
        tableName : 'meetings',
    })
    return Meeting;
};