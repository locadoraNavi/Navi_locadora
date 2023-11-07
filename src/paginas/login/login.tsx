import React from 'react';
import './login.css';

function Login() {
    
  return (
    <div className="login-container">
      <h2>Login - Empresa de Locação de Veículos</h2>
      <form>
        <div className="form-group">
          <label htmlFor="username">Usuário:</label>
          <input type="text" id="username" className="input-field" name="username" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Senha:</label>
          <input type="password" id="password" className="input-field" name="password" required />
        </div>
        <div className="form-group">
          <button type="submit" className="login-button">Entrar</button>
        </div>
      </form>

      <div className="back-button">
        <a href="../home/index.html" className="centro">Voltar à Página Inicial</a>
      </div>
    </div>
  );
}

export default Login;
