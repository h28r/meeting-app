module.exports = (Sequelize, DataTypes) => {
    const Meetings = Sequelize.define('meetings',{
        meetingId:{
            type: DataTypes.INTEGER,
            primaryKey:true,
            field: 'meeting_id',
        },
        createdAt:{
            type :DataTypes.TIME,
            field : 'created_at',
        },
        createdBy:{
            type : DataTypes.STRING,
            field: 'created_by',
        },
        scheduledAt:{
            type : DataTypes.TIME,
            field : 'scheduled_at',
        },
        scheduledBy:{
            type : DataTypes.STRING,
            field : 'scheduled_by',
        },
        scheduledWith :{
            type : DataTypes.STRING,
            field : 'scheduled_with',
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
    return Meetings;
};