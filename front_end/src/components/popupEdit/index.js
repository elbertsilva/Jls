import React from "react";
import { Container, Content, Input, ButtonEdit } from "./styles";
import server from "../../server/server";

const initialState = {
  id: undefined,
  nome: "",
  cidade: "",
  posicao: "",
  date_nasc: null,
};

function PopupEdit({ closePopup, data }) {
  const [post, setPost] = React.useState(data);
  const [popup, setPopup] = React.useState(false);

  async function handleEdit() {
    console.log("aaa");
    if (post.id) {
      await server.put(`/edit/${post.id}`, {
        nome: post.nome,
        cidade: post.cidade,
        posicao: post.posicao,
        date_nasc: post.date_nasc,
      });
    }
    setPost(initialState);
    setPopup(true);
    closePopup();
  }

  React.useEffect(() => {
    setPost(data);
  }, [data]);

  return (
    <Container
      onClick={({ target, currentTarget }) => {
        if (target === currentTarget) {
          closePopup();
        }
      }}
    >
      <Content>
        <Input
          type="text"
          value={post.nome}
          onChange={(e) => setPost({ ...post, nome: e.target.value })}
          placeholder="Nome do jogador"
        ></Input>
        <Input
          type="text"
          value={post.cidade}
          onChange={(e) => setPost({ ...post, cidade: e.target.value })}
          placeholder="Cidade"
        ></Input>
        <Input
          type="date"
          value={post.date_nasc}
          onChange={(e) => setPost({ ...post, date_nasc: e.target.value })}
          placeholder="Data de nascimento"
        ></Input>
        <Input
          type="text"
          value={post.posicao}
          onChange={(e) => setPost({ ...post, posicao: e.target.value })}
          placeholder="Posição"
        ></Input>

        <ButtonEdit
          onClick={() => handleEdit()}
          closePopup={() => setPopup(false)}
        >
          Editar
        </ButtonEdit>
      </Content>
    </Container>
  );
}

export default PopupEdit;
