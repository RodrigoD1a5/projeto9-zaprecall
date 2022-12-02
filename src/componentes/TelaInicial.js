import styled from "styled-components"
import logo from "../assets/img/logo.png"
export default function TelaInicial({iniciarRecall}){
    return(
        <Inicio>
            <img src={logo}/>
            <h1>ZapRecall</h1>
            <button data-test="start-btn" onClick={iniciarRecall}>Iniciar Recall!</button>
        </Inicio>
    )
}

const Inicio =styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position:fixed;
    h1{ 
        margin-top:20px;
        width: 257px;
        height: 59px;
        font-family: 'Righteous';
        font-style: normal;
        font-weight: 400;
        font-size: 36px;
        line-height: 45px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #FFFFFF;
    }
    button{
        cursor:pointer;
        margin-top:30px;
        width: 246px;
        height: 54px;
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        text-align: center;
        color: #D70900;
        background: #FFFFFF;
        border: 1px solid #D70900;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
        border-radius: 5px;
    }
`
const RodapeBotoesConcluidos = styled.div`
    display: flex;
    width: 80%;
    justify-content: space-between;
    margin: 20px;
`
