const app = require('./app');
const autores = require('./arrayautores');

app.get('/autores', (req, res) => {
  res.status(200).json(autores);
});

app.get('/autores/:idAutor', (req, res) => {
  const id = req.params.idAutor;
  if (isNaN(id)) {
    res.status(400).json({error: 'Solicitud no valida'});
  } else {
    let search = autores.find(student => student.id.toString() === id.toString());
    if (search) {
      res.status(200).json(search);
    } else {
      res.status(404).send('Id no encontrado');
    }
  }
});

app.delete('/autores/:idAutor', (req, res) => {
  const id = req.params.idAutor;
  if (isNaN(id)) {
    res.status(400).json({error: 'Solicitud no valida'});
  } else {
    let search = autores.find(student => student.id.toString() === id.toString());
    if (search) {
      const i = autores.indexOf(search);
      autores.splice(i, 1);
      res.send('Autor eliminado');
    } else {
      res.status(404).send('Id no encontrado');
    }
  }
});

app.put('/autores/:idAutor', (req, res) => {
  const id = req.params.idAutor;
  const {body} = req;
  if (isNaN(id)) {
    res.status(400).json({error: 'Solicitud no valida'});
  } else {
    let search = autores.find(student => student.id.toString() === id.toString());
    if (search) {
      const i = autores.indexOf(search);
      autores[i] = body;
      res.send('Autor Actualizado');
    } else {
      res.status(404).send('Id no encontrado');
    }
  }
});

app.post('/autores', (req, res) => {
  const {body} = req;
  autores.push(body);
  res.status(200).json('Autor agregado correctamente');
})