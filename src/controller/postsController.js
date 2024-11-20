import { getTodosOsPosts, getTodosOsUsers } from "../models/postsModel.js";

export async function listarPosts(req, res) {
  // Obtém todos os posts usando a função `getTodosOsPosts()`
  const resultado = await getTodosOsPosts();

  // Envia os posts em formato JSON com status 200 (OK)
  res.status(200).json(resultado);
}

export async function listarUsers(req, res) {
  const resultado = await getTodosOsUsers();
  res.status(200).json(resultado);
}
