import express from "express";
import { listarPosts, listarUsers } from "../controller/postsController.js";
const routes = (app) => {
  // Habilita o middleware para analisar requisições JSON
  app.use(express.json());

  // Define a rota `/posts`
  app.get("/posts", listarPosts);
  app.get("/usuarios", listarUsers);
};

export default routes;
