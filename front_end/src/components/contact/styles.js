import styled from "styled-components";

export const Container = styled.div`
  background: transparent;
  border-radius: 10px;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Content = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  font-size: 1.5rem;
  padding: 20px;
`;
