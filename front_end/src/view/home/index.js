import React from "react";
import { Nav, Ul, Li, Link, ButtonLogout } from "./styles";

function Home() {
  return (
    <Nav class="menu">
      <Ul>
        <Li>
          <Link to={"/home"}>Inicio</Link>
        </Li>
        <Li>
          <Link to={"/player"}>Jogador</Link>
          <Ul>
            <Li>
              <Link to={"/registration"}>Cadastrar jogador</Link>
            </Li>
            <Li>
              <Link to={"/spent"}>Gasto jogador</Link>
            </Li>
          </Ul>
        </Li>
        <Li>
          <Link to={"/contact"}>Contato</Link>
        </Li>
      </Ul>
      <ButtonLogout>
        <Link to={"/"}>Sair</Link>
      </ButtonLogout>
    </Nav>
  );
}

export default Home;
