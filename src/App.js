import logo from "./assets/img/logo.png"
import seta_play from "./assets/img/seta_play.png"
export default function App() {
  return (
    <div className="screen-container">
      <div className="logo-container">
        <img src={logo}/>
        <h1>ZapRecall</h1>
      </div>
      <div className="pergunta-fechada">
        <p>Pergunta1</p>
        <img src={seta_play}/>
      </div>
      <div className="pergunta-fechada">
        <p>Pergunta2</p>
        <img src={seta_play}/>
      </div>
      <div className="pergunta-fechada">
        <p>Pergunta3</p>
        <img src={seta_play}/>
      </div>
      <div className="pergunta-fechada">
        <p>Pergunta4</p>
        <img src={seta_play}/>
      </div>
      <div className="pergunta-fechada">
        <p>Pergunta5</p>
        <img src={seta_play}/>
      </div>
      <div className="pergunta-fechada">
        <p>Pergunta6</p>
        <img src={seta_play}/>
      </div>
      <div className="pergunta-fechada">
        <p>Pergunta7</p>
        <img src={seta_play}/>
      </div>
      ,<div className="pergunta-fechada">
        <p>Pergunta8</p>
        <img src={seta_play}/>
      </div>
      <div className="footer-concluidos">
        0/4 CONCLUÍDOS
      </div>
    </div>
  );
}
