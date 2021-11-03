import styled from "styled-components";
import { Link } from "react-router-dom";
import { FullscreenExit } from "@material-ui/icons";

export const Container = styled.div`
  align-items: center;
  background-image: linear-gradient(
    to left,
    #d9dff8,
    #e4e7fa,
    #eeeefb,
    #f7f7fd,
    #ffffff
  );
  display: flex;
  height: 100vh;
  justify-content: center;
  width: 100%;
`;

export const Content = styled.div`
  background: #fff;
  border-radius: 10px;
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
  display: grid;
  justify-items: center;
  min-height: 40%;
  padding: 30px;
  /* width: 30%; */
  @media (max-width: 1200px) {
    grid-column: auto;
  }
`;

export const Title = styled.label`
  font-size: 1.8rem;
  text-align: center;
`;

export const Button = styled(Link)`
  align-items: center;
  background: #000;
  border-radius: 10px;
  color: #fff;
  cursor: pointer;
  display: flex;
  font-size: 1rem;
  justify-content: center;
  margin-top: 10px;
  text-decoration: none;
  width: 30%;
`;
