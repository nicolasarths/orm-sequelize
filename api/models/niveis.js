<<<<<<< HEAD
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Niveis extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Niveis.hasMany(models.Turmas, { foreignKey: 'nivel_id'})
    }
  }
  Niveis.init({
    descr_nivel: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Niveis',
  });
  return Niveis;
};
=======
'use strict'
module.exports = (sequelize, DataTypes) => {
  const Niveis = sequelize.define('Niveis', {
    descr_nivel: DataTypes.STRING
  }, {})
  Niveis.associate = function(models) {
    Niveis.hasMany(models.Turmas, {
      foreignKey: 'nivel_id'
    })
  }
  return Niveis
}
>>>>>>> f3eb26c646025b71e2998d7260c317743a193680
