import React from "react";
import Table from "../../components/table/index";
import server from "../../server/server";
import { ButtonReturn } from "./styles";
import { useHistory } from "react-router-dom";

function Spent() {
  const [spent, setSpent] = React.useState(null);
  const history = useHistory();
  async function getSpent() {
    const data = await server.get("/spent");
    console.log(data);
    setSpent(data.data);
  }

  React.useEffect(() => {
    getSpent();
  }, []);

  return (
    <div>
      <ButtonReturn
        onClick={() => {
          history.push("/home");
        }}
      >
        Retorno
      </ButtonReturn>
      <Table
        title="Lista de jogadores"
        columnNames={spent ? Object.keys(spent[0]) : []}
        columns={spent ? Object.keys(spent[0]) : []}
        data={spent ? spent : []}
      ></Table>
    </div>
  );
}

export default Spent;
