import  Sequelize  from "sequelize"; //IMPORTO SEQUELIZE PARA USARLO

export const sequelize = new Sequelize( //CREO Y CONFIGURO LA CONEXION A MI BASE DE DATOS POSTGRESQL
  'postgres',
  'postgres',
  'Koloko1013',
  {
    host: 'localhost',
    dialect: 'postgres',
  }
);

// EN ESTE ARCHIVO SOLO IMPORTÉ SEQUELIZE Y CREÉ UNA INSTANCIA LUEGO LA EXPORTÉ PARA USARLO