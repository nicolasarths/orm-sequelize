<<<<<<< HEAD
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Matriculas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Matriculas.belongsTo(models.Pessoas, { foreignKey: 'estudante_id' });
      Matriculas.belongsTo(models.Turmas, { foreignKey: 'turma_id' })
    }
  }
  Matriculas.init({
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Matriculas',
  });
  return Matriculas;
};
=======
'use strict'
module.exports = (sequelize, DataTypes) => {
  const Matriculas = sequelize.define('Matriculas', {
    status: DataTypes.STRING
  }, {})
  Matriculas.associate = function(models) {
    Matriculas.belongsTo(models.Pessoas, {
      foreignKey: 'estudante_id'
    })
    Matriculas.belongsTo(models.Turmas, {
      foreignKey: 'turma_id'
    })

  }
  return Matriculas
}
>>>>>>> f3eb26c646025b71e2998d7260c317743a193680
