import React from "react";
import server from "../../server/server";
import { useHistory } from "react-router-dom";
import {
  Container,
  Content,
  Header,
  Table,
  Button,
  Title,
  ButtonReturn,
  Input,
} from "./styles";
import TableAdd from "../../components/tableAdd";
import { ButtonEdit, ButtonDelete } from "../../components/tableAdd/styles";

const initialState = {
  id: undefined,
  nome: "",
  cidade: "",
  posicao: "",
  date_nasc: null,
};

function Registration() {
  const [post, setPost] = React.useState(initialState);
  const [teste, setGet] = React.useState(null);
  const history = useHistory();
  async function getTeste() {
    const data = await server.get("/teste");
    console.log(data.data);
    setGet(data.data);
  }

  React.useEffect(() => {
    getTeste();
  }, []);

  async function handleClick() {
    if (post.id) {
      await server.put(`/edit/${post.id}`, {
        nome: post.nome,
        cidade: post.cidade,
        posicao: post.posicao,
        date_nasc: post.date_nasc,
      });
      getTeste();
      setPost(initialState);
    } else {
      await server.post("/cadastro", post);
      console.log(post);
      getTeste();
      setPost(initialState);
    }
  }

  async function handleDelete(id) {
    await server.delete(`/delete/${id}`);
    getTeste();
  }

  async function handleEdit(data) {
    console.log(data);
    setPost(data);
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
        <div>
          <TableAdd
            columns={teste ? Object.keys(teste[0]) : []}
            data={teste ? teste : []}
            title="Lista de jogadores"
            columnButtons={[
              (data) => (
                <ButtonEdit onClick={() => handleEdit(data)}>Editar</ButtonEdit>
              ),
              (data) => (
                <ButtonDelete onClick={() => handleDelete(data.id)}>
                  Deletar
                </ButtonDelete>
              ),
            ]}
          ></TableAdd>
        </div>
      </Container>
    </>
  );
}

export default Registration;
