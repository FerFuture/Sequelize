import { DataTypes } from "sequelize"; //IMPORTO EL OBJETO DATATYPES DE SEQUELIZE 
import { sequelize } from "../database/database.js";
import { Task } from "./Task.js";

// DEFINO EL MODELO DE LA TABLA
export const projects = sequelize.define('projects', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: false, // Desactiva el incremento automático
  },  
  name: {
    type: DataTypes.STRING // Tipo de datos de la columna 2
  },
  priority: {
    type: DataTypes.INTEGER // Tipo de datos de la columna 3
  },
  description: {
    type: DataTypes.STRING // Tipo de datos de la columna 4
  },
}, {
  timestamps: false // Desactiva los campos createdAt y updatedAt solo para este modelo
});

projects.hasMany(Task,{
  foreignKey: 'projectId',
  sourceKey: 'id'
})

Task.belongsTo(projects,{
   foreignKey: 'projectId',
   targetKey: 'id'
});