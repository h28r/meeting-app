module.exports = (Sequelize, DataTypes) => {
    const Employee = Sequelize.define('Employees',{
        tnlId:{
            type : DataTypes.STRING,
            primaryKey : true,
            
        },
        emailId : {
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
            
        },
        createdAt:{
            type: 'TIMESTAMP',
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: false,
        
        },
        createdBy:{
            type : DataTypes.STRING,

        }
    },{
        freezeTableName: true,
        underscored: true,
        updatedAt: false,
        timestamps:true,
        tableName: 'employees',

    })
    return Employee;
};