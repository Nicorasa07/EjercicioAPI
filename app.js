const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("servidor arriba en http://localhost:3000");
});

server.get("/autores/:id/libros", (req, res) => {});

server.post("/autores/:id/libros", (req, res) => {});

server.get("/autores/:id/libros/:idLibro", (req, res) => {});

server.put("/autores/:id/libros/:idLibro", (req, res) => {});

server.delete("/autores/:id/libros/:idLibro", (req, res) => {});
