import { DataTypes } from "sequelize"; //IMPORTO EL OBJETO DATATYPES DE SEQUELIZE 
import { sequelize } from "../database/database.js"; //IMPORTO LA CONFIGURACION DE LA BASE DE DATOS A LA QUE ME ESTOY CONECTANDO

// DEFINO EL MODELO DE LA TABLA
export const Task = sequelize.define('tareas', {
  id: {
    type: DataTypes.INTEGER, // Tipo de datos de la columna 1
    primaryKey: true, // ES UNA PRIMARY KEY
    autoIncrement: true // AUTOINCREMENTO
  },
  name: {
    type: DataTypes.STRING // Tipo de datos de la columna 2
  },
  done: {
    type: DataTypes.INTEGER // Tipo de datos de la columna 3
  },
  projectId: {
    type: DataTypes.INTEGER // Tipo de datos de la columna 4
  },
}, {
  timestamps: false // Desactiva los campos createdAt y updatedAt solo para este modelo
});
