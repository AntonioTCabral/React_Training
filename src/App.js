import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
  const generatePassword = () =>
    Math.random().toString().slice(3, 7);

  const [password, setPassword] = useState(0);
  const [senhasGeradas,addSenhas] = useState([]);

  
  const gravaSenha = () => {
    if (senhasGeradas.length >= 4){
      senhasGeradas.shift();
    }
      addSenhas([
      ...senhasGeradas,{
        value : password
      }
    ])
  
  }

  const handleClick = () => {
    setPassword(generatePassword());
    if (password > 0){
    gravaSenha(password);
    
    };
   }


  return (
    <div className="container">
      <div className="row container_principal ">
        <div className="col-sm-4 triagem ">
          <h1>Triagem</h1>
          <h4>Retire uma senha para ser atendido</h4>
          <div className="alert alert-success" role="alert">
            <h3>Senha: {password}</h3>
          </div>
          <div className="btnGerador">
            <button className="btn btn-secondary" onClick= {handleClick}>Gerar senha</button>
          </div>
        </div>
        <div className="col-sm-4 senhasGeradas">
          <h1>Senhas Geradas:</h1>
          <div className="alert alert-success" role="alert">
            <h3> {senhasGeradas.map(senhasGeradas => (
              <h3>{senhasGeradas.value}</h3>))}
            </h3>
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;
