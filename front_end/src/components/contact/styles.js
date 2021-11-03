import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  background: transparent;
  border-radius: 10px;
  display: flex;
  height: 100vh;
  justify-content: center;
  width: 100%;
`;
export const Content = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
  display: grid;
  font-size: 1rem;
  grid-template-columns: repeat(2, 1fr);
  padding: 20px;
  @media (max-width: 1200px) {
    font-size: small;
    gap: 10px;
    grid-column: auto;
  }
`;
export const ButtonReturn = styled.button`
  display: flex;
  background-color: transparent;
  border-radius: 10px;
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
  color: #fff;
  cursor: pointer;
  font-size: 1rem;
  justify-content: flex-end;
  margin-left: auto;
  padding: 5px;
  &:hover {
    background-image: linear-gradient(
      to left,
      #d9dff8,
      #e4e7fa,
      #eeeefb,
      #f7f7fd,
      #ffffff
    );
    color: #000;
  }
`;
