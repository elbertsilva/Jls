import React from "react";

import { Container, Content } from "./styles";

function Popup({ closeModal }) {
  return (
    <Container
      onClick={({ target, currentTarget }) => {
        if (target === currentTarget) {
          closeModal();
        }
      }}
    >
      <Content>
        <hi>Cadastro efetuado com sucesso!</hi>
      </Content>
    </Container>
  );
}

export default Popup;
