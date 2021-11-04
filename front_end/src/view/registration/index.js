import React from "react";
import server from "../../server/server";
import { useHistory } from "react-router-dom";
import {
  Container,
  Content,
  Button,
  Title,
  ButtonReturn,
  Input,
} from "./styles";
import Popup from "../../components/popup";

const initialState = {
  id: undefined,
  nome: "",
  cidade: "",
  posicao: "",
  date_nasc: null,
};

function Registration() {
  const [post, setPost] = React.useState(initialState);
  const [popup, setPopup] = React.useState(false);
  const history = useHistory();
  async function getTeste() {
    const data = await server.get("/teste");
    console.log(data.data);
  }

  React.useEffect(() => {
    getTeste();
  }, []);

  async function handleClick() {
    await server.post("/cadastro", post);
    console.log(post);
    getTeste();
    setPost(initialState);
    setPopup(true);
  }

  return (
    <>
      <ButtonReturn
        onClick={() => {
          history.push("/home");
        }}
      >
        Retorno
      </ButtonReturn>
      <Container>
        <div>
          <Content>
            <Title>Cadastre o jogador</Title>

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
              type="text"
              value={post.posicao}
              onChange={(e) => setPost({ ...post, posicao: e.target.value })}
              placeholder="Posição"
            ></Input>

            <Input
              type="date"
              value={post.date_nasc}
              onChange={(e) => setPost({ ...post, date_nasc: e.target.value })}
              placeholder="Data de nascimento"
            ></Input>
            <Button onClick={handleClick} style={{ background: "#b3b3b3" }}>
              Cadastrar
            </Button>
          </Content>
        </div>
        {popup && <Popup closePopup={() => setPopup(false)} />}
      </Container>
    </>
  );
}

export default Registration;
