import { useState } from 'react'
import './BarInfo.css'

function BarInfo(props) {
    const [nome] = useState(props.date.nome)
    const [simbolo] = useState(props.date.simbolo)
    const [massa] = useState(props.date.massa_atomica)
    const [numero] = useState(props.date.numero_atomico)
    const [config] = useState(props.date.config)

    console.log(props.date)

    return (
        <div className="BarConteiner">
            <div className="Barinfo show">
                <span className="fecha" onClick={props.barinfofecha}>
                    <span className="left"></span>
                    <span className="right"></span>
                </span>

                <h2>{ nome }</h2>
                <div className="info">
                    <h3>Símbolo</h3>
                        <abbr title="Click pra copiar">
                            <p onClick={() => {navigator.clipboard.writeText(String(simbolo))}}>{ simbolo }</p>
                        </abbr>
                </div>
                <div className="divi">
                    <hr />
                </div>
                <div className="info">
                    <h3>Número Atômico</h3>
                    <abbr title="Click pra copiar">
                        <p onClick={() => {navigator.clipboard.writeText(String(numero))}}> { numero } </p>
                    </abbr>
                </div>
                <div className="divi">
                    <hr />
                </div>
        
                <div className="info">
                    <h3>Massa Atômica</h3>
                    <abbr title="Click pra copiar">
                        <p onClick={() => {navigator.clipboard.writeText(String(massa))}}> { 
                            massa} </p>
                    </abbr>
                </div>
                <div className="divi">
                    <hr />
                </div>
                <div className="info">
                    <h3>Configuração Eletrônica</h3>
                    <abbr title="Click pra copiar">
                        <p onClick={() => {navigator.clipboard.writeText(String(config))}}>{ config }</p>
                    </abbr>
                </div>
            </div>

            <div className="CloseBarInfo show" onClick={props.barinfofecha}></div>
        </div>
    ) 
}

export default BarInfo