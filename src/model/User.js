const { Model, DataTypes } = require('sequelize');

class User extends Model {
    static initModel(sequelize) {
        User.init({
            username: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
            },
        }, {
            sequelize,
            modelName: 'user',
        });
    }
}

module.exports = User;