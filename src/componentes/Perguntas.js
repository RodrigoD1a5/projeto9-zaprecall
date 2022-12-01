import Pergunta from "./Pergunta";

export default function Perguntas(props) {
    const {cards}=props
    return (
        <>
            {cards.map((card , index )=> <Pergunta key={index} card={card} numeroDaPergunta={index+1} />)}
        </>
    )
}