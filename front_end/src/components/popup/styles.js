import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;
export const Content = styled.div`
  align-items: center;
  animation: jls 1.2s ease forwards;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
  color: #66ff33;
  display: flex;
  font-size: 2rem;
  height: 30%;
  justify-content: center;
  padding: 10px;
  position: absolute;
  width: 40%;
  z-index: aaaaaaa;
  @keyframes jls {
    from {
      transform: scale(0, 0);
    }
    to {
      transform: initial;
    }
  }
`;
