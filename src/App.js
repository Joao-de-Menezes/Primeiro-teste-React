import { useState } from 'react';
import logo_sem_escrita from './assets/UNICEPLAC logo.svg'//depois do import eu nomeio o arquivo como eu quero, depois importo a imagem que eu quero da pasta assets
import './styles.css'

function App() {//o react pega uma função JavaScript que retorna html, que vai ser exportada e importada no index.js, que vai ser repassado pra nossa id 'root'
  const[email, setEmail] = useState("")//por padrão o React não altera diretamente o valor da variavel. ele vai receber um valor na variável setEmail, e repassar esse valor para a variável email para que o texto não fique em cima do outro no login.
  const[password, setPassword] = useState("")

  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form">
            
            <span className="login-form-title">Bem vindo</span>

            <span className="login-form-title">
              <img src={logo_sem_escrita} alt="UNICEPLAC"/>
            </span>

            <div className="wrap-input">
              <input 
              className={email !== "" ? 'has-val input' : 'input'}//o ? é um if ternário
              type="email"
              value={email}//pegamos o valor do email
              onChange={e => setEmail(e.target.value)}//capturamos o valor do email com o onChange, que pega o setEmail e repassa o valor para essa variável.
              />
              <span className="focus-input" data-placeholder="Email"></span>
            </div>
            
            <div className="wrap-input">
              <input 
              className={password !== "" ? 'has-val input' : 'input'}
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Password"></span>
            </div>

            <div className='container-login-form-btn'>
              <button className='login-form-btn'>Login</button>
            </div>

            <div className='text-center'>
              <span className='txt1'>Não possui conta?</span>
              <a className='txt2' href='#'>Criar conta.</a>
            </div>


          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
