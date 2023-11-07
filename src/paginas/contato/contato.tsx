import React from 'react';
import './contato.css';

function Contato() {
  return (
    <div className="fundo1">
      <nav id="main-menu">
        <ul className="topo">
          <br />
          <li><a href="../home/index.html">Início</a></li>
          <li><a href="../carrosDisponiveis/carrosDispo.html">Carros Disponíveis</a></li>
          <li><a href="../reservar/reservar.html">Reservar</a></li>
          <li><a href="../contato/contato.html">Contato</a></li>
          <li><a href="../login/login.html">Login</a></li>
        </ul>
      </nav>
      <br />
      <br />
      <br />
      <main>
        <section id="contact">
          <h2>Entre em Contato</h2>
          <p>Preencha o formulário abaixo para entrar em contato conosco:</p>
          <form action="processar_contato.php" method="POST">
            <label htmlFor="nome">Nome:</label>
            <input type="text" id="nome" name="nome" required />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="mensagem">Mensagem:</label>
            <textarea id="mensagem" name="mensagem" rows= {4} required></textarea>

            <button type="submit">Enviar Mensagem</button>
          </form>
        </section>
      </main>
      <footer>
        <p>&copy; 2023 Locadora de Carros</p>
      </footer>
    </div>
  );
}

export default Contato;
