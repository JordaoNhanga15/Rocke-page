import './App.css';
import Logo from './assets/download.png';
import Vector from "./assets/139857990_3799925826739341_8072395811860164337_n.png";
import { TiMessages } from "react-icons/ti";
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
function App() {
  useEffect(()=>{
    document.title="Rocketseat"
  },[])
  return (
    <>
    <div id="confettis">
        <div class="confetti"></div>
        <div class="confetti"></div>
        <div class="confetti"></div>
        <div class="confetti"></div>
        <div class="confetti"></div>
        <div class="confetti"></div>
        <div class="confetti"></div>
        <div class="confetti"></div>
        <div class="confetti"></div>
      </div>
    <div className="App">
      <header className="App-header">
          <img className="Logo" src={Logo} alt=""/>
          <div className="textos">
            <span>Sign In</span>
            <div className="hr"></div>
            <span>Contact</span>
          </div>
      </header>
      <main>
          
            <aside className="right">
                <h1> A home school app that wins</h1>
                <p>forget load times, annoyng lines and noisy chewers. our app will make never want to leave the house</p>
                <Link to="/">Create your account Rocketseat</Link>
            </aside>
            <aside className="left">
                <img src={Vector} alt=""/>
            </aside>
            
      </main>
    </div>
    <div className="bu">
      <TiMessages size={35} color="white"/>
    </div>
    </>
  );
}

export default App;
