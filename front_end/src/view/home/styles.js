import styled from "styled-components";
import { Link as Route } from "react-router-dom";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  @media (max-width: 1200px) {
    align-items: center;
    font-size: small;
    flex-direction: column;
    justify-content: center;
  }
`;
export const Ul = styled.ul`
  cursor: pointer;
  padding: 0;
  ul {
    display: none;
  }
  @media (max-width: 1200px) {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
  }
`;
export const Li = styled.li`
  background-color: transparent;
  border-radius: 5px;
  color: #fff;
  float: left;
  font-size: 1rem;
  height: 40px;
  line-height: 40px;
  list-style: none;
  text-align: center;
  width: 200px;
  &:hover {
    background-color: #fff;
    background-image: linear-gradient(
      to left,
      #d9dff8,
      #e4e7fa,
      #eeeefb,
      #f7f7fd,
      #ffffff
    );
    color: #000;
    ul {
      display: block;
    }
  }
`;
export const Link = styled(Route)`
  color: #fff;
  text-decoration: none;
  &:hover {
    color: #000;
  }
`;
export const ButtonLogout = styled.button`
  background: transparent;
  border-color: transparent;
  border-radius: 5px;
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
  cursor: pointer;
  font-size: 1rem;
  color: #fff;
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
  text-align: center;
`;
