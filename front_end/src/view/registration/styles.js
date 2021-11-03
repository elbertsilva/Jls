import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  /* justify-items: center; */
  gap: 10px;
  padding: 20px;
  @media (max-width: 1024px) {
    gap: 10px;
    grid-template-columns: 1fr;
  }
`;
export const ButtonReturn = styled.button`
  display: flex;
  margin-left: auto;
  justify-content: flex-end;
  background-color: transparent;
  border-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
  color: #fff;
  cursor: pointer;
  font-size: 1.8rem;
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
export const Content = styled.div`
  align-items: center;
  /* background-color: #0066ff; */
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
  height: 100%;
  justify-items: stretch;
  padding: 30px;
  width: 100%;
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
