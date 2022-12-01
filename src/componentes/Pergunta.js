import { useState } from "react"
import seta_play from "../assets/img/seta_play.png"
import seta_virar from "../assets/img/seta_virar.png"


export default function Pergunta(props) {
    const {card , numeroDaPergunta}=props

    const[texto , setTexto]=useState(`Pergunta${numeroDaPergunta}`)
    const[imagem , setImagem]= useState(seta_play)
    const[pergunta, setPergunta]=useState("pergunta-fechada")

    function mostrarPergunta(){
        setTexto(card.question)
        setImagem(seta_virar)
        setPergunta("pergunta-aberta")
    }

    return (
        <div className={pergunta}>
            <p>{texto}</p>
            <img src={imagem} onClick={mostrarPergunta}/>
        </div>
    )
}