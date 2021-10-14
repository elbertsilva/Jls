import React from "react";
import { Container, Content } from "./styles";
import { Email } from "@material-ui/icons";

function Contact() {
  return (
    <Container>
      <Content>
        <h1>
          <Email style={{ fontSize: "5rem" }} />
        </h1>
        <h1>josejls@hotmail.com.br</h1>
        <h1>Contato</h1>
        <h1>+55 (19) 99503-3572</h1>
        <h1>Cidade</h1>
        <h1>Indaiatuba-SP</h1>
      </Content>
    </Container>
  );
}

export default Contact;
