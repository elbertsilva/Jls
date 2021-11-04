import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  /* position: relative; */
  @media (max-width: 1024px) {
    gap: 10px;
    grid-template-columns: 1fr;
  }
`;
export const ButtonReturn = styled.button`
  background-color: transparent;
  border-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
  color: #fff;
  cursor: pointer;
  display: flex;
  font-size: 1rem;
  justify-content: flex-end;
  margin-left: auto;
  margin-bottom: 100px;
  padding: 10px;
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
export const Content = styled.div`
  align-items: center;
  animation: ccc 1.2s ease forwards;
  background-image: linear-gradient(
    to left,
    #d9dff8,
    #e4e7fa,
    #eeeefb,
    #f7f7fd,
    #ffffff
  );
  border-radius: 10px;
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
  display: flex;
  flex-direction: column;
  gap: 5px;
  /* justify-items: stretch; */
  justify-content: center;
  padding: 30px;
  @keyframes ccc {
    from {
      transform: scale(0, 0);
    }
    to {
      transform: initial;
    }
  }
`;
export const Title = styled.h1`
  grid-column: 1/-1;
  text-align: center;
`;
export const Button = styled.button`
  background-color: ${({ color }) => color};
  border-color: #000;
  border-radius: 10px;
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
  color: #000;
  cursor: pointer;
  font-size: 1rem;
  margin: 10px;
  padding: 10px 25px;
`;
export const Table = styled.table`
  background-color: #0066ff;
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
  font-size: 1rem;
  @media (max-width: 1024px) {
    margin: 0 10px;
  }
`;
export const Input = styled.input`
  font-size: 1.5rem;
  padding: 10px;
  width: 100%;
`;
