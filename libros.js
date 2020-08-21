const express = require("express");
const app1 = require("./app");
const app = express();

const libros = [];
const autores = [];

app.listen(3000, () => {
  console.log("servidor arriba en http://localhost:3000");
});

server.get("/autores/:id/libros", (req, res) => {
  const id = req.params.id;

  if (isNaN(id)) {
    res.status(404).json({ error: "Autor no válido" });
  } else {
    const autor = autores.find((autor) => autor.id == id);
    res.status(200).json(autor.libros);
  }
});

server.post("/autores/:id/libros", (req, res) => {
  const { body } = req;
  const id = req.params.id;

  if (isNaN(id)) {
    res.status(404).json({ error: "Autor no válido" });
  } else {
    const autor = autores.find((autor) => autor.id == id);
    const libros = autor.libros;
    libros.push(body);

    res.status(201).json("Agregado");
  }
});

server.get("/autores/:id/libros/:idLibro", (req, res) => {
  const id = req.params.id;
  const idLibro = req.params.idLibro;

  if (isNaN(id)) {
    res.status(404).json({ error: "Autor no válido" });
  } else if (isNaN(idLibro)) {
    res.status(404).json({ error: "Autor no válido" });
  } else {
    const autor = autores.find((autor) => autor.id == id);

    const libros = autor.libros;
    const libro = libros.find((libro) => libro.id == idLibro);

    res.status(200).json(autor.libro);
  }
});

server.put("/autores/:id/libros/:idLibro", (req, res) => {
  const id = req.params.id;
  const idLibro = req.params.idLibro;

  if (isNaN(id) || isNaN(idLibro)) {
    res.status(400).json({ error: "Solicitud no válida" });
  } else {
    const autor = autores.find((autor) => autor.id == id);
    const libros = autor.libros;
    const libro = libros.find((libro) => libro.id == idLibro);

    if (libro) {
      const i = libros.indexOf(libro);
      libros[i] = libro;
      res.send("Autor Actualizado");
    } else {
      res.status(404).send("Id no encontrado");
    }
  }
});

server.delete("/autores/:id/libros/:idLibro", (req, res) => {
  const id = req.params.id;
  const idLibro = req.params.idLibro;

  const autor = autores.find((autor) => autor.id == id);
  const libros = autor.libros;
  const libro = libros.find((libro) => libro.id == idLibro);

  const index = libros.indexOf(libro);
  if (index > -1) {
    libros.splice(index, 1);
  }
  res.status(204).json("Borrado");
});
