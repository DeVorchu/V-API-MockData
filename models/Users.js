module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define("Users", {
        nickname:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        steamid:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        login:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        mail:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        password:{
            type: DataTypes.STRING,
            allowNull: false,
        }

    })

    return Users
}