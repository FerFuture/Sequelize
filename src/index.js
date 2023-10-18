import app from './app.js';
import {sequelize} from './database/database.js';
import './models/Task.js'
import './models/projects.js'

async function main(){
  try {
    await sequelize.sync({ force: false });
    app.listen(3000);
    console.log("on");
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

main();