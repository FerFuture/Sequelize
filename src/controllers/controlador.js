import {projects} from '../models/projects.js'
import {Task} from '../models/Task.js'

export const obteners = (req, res) => {
  projects.findAll()
  .then((proyectos) => {
    res.status(200).json(proyectos); // Responde con la lista de proyectos
  })
  .catch((error) => {
    console.error('Error al obtener proyectos:', error);
    res.status(500).json({ error: 'No se pudieron obtener los proyectos' });
  });
}

export const crear = async (req, res) => {
  try {
    let projectId = req.body.id; // Obtén el ID del JSON de la solicitud

    if (projectId === undefined) {
      // Si el ID no se proporciona en el JSON, encuentra el próximo ID disponible
      projectId = await findNextAvailableId(projects);
    }

    // Luego puedes continuar con la creación del registro usando projectId
    const newProject = await projects.create({
      id: projectId,
      name: req.body.name,
      priority: req.body.priority,
      description: req.body.description,
    });

    res.status(201).json(newProject);
  } catch (error) {
    console.error('Error al crear el proyecto:', error);
    res.status(500).json({ error: 'No se pudo crear el proyecto' });
  }
};
const findNextAvailableId = async (model) => {
  // Encuentra el último ID utilizado en la base de datos
  const lastProject = await model.findOne({
    order: [['id', 'DESC']],
  });

  if (!lastProject) {
    return 1; // Si no hay registros, comienza desde 1
  }

  return lastProject.id + 1; // El próximo ID disponible
};


export const eliminar = (req, res) => {
  const projectId = req.params.id;

  projects.destroy({
  where: {
    id: projectId,
         },
    })
  .then((rowCount) => {
    if (rowCount > 0) {
      console.log(`Se eliminaron ${rowCount} registros.`);
      res.status(204).send(); // Envía una respuesta sin contenido (código 204) si la eliminación fue exitosa.
    } else {
      console.log('No se encontraron registros para eliminar.');
      res.status(404).send(); // Envía una respuesta con código 404 si no se encontró el registro.
    }
  })
  .catch((error) => {
    console.error('Error al eliminar el proyecto:', error);
    res.status(500).json({ error: 'No se pudo eliminar el proyecto' }); // Maneja errores y envía una respuesta de error.
  });
}


export const actualizarProyecto = async (req, res) => {
  try {
    const projectId = req.params.id; // ID del proyecto a actualizar
    const { name, priority, description } = req.body; // Nuevos datos del proyecto

    // Verifica si el proyecto existe
    const proyectoExistente = await projects.findOne({ where: { id: projectId } });

    if (!proyectoExistente) {
      return res.status(404).json({ error: 'Proyecto no encontrado' });
    }

    // Realiza la consulta de actualización
    await projects.update(
      { name, priority, description },
      { where: { id: projectId } }
    );

    res.status(200).json({ message: 'Proyecto actualizado exitosamente' });
  } catch (error) {
    console.error('Error al actualizar el proyecto:', error);
    res.status(500).json({ error: 'No se pudo actualizar el proyecto' });
  }
};


export const obtenerId = async (req, res) => {
  try {
    const projectId = req.params.id; // ID del proyecto que deseas obtener

    // Realiza la consulta para buscar el proyecto por su ID
    const proyecto = await projects.findByPk(projectId);

    if (proyecto) {
      // Si se encuentra el proyecto, lo envías como respuesta
      res.status(200).json(proyecto);
    } else {
      // Si no se encuentra, respondes con un código de estado 404
      res.status(404).json({ error: 'Proyecto no encontrado' });
    }
  } catch (error) {
    console.error('Error al obtener el proyecto por ID:', error);
    res.status(500).json({ error: 'No se pudo obtener el proyecto' });
  }
}


export const obtenerIdtask = async (req, res) => {
  const { id } = req.params;
  const task = await Task.findAll({
    where: { projectId: id }
  }) 
  res.json(task);
}