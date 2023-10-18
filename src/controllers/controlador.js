import {projects} from './models/projects.js'

export const obteners = (req, res) => {
  res.send("obtenido")
}

export const crear = (req, res) => {
  const {name, priority, description} = req.body 
  pro

  res.send("creado")
}