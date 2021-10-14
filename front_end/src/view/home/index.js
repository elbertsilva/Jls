import React from "react";
import { Nav, Ul, Li, Link } from "./styles";

function Home() {
  return (
    <Nav class="menu">
      <Ul>
        <Li>Inicio</Li>
        <Li>
          Jogador
          <Ul>
            <Li>
              <Link to={"/view"}>Cadastrar jogador</Link>
            </Li>
          </Ul>
        </Li>
        <Li>Contato</Li>
      </Ul>
    </Nav>
  );
}

export default Home;
