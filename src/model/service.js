const { Model, DataTypes } = require('sequelize');
class Service extends Model {
    static initModel(sequelize) {
        Service.init({
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            userId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'Users',
                    key: 'id',
                },
            },
        }, {
            sequelize,
            modelName: 'service',
        });
    }
}
module.exports = Service;
