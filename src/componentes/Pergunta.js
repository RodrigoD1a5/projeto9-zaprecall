import { useState } from "react"
import styled from "styled-components"
import seta_play from "../assets/img/seta_play.png"
import seta_virar from "../assets/img/seta_virar.png"
import erro from "../assets/img/icone_erro.png"
import certo from "../assets/img/icone_certo.png"
import quase from "../assets/img/icone_quase.png"


const VERDE = "#2FBE34"
const AMARELO = "#FF922E"
const VERMELHO = "#FF3030"
const CINZA = "#333333"

export default function Pergunta(props) {
    const { card, numeroDaPergunta ,fecharCard} = props

    const [texto, setTexto] = useState(`Pergunta${numeroDaPergunta}`)
    const [imagem, setImagem] = useState(seta_play)
    const [pergunta, setPergunta] = useState("pergunta-fechada")
    const [resposta, setResposta]= useState("resposta-fechada")
    const [cor ,setCor]=useState("")
    const [perguntaFinalizada, setPerguntaFinalizada] = useState(false)

    function mostrarPergunta() {
        if(perguntaFinalizada){
            return
        }
        setTexto(card.question)
        setImagem(seta_virar)
        setPergunta("pergunta-aberta")
    }
    function mostrarResposta()  {
        if(perguntaFinalizada){
            return
        }
        setTexto(card.answer)
        setResposta("resposta-aberta")
        setImagem("")
    }

    function responder(VERMELHO, erro){
        if(perguntaFinalizada){
            return
        }
        setResposta("resposta-fechada")
        setPergunta("pergunta-fechada")
        setTexto(`Pergunta${numeroDaPergunta}`)
        setImagem(erro)
        setCor(VERMELHO)
        setPerguntaFinalizada(true)
        fecharCard()
    }

    return (
        <EstiloCardPergunta 
        pergunta={pergunta}
        cor={cor}
        perguntaFinalizada={perguntaFinalizada}
        >
            <p>{texto}</p>
            <img src={imagem} onClick={pergunta === "pergunta-fechada"? mostrarPergunta : mostrarResposta}/>
            {(resposta === "resposta-aberta")  && 
            <ContainerBotoes>
                <StyleButton cor={VERMELHO} onClick = {() => responder(VERMELHO , erro)}>
                Não Lembrei
                </StyleButton>
                <StyleButton cor={AMARELO} onClick = {() => responder(AMARELO , quase)}>
                Quase não lembrei
                </StyleButton>
                <StyleButton cor={VERDE} onClick = {() => responder(VERDE , certo)}>
                Zap!
                </StyleButton>
            </ContainerBotoes>}
        </EstiloCardPergunta >
    )
}

const CartaFechada = `width: 300px;
height: 35px;
background-color: #FFFFFF;
margin: 12px;
padding: 15px;
box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
border-radius: 5px;
display: flex;
align-items: center;
justify-content: space-between;
img{
    cursor: pointer;
}
`

const CartaAberta = `
width: 300px;
margin: 12px;
padding: 15px;
min-height: 100px;
background: #FFFFD5;
box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
border-radius: 5px;
font-family: 'Recursive';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 22px;
color: #333333;
position: relative;
display: flex;
flex-direction: column;
justify-content: space-between;
img {
    position: absolute;
    bottom: 10px;
    right: 10px;
}
`

export const EstiloCardPergunta = styled.div`
  ${props => props.pergunta === "pergunta-fechada" ? CartaFechada : CartaAberta}
  p {
    text-decoration: ${props => props.perguntaFinalizada && 'line-through'};
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: ${props => props.perguntaFinalizada ? props.cor : CINZA};
}
`

const ContainerBotoes = styled.div`
  width: 100%;
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
`

const StyleButton = styled.button`
  width: 86px;
  border-radius: 5px;
  color: #FFF;
  font-size: 12px;
  font-family: 'Recursive';
  border: none;
  height: 40px;
  background-color: ${props => props.cor};
  cursor: pointer
`