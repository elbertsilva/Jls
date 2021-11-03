import React from "react";
import { Container, Content, ButtonReturn } from "./styles";
import { Email, Call, LocationOn } from "@material-ui/icons";
import { useHistory } from "react-router-dom";

function Contact() {
  const history = useHistory();
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
        <Content>
          <h1>
            <Email style={{ fontSize: "2rem" }} />
          </h1>
          <h1>josejls@hotmail.com.br</h1>
          <h1>
            <Call />
          </h1>
          <h1>+55 (19) 99503-3572</h1>
          <h1>
            <LocationOn />
          </h1>
          <h1>Indaiatuba-SP</h1>
        </Content>
      </Container>
    </>
  );
}

export default Contact;
