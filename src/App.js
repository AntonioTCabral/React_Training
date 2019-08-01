import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const generatePassword = () =>
  Math.random().toString().slice(3, 7);

    const [password, setPassword] = useState(generatePassword());

    const handleClick = () => setPassword(generatePassword());
  return (
    <div className="App">
      <h1>Triagem</h1>
      <h2>Retire uma senha para ser atendido</h2>
      <h3>Senha: {password}</h3>
      <button onClick={() => handleClick()}>Gerar senha</button>
    </div>
  );
}

export default App;
