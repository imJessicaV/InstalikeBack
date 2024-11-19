import express from "express";

const posts = [
  {
    id: 1,
    descricao: "Primeiro post",
    imagem: "https://placecats.com/millie/300/150",
  },
  {
    id: 2,
    descricao: "Gato curioso olhando para a câmera",
    imagem: "https://placekitten.com/400/200",
  },
  {
    id: 3,
    descricao:
      "Gato majestoso empoleirado em um parapeito, olhando para a cidade",
    imagem: "https://picsum.photos/seed/picsum/600/400",
  },
  {
    id: 4,
    descricao: "Gato brincalhão perseguindo um novelo de lã pelo chão",
    imagem: "https://random.dog/woof.jpg",
  },
  {
    id: 5,
    descricao:
      "Gato fofo enrolado em uma cesta aconchegante, tirando um cochilo",
    imagem: "https://loremflickr.com/640/480/food",
  },
  {
    id: 6,
    descricao: "Gato travesso espiando por trás de uma cortina",
    imagem: "https://source.unsplash.com/random",
  },
];

const app = express();
app.use(express.json());

app.listen(3000, () => {
  console.log("Servidor ON...");
});

app.get("/api", (req, res) => {
  res
    .status(200)
    .send("Boas vindas a Imersão Back End com Alura e Google Gemini");
});

app.get("/posts", (req, res) => {
  res.status(200).json(posts);
});

function buscaPostID(id) {
  return posts.findIndex((post) => {
    return post.id === Number(id);
  });
}
app.get("/posts/:id", (req, res) => {
  const index = buscaPostID(req.params.id);
  res.status(200).json(posts[index]);
});
