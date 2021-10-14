import styled from "styled-components";
import { Link as Route } from "react-router-dom";

export const Nav = styled.nav``;
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
