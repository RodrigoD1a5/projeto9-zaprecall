import { useState } from "react"
import styled from "styled-components"
import seta_play from "../assets/img/seta_play.png"
import seta_virar from "../assets/img/seta_virar.png"


export default function Pergunta(props) {
    const { card, numeroDaPergunta } = props

    const [texto, setTexto] = useState(`Pergunta${numeroDaPergunta}`)
    const [imagem, setImagem] = useState(seta_play)
    const [pergunta, setPergunta] = useState("pergunta-fechada")

    function mostrarPergunta() {
        setTexto(card.question)
        setImagem(seta_virar)
        setPergunta("pergunta-aberta")
    }

    return (
        <EstiloCardPergunta pergunta={pergunta}>
            <p>{texto}</p>
            <img src={imagem} onClick={mostrarPergunta} />
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
p {
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #333333;
}
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
`