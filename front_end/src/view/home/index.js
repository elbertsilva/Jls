import React from "react";
import { Nav, Ul, Li, Link } from "./styles";

function Home() {
  return (
    <Nav class="menu">
      <Ul>
        <Li>Inicio</Li>
        <Li>
          <Link to={"/player"}>Jogador</Link>
          <Ul>
            <Li>
              <Link to={"/registration"}>Cadastrar jogador</Link>
            </Li>
          </Ul>
        </Li>
        <Li>
          <Link to={"/contact"}>Contato</Link>
        </Li>
      </Ul>
    </Nav>
  );
}

export default Home;
