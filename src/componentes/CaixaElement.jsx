import { useEffect, useRef, useState } from 'react'
import './CaixaElement.css'


function CaixaElemento(props) {
    function DefinirStyle() {
        const style = props.estilo
        
        if (style === 'none') {
            SetClassStyle('caixa none')
        }
        else if (style === 'gasnobre') {
            SetClassStyle('caixa gasnobre')
        }
        else if (style === 'metalAL') {
            SetClassStyle('caixa metal-al')
        }
        else if (style === 'ALTR') {
            SetClassStyle('caixa metal-al-trr')
        }
        else if (style === 'halo') {
            SetClassStyle('caixa halo')
        }
        else if (style === 'transicao') {
            SetClassStyle('caixa transicao')
        }
        else if (style === 'semimetal') {
            SetClassStyle('caixa semi-metais')
        }
        else if (style === 'nometal') {
            SetClassStyle('caixa nao-metais')
        }
        else if (style === 'lanta') {
            SetClassStyle('caixa lanta')
        }
        else if (style === 'acti') {
            SetClassStyle('caixa acti')
        }
    }


    function GetInfoJson() {
        const informa = props.info
        if (informa === null) { return }
        inforBarInfo.current = {
            nome: informa.nome,
            simbolo: informa.símbolo,
            numero_atomico: informa.número_atômico,
            massa_atomica: informa.massa_atômica,
            config: informa.configuração_eletrônica
        }
        SetNomeElement(informa.símbolo)
        SetNumAtomico(informa.número_atômico)
    }

    const inforBarInfo = useRef()

    const [ClassStyleElement, SetClassStyle] = useState()
    useEffect(() => {
        GetInfoJson()
        DefinirStyle()
    })

    const [SimElement, SetNomeElement] = useState()
    const [NumAtomo, SetNumAtomico] = useState()

    return (
        <div className={ClassStyleElement} onClick={() => {props.barinfo(inforBarInfo.current)}}>
            <p>{ NumAtomo }</p>
            <h3>{ SimElement }</h3>
        </div>
    )
}

export default CaixaElemento