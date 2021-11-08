module.exports = (Sequelize, DataTypes) => {
    const Employee = Sequelize.define('Employees',{
        tnlId:{
            type : DataTypes.STRING,
            primaryKey : true,
            required : true,
        },
        emailId : {
            type : DataTypes.STRING,
            unique : true,
            isEmail : true,
            required : true,
        },
        name:{
            type : DataTypes.STRING,
            required : true,
        },
        designation:{
            type : DataTypes.STRING,
            required : true,
        },
        department:{
            type : DataTypes.STRING,
            required : true,
        },
        reportingManagerEmail:{
            type : DataTypes.STRING,
            isEmail : true,
            required : true,
            
        },
        createdAt:{
            type : 'TIMESTAMP',
            defaultValue : Sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull : false,
        
        },
        createdBy:{
            type : DataTypes.STRING,
            required : true,

        }
    },{
        freezeTableName : true,
        underscored : true,
        updatedAt : false,
        timestamps : true,
        tableName : 'employees',

    })
    return Employee;
};