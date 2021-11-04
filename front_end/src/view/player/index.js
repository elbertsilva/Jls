import React from "react";
import server from "../../server/server";
import { useHistory } from "react-router-dom";
import { Div } from "./styles";
import Table from "../../components/table/";
import { ButtonReturn, Input } from "./styles";
import { ButtonEdit, ButtonDelete } from "../../components/tableAdd/styles";
import PopupEdit from "../../components/popupEdit";

const initialState = {
  id: undefined,
  nome: "",
  cidade: "",
  posicao: "",
  date_nasc: null,
};

function Player() {
  const [popup, setPopup] = React.useState(false);
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

  async function getTeste() {
    const data = await server.get("/teste");
    console.log(data.data);
    setGet(data.data);
  }

  React.useEffect(() => {
    getTeste();
  }, []);
  async function handleDelete(id) {
    await server.delete(`/delete/${id}`);
    getTeste();
  }

  async function handleEdit(data) {
    console.log(data);
    setPopup(true);
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
      <Div>
        <Table
          title="Lista de jogadores"
          columnNames={["nome", "cidade", "data_nasc", "posicao"]}
          columns={["nome", "cidade", "date_nasc", "posicao"]}
          data={teste ? teste : []}
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
        ></Table>
      </Div>

      {popup && <PopupEdit data={post} closePopup={() => setPopup(false)} />}
    </>
  );
}

export default Player;
