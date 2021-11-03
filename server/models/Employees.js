module.exports = (Sequelize, DataTypes) => {
    const Employees = Sequelize.define('Employees',{
        email_id : {
            type :DataTypes.STRING,
        },
        name:{
            type : DataTypes.STRING,
        },
        designation:{
            type : DataTypes.STRING
        },
        tnl_id:{
            type : DataTypes.STRING,
            primaryKey : true
        },
        department:{
            type : DataTypes.STRING
        },
        reporting_manager_email:{
            type : DataTypes.STRING
        },
        created_at:{
            type: 'TIMESTAMP',
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        created_by:{
            type : DataTypes.STRING
        }
    },{
        timestamps:false,
        modelName: 'Employees',
        tableName: 'employees',

    })
    return Employees;
};