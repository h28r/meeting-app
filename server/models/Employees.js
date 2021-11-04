module.exports = (Sequelize, DataTypes) => {
    const Employees = Sequelize.define('Employees',{
        tnlId:{
            type : DataTypes.STRING,
            primaryKey : true,
            field:'tnl_id'
        },
        email_id : {
            type :DataTypes.STRING,
            unique: true,
        },
        name:{
            type : DataTypes.STRING,
        },
        designation:{
            type : DataTypes.STRING
        },
        department:{
            type : DataTypes.STRING
        },
        reportingManagerEmail:{
            type : DataTypes.STRING,
            field: 'reporting_manager_email'
        },
        createdAt:{
            type: 'TIMESTAMP',
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: false,
            field: 'created_at',
        },
        createdBy:{
            type : DataTypes.STRING,
            field : 'created_by',
        }
    },{
        freezeTableName: true,
        underscored: true,
        updatedAt: false,
        timestamps:true,
        tableName: 'employees',

    })
    return Employees;
};