import React from "react";

import { Container, Content } from "./styles";

function Popup({ closePopup }) {
  return (
    <Container
      onClick={({ target, currentTarget }) => {
        if (target === currentTarget) {
          closePopup();
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
