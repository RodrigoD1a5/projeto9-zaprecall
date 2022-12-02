import styled from "styled-components"
import party from "../assets/img/party.png"
import sad from "../assets/img/sad.png"


const parabens = "Parabéns!"
export default function Rodape(props) {
    const { cardsFechados, totalCards, filaRespostaIcon } = props
    return (
        <RodapeConcluidos data-test="footer">
            <div>
                {cardsFechados}/{totalCards} CONCLUÍDOS
            </div>
            {cardsFechados === totalCards &&
                <Mensagem data-test='finish-text'>
                    <div>
                        <img src={!filaRespostaIcon.map(((i) => i.dataTest)).includes("no-icon") ? party : sad} /><span>
                            {!filaRespostaIcon.map(((i) => i.dataTest)).includes("no-icon") ? "Parabéns!" : "Putz..."}
                        </span>
                    </div>
                    <p>
                        {!filaRespostaIcon.map(((i) => i.dataTest)).includes("no-icon") ? "Você não esqueceu de nenhum flashcard!" : "Ainda faltam alguns...Mas não desanime!"}
                    </p>
                </Mensagem>
            }
            <RodapeBotoesConcluidos>
                {filaRespostaIcon.map((i, index) => <img src={i.icon} data-test={i.dataTest} key={index} />)}
            </RodapeBotoesConcluidos>
        </RodapeConcluidos>

    )
}

const RodapeConcluidos = styled.div`
    width: 100%;
    min-height: 50px;
    background-color: #FFFFFF;
    position: fixed;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Recursive';
    font-weight: 400;
    font-size: 18px;
    color: #333333;
    padding: 10px;

`

const Mensagem = styled.div`
    margin: 10px 0 ;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    span{
        font-weight: 700;
        margin-left: 5px;
    }
`

const RodapeBotoesConcluidos = styled.div`
    display: flex;
    align-items: center;
    img{
        margin-right:7px;
    }
`
