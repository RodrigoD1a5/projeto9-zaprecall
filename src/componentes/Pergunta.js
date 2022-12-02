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

    const [dataTestImg , setDataTestImg] = useState("play-btn")

    function clicarImagem(){
        if(pergunta==="pergunta-fechada"){
            mostrarPergunta()
        }
        else{
            mostrarResposta()
        }

    }
    function mostrarPergunta() {
        if(perguntaFinalizada){
            return
        }
        setTexto(card.question)
        setImagem(seta_virar)
        setDataTestImg("turn-btn")
        setPergunta("pergunta-aberta")
    }
    function mostrarResposta()  {
        if(perguntaFinalizada){
            return
        }
        setTexto(card.answer)
        setResposta("resposta-aberta")
        setImagem("")
        setDataTestImg("")
    }

    function responder(cor, icon, dataTest){
        if(perguntaFinalizada){
            return
        }
        setResposta("resposta-fechada")
        setPergunta("pergunta-fechada")
        setTexto(`Pergunta${numeroDaPergunta}`)
        setImagem(icon)
        setCor(cor)
        setPerguntaFinalizada(true)
        setDataTestImg(dataTest)
        fecharCard()
    }

    return (
        <EstiloCardPergunta 
        data-test='flashcard'
        pergunta={pergunta}
        cor={cor}
        perguntaFinalizada={perguntaFinalizada}
        >
            <p data-test="flashcard-text">{texto}</p>
            <img data-test={dataTestImg} src={imagem} onClick={clicarImagem}/>
            {(resposta === "resposta-aberta")  && 
            <ContainerBotoes>
                <StyleButton data-test="no-btn" cor={VERMELHO} onClick = {() => responder(VERMELHO , erro, 'no-icon')}>
                Não Lembrei
                </StyleButton>
                <StyleButton data-test="partial-btn" cor={AMARELO} onClick = {() => responder(AMARELO , quase, 'partial-icon')}>
                Quase não lembrei
                </StyleButton>
                <StyleButton data-test="zap-btn" cor={VERDE} onClick = {() => responder(VERDE , certo, 'zap-icon')}>
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
  cursor: pointer;
`