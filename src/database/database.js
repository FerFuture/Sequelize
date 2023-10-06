import  Sequelize  from "sequelize";

export const sequelize = new Sequelize(
  'postgres',
  'postgres',
  'Koloko1013',
  {
    host: 'localhost',
    dialect: 'postgres',
  }
);