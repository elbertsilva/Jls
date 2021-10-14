import { createGlobalStyle } from "styled-components";
import img from '../assets/pexels-photo-5597398.jpeg'
export const Global = createGlobalStyle`
 *{margin: 0;
 padding: 0;
 box-sizing: border-box;
 }
 body{
    ${'' /* background: linear-gradient(to right, rgba(0, 0, 150, 8), transparent); */}
    ${'' /* background-image: linear-gradient(to left,#d9dff8,#e4e7fa,#eeeefb,#f7f7fd,#ffffff); */}
    background: url(${img});
    background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
 }


`;
