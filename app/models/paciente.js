module.exports = (sequelize, DataTypes) => {
  
    const table_name = 'registros';
    const model_name = 'Paciente';
  
    const Paciente = sequelize.define(table_name, {
      name: {
        type: DataTypes.STRING,
      },
      contato:{
        type: DataTypes.STRING,
      },
      telegran_id: {
        type: DataTypes.STRING,
      },
      whatsapp_id: {
        type: DataTypes.STRING,
      },
      cpf:{
        type: DataTypes.STRING,
      }
    });
  
    Paciente.associate = function(models) {
      Paciente.belongsTo(models.Esf, { as: 'esf' });
      Paciente.hasMany(models.Agendamento, { as: 'agendamentos' });
      Paciente.hasMany(models.Avaliacao, { as: 'avaliacoes' });
    };
  
    Paciente.model_name = function () {
      return model_name
    };
    
    return Paciente;
  }
  