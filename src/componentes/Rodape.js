import styled from "styled-components"

export default function Rodape(props) {
    const { cardsFechados, totalCards, filaRespostaIcon } = props
    return (
        <RodapeConcluidos>
            <div data-test="footer">
                {cardsFechados}/{totalCards} CONCLUÍDOS
            </div>
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

const RodapeBotoesConcluidos = styled.div`
    display: flex;
    width: 50%;
    justify-content: space-between;
    margin: 20px;

`