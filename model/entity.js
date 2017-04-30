module.exports = function(orm, instance) {
    return instance.define('ENTITY', {
        ID: {
            type: orm.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        NAME: orm.STRING(45)           
    }, {
        tableName: 'ENTITY',
        createdAt: false,
        updatedAt: false
    });
};