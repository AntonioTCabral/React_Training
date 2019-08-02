import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
  const generatePassword = () =>
  Math.random().toString().slice(3, 7);

    const [password, setPassword] = useState(generatePassword());

    const handleClick = () => setPassword(generatePassword());
    
  return (
      <div className="container">
        <div className="row">
          <div className="col-sm-4 triagem">
          <h1>Triagem</h1>
          <h4>Retire uma senha para ser atendido</h4>
          <div className="alert alert-success" role="alert">
          <h3>Senha: {password}</h3>
          </div>
          <button className="btn btn-secondary" onClick={() => handleClick()}>Gerar senha</button>
          </div>
        </div>
      </div>
    
  );
}

export default App;
