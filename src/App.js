import Logo from "./componentes/Logo";
import Perguntas from "./componentes/Perguntas";
import Rodape from "./componentes/Rodape";
import styled from "styled-components";
import { useState } from "react";
import TelaInicial from "./componentes/TelaInicial";


export default function App() {
  const cards = [
    { question: "O que é JSX?", answer: "Uma extensão da linguagem JavaScript" },
    { question: "O React é __", answer: "Uma biblioteca JavaScript para construção de interfaces" },
    { question: "Componentes devem iniciar com __", answer: "Letra maiúscula" },
    { question: "Podemos colocar __ dentro do JSX", answer: "expressões" },
    { question: "O ReactDOM nos ajuda __", answer: "Interagindo com a DOM para colocar componentes React na mesma" },
    { question: "Usamos o npm para __", answer: "Gerenciar os pacotes necessários e suas dependências" },
    { question: "Usamos props para __", answer: "Passar diferentes informações para componentes" },
    { question: "Usamos estado (state) para __", answer: "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" }
  ]

  const totalCards= cards.length 
  const [cardsFechados ,setCardsFechados] = useState(0)
  const [iniciar, setIniciar]=useState(false)
  console.log(iniciar)


  function fecharCard(){
    const numeroCardsFechados = cardsFechados+1
    setCardsFechados(numeroCardsFechados)
  }
  function iniciarRecall(){
    setIniciar(true)
  }


  return (
    <ContainerTela>
      {!iniciar ? 
      <TelaInicial
      iniciarRecall={iniciarRecall}
      /> 
      :
      <>
      <Logo />
      <Perguntas 
      cards={cards} 
      fecharCard={fecharCard}
      />

      <Rodape 
      cardsFechados={cardsFechados}
      totalCards={totalCards}
      />
      </>
      }
    </ContainerTela>
  );
}


const ContainerTela = styled.div`
  background-color: #FB6B6B;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0px;
  padding: 0px;
  padding-bottom: 200px;
`