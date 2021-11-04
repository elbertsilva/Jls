import React from "react";

import { Container, Content } from "./styles";

function Popup({ closePopup, title }) {
  return (
    <Container
      onClick={({ target, currentTarget }) => {
        if (target === currentTarget) {
          closePopup();
        }
      }}
    >
      <Content>
        <hi>{title}</hi>
      </Content>
    </Container>
  );
}

export default Popup;
