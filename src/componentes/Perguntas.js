import Pergunta from "./Pergunta";

export default function Perguntas(props) {
    const {cards, fecharCard }=props
    return (
        <>
            {cards.map((card , index )=> <Pergunta key={index} card={card} numeroDaPergunta={index+1} fecharCard={fecharCard}/>)}
        </>
    )
}