import styled from "styled-components";
import { Link as Route } from "react-router-dom";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
`;
export const Ul = styled.ul`
  cursor: pointer;
  padding: 0;
  ul {
    display: none;
  }
`;
export const Li = styled.li`
  background-color: transparent;
  border-radius: 5px;
  color: #fff;
  float: left;
  font-size: 1.5rem;
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
  text-decoration: none;
  color: #fff;
  &:hover {
    color: #000;
  }
`;
export const ButtonLogout = styled.button`
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
  border-color: transparent;
  cursor: pointer;
  font-size: 2rem;
  color: #fff;
  background: transparent;
  border-radius: 5px;
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
