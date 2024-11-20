// Importa a função para conectar ao banco de dados
import conectarAoBanco from "../config/dbConfig.js";

// Conecta ao banco de dados usando a string de conexão do ambiente
const conexao = await conectarAoBanco(process.env.STRING_CONNECTION);

// Função assíncrona para obter todos os posts do banco de dados
export async function getTodosOsPosts() {
  // Seleciona o banco de dados "imersao-insta-like"
  const db = conexao.db("imersao-insta-like");

  // Seleciona a coleção "posts" dentro do banco de dados
  const colecao = db.collection("posts");

  // Busca todos os documentos da coleção e retorna um array
  return colecao.find().toArray();
}

export async function getTodosOsUsers() {
  const db = conexao.db("imersao-insta-like");
  const users = db.collection("users");

  return users.find().toArray();
}
