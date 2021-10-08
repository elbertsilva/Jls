import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

// import { Container } from './styles';

function Home() {
  return (
    <div>
      <header className="cabeçalho">
        <div className="logo">
          <a href="#inicio">{/* <img src={image} alt="Logo" /> */}</a>
        </div>
        <button className="menu-toggle">
          <i className="fa fa-lg fa-bars"></i>
        </button>
        <nav className="menu">
          <ul>
            <li>
              <a href="#inicio">Inicio</a>
            </li>
            <li>
              <a href="#Cursos">Jogadores</a>
            </li>
            <li>
              <a href="#Sobre">Sobre</a>
            </li>
            <li>
              <a href="#Contato">Contato</a>
            </li>
          </ul>
        </nav>
        <aside className="autenticacao">
          <Link to="/" class="botao destaque">
            Logout
          </Link>
        </aside>
      </header>
    </div>
  );
}

export default Home;
