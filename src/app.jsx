import React, {useRef, useState } from "react";
import './App.css'
import CardElement from './componentes/CaixaElement.jsx'
import BarInfo from './componentes/BarInfo.jsx'
//arquivo json
import DateActi from './table info/Actinídeos.json'
import DateMetais from './table info/Metais.json'
import DateNoMetais from './table info/NoMetais.json'
import DateSemiMetais from './table info/semi_metais.json'
import Datelanti from './table info/lantanideos.json'


function App() {
    function ShowBarInfo(info) {
        if (!BarOn.current) {
            console.log(info)
            SetBarInfo(<BarInfo barinfofecha={ FecharBarInfo } date={info}></BarInfo>)
            BarOn.current = true
        }
    }


    function FecharBarInfo() {
        if (BarOn.current) {
            SetBarInfo('')
            BarOn.current = false
        }
    }

    const BarOn = useRef(false)
    const [BarinfoState, SetBarInfo] = useState()

    return (
        <div className="tabela">
            <div className="Divisao1">
                <div className="l1">
                    <CardElement info={ DateNoMetais.NoMetais.h } estilo="nometal" barinfo={ ShowBarInfo }></CardElement>
                    <CardElement info={ null } estilo="none" ></CardElement>
                    <CardElement info={ null } estilo="none" ></CardElement>
                    <CardElement info={ null } estilo="none" ></CardElement>
                    <CardElement info={ null } estilo="none" ></CardElement>
                    <CardElement info={ null } estilo="none" ></CardElement>
                    <CardElement info={ null } estilo="none" ></CardElement>
                    <CardElement info={ null } estilo="none" ></CardElement>
                    <CardElement info={ null } estilo="none" ></CardElement>
                    <CardElement info={ null } estilo="none" ></CardElement>
                    <CardElement info={ null } estilo="none" ></CardElement>
                    <CardElement info={ null } estilo="none" ></CardElement>
                    <CardElement info={ null } estilo="none" ></CardElement>
                    <CardElement info={ null } estilo="none" ></CardElement>
                    <CardElement info={ null } estilo="none" ></CardElement>
                    <CardElement info={ null } estilo="none" ></CardElement>
                    <CardElement info={ null } estilo="none" ></CardElement>
                    <CardElement info={ DateNoMetais.gasesnobre.he } estilo="gasnobre" barinfo={ ShowBarInfo }></CardElement>
                </div>
                <div className="l2">
                    <CardElement info={ DateMetais.alcalinos.li } estilo="metalAL" barinfo={ ShowBarInfo } ></CardElement>
                    <CardElement info={ DateMetais.terrosos.be } estilo="ALTR" barinfo={ ShowBarInfo }></CardElement>
                    <CardElement info={ null } estilo="none" ></CardElement>
                    <CardElement info={ null } estilo="none" ></CardElement>
                    <CardElement info={ null } estilo="none" ></CardElement>
                    <CardElement info={ null } estilo="none" ></CardElement>
                    <CardElement info={ null } estilo="none" ></CardElement>
                    <CardElement info={ null } estilo="none" ></CardElement>
                    <CardElement info={ null } estilo="none" ></CardElement>
                    <CardElement info={ null } estilo="none" ></CardElement>
                    <CardElement info={ null } estilo="none" ></CardElement>
                    <CardElement info={ null } estilo="none" ></CardElement>
                    <CardElement info={ DateSemiMetais.b } estilo="semimetal" barinfo={ ShowBarInfo }></CardElement>
                    <CardElement info={ DateNoMetais.NoMetais.c } estilo="nometal" barinfo={ ShowBarInfo }></CardElement>
                    <CardElement info={ DateNoMetais.NoMetais.n } estilo="nometal" barinfo={ ShowBarInfo }></CardElement>
                    <CardElement info={ DateNoMetais.NoMetais.o } estilo="nometal" barinfo={ ShowBarInfo }></CardElement>
                    <CardElement info={ DateNoMetais.hologenio.f } estilo="halo" barinfo={ ShowBarInfo }></CardElement>
                    <CardElement info={ DateNoMetais.gasesnobre.ne } estilo="gasnobre" barinfo={ ShowBarInfo }></CardElement>
                </div>
                <div className="l3">
                    <CardElement info={ DateMetais.alcalinos.na } estilo="metalAL" barinfo={ ShowBarInfo }></CardElement>
                    <CardElement info={ DateMetais.terrosos.mg } estilo="ALTR" barinfo={ ShowBarInfo }></CardElement>
                    <CardElement info={ null } estilo="none" ></CardElement>
                    <CardElement info={ null } estilo="none" ></CardElement>
                    <CardElement info={ null } estilo="none" ></CardElement>
                    <CardElement info={ null } estilo="none" ></CardElement>
                    <CardElement info={ null } estilo="none" ></CardElement>
                    <CardElement info={ null } estilo="none" ></CardElement>
                    <CardElement info={ null } estilo="none" ></CardElement>
                    <CardElement info={ null } estilo="none" ></CardElement>
                    <CardElement info={ null } estilo="none" ></CardElement>
                    <CardElement info={ null } estilo="none" ></CardElement>
                    <CardElement info={ DateMetais.postrasicao.al } estilo="transicao" barinfo={ ShowBarInfo }></CardElement>
                    <CardElement info={ DateSemiMetais.si } estilo="semimetal" barinfo={ ShowBarInfo }></CardElement>
                    <CardElement info={ DateNoMetais.NoMetais.p } estilo="nometal" barinfo={ ShowBarInfo }></CardElement>
                    <CardElement info={ DateNoMetais.NoMetais.s } estilo="nometal" barinfo={ ShowBarInfo }></CardElement>
                    <CardElement info={ DateNoMetais.hologenio.cl } estilo="halo" barinfo={ ShowBarInfo }></CardElement>
                    <CardElement info={ DateNoMetais.gasesnobre.ar } estilo="gasnobre" barinfo={ ShowBarInfo }></CardElement>
                </div>
                <div className="l4">
                    <CardElement info={ DateMetais.alcalinos.k } estilo="metalAL" barinfo={ ShowBarInfo }></CardElement>
                    <CardElement info={ DateMetais.terrosos.ca } estilo="ALTR" barinfo={ ShowBarInfo }></CardElement>
                    <CardElement info={ DateMetais.transicao.sc } estilo="transicao" barinfo={ ShowBarInfo }></CardElement>
                    <CardElement info={ DateMetais.transicao.ti } estilo="transicao" barinfo={ ShowBarInfo }></CardElement>
                    <CardElement info={ DateMetais.transicao.v } estilo="transicao" barinfo={ ShowBarInfo }></CardElement>
                    <CardElement info={ DateMetais.transicao.cr } estilo="transicao" barinfo={ ShowBarInfo }></CardElement>
                    <CardElement info={ DateMetais.transicao.mn } estilo="transicao" barinfo={ ShowBarInfo }></CardElement>
                    <CardElement info={ DateMetais.transicao.fe } estilo="transicao" barinfo={ ShowBarInfo }></CardElement>
                    <CardElement info={ DateMetais.transicao.co } estilo="transicao" barinfo={ ShowBarInfo }></CardElement>
                    <CardElement info={ DateMetais.transicao.ni } estilo="transicao" barinfo={ ShowBarInfo }></CardElement>
                    <CardElement info={ DateMetais.transicao.cu } estilo="transicao" barinfo={ ShowBarInfo }></CardElement>
                    <CardElement info={ DateMetais.transicao.zn } estilo="transicao" barinfo={ ShowBarInfo }></CardElement>
                    <CardElement info={ DateMetais.postrasicao.ga } estilo="transicao" barinfo={ ShowBarInfo }></CardElement>
                    <CardElement info={ DateSemiMetais.ge } estilo="semimetal" barinfo={ ShowBarInfo }></CardElement>
                    <CardElement info={ DateSemiMetais.as } estilo="semimetal" barinfo={ ShowBarInfo }></CardElement>
                    <CardElement info={ DateNoMetais.NoMetais.se } estilo="nometal" barinfo={ ShowBarInfo }></CardElement>
                    <CardElement info={ DateNoMetais.hologenio.br } estilo="halo" barinfo={ ShowBarInfo }></CardElement>
                    <CardElement info={ DateNoMetais.gasesnobre.kr } estilo="gasnobre" barinfo={ ShowBarInfo }></CardElement>
                </div>
                <div className="l5">
                    <CardElement info={ DateMetais.alcalinos.rb } estilo="metalAL" barinfo={ ShowBarInfo }></CardElement>
                    <CardElement info={ DateMetais.terrosos.sr } estilo="metalAL" barinfo={ ShowBarInfo }></CardElement>
                    <CardElement info={ DateMetais.transicao.y } estilo="transicao" barinfo={ ShowBarInfo }></CardElement>
                    <CardElement info={ DateMetais.transicao.zr } estilo="transicao" barinfo={ ShowBarInfo }></CardElement>
                    <CardElement info={ DateMetais.transicao.nb } estilo="transicao" barinfo={ ShowBarInfo }></CardElement>
                    <CardElement info={ DateMetais.transicao.mo } estilo="transicao" barinfo={ ShowBarInfo }></CardElement>
                    <CardElement info={ DateMetais.transicao.tc } estilo="transicao" barinfo={ ShowBarInfo }></CardElement>
                    <CardElement info={ DateMetais.transicao.ru } estilo="transicao" barinfo={ ShowBarInfo }></CardElement>
                    <CardElement info={ DateMetais.transicao.rh } estilo="transicao" barinfo={ ShowBarInfo }></CardElement>
                    <CardElement info={ DateMetais.transicao.pd } estilo="transicao" barinfo={ ShowBarInfo }></CardElement>
                    <CardElement info={ DateMetais.transicao.ag } estilo="transicao" barinfo={ ShowBarInfo }></CardElement>
                    <CardElement info={ DateMetais.transicao.cd } estilo="transicao" barinfo={ ShowBarInfo }></CardElement>
                    <CardElement info={ DateMetais.postrasicao.in } estilo="transicao" barinfo={ ShowBarInfo }></CardElement>
                    <CardElement info={ DateMetais.postrasicao.sn } estilo="transicao" barinfo={ ShowBarInfo }></CardElement>
                    <CardElement info={ DateSemiMetais.sb } estilo="semimetal" barinfo={ ShowBarInfo }></CardElement>
                    <CardElement info={ DateSemiMetais.te } estilo="semimetal" barinfo={ ShowBarInfo }></CardElement>
                    <CardElement info={ DateNoMetais.hologenio.i } estilo="halo" barinfo={ ShowBarInfo }></CardElement>
                    <CardElement info={ DateNoMetais.gasesnobre.xe } estilo="gasnobre" barinfo={ ShowBarInfo }></CardElement>
                </div>
                <div className="l6">
                    <CardElement info={ DateMetais.alcalinos.cs } estilo="metalAL" barinfo={ ShowBarInfo }></CardElement>
                    <CardElement info={ DateMetais.terrosos.ba } estilo="ALTR" barinfo={ ShowBarInfo }></CardElement>
                    <CardElement info={ Datelanti.la } estilo="lanta" ></CardElement>
                    <CardElement info={ DateMetais.transicao.hf } estilo="transicao" barinfo={ ShowBarInfo }></CardElement>
                    <CardElement info={ DateMetais.transicao.ta } estilo="transicao" barinfo={ ShowBarInfo }></CardElement>
                    <CardElement info={ DateMetais.transicao.w } estilo="transicao" barinfo={ ShowBarInfo }></CardElement>
                    <CardElement info={ DateMetais.transicao.re } estilo="transicao" barinfo={ ShowBarInfo }></CardElement>
                    <CardElement info={ DateMetais.transicao.os } estilo="transicao" barinfo={ ShowBarInfo }></CardElement>
                    <CardElement info={ DateMetais.transicao.ir } estilo="transicao" barinfo={ ShowBarInfo }></CardElement>
                    <CardElement info={ DateMetais.transicao.pt } estilo="transicao" barinfo={ ShowBarInfo }></CardElement>
                    <CardElement info={ DateMetais.transicao.au } estilo="transicao" barinfo={ ShowBarInfo }></CardElement>
                    <CardElement info={ DateMetais.transicao.hg } estilo="transicao" barinfo={ ShowBarInfo }></CardElement>
                    <CardElement info={ DateMetais.postrasicao.tl } estilo="transicao" barinfo={ ShowBarInfo }></CardElement>
                    <CardElement info={ DateMetais.postrasicao.pb } estilo="transicao" barinfo={ ShowBarInfo }></CardElement>
                    <CardElement info={ DateMetais.postrasicao.bi } estilo="transicao" barinfo={ ShowBarInfo }></CardElement>
                    <CardElement info={ DateMetais.postrasicao.po } estilo="transicao" barinfo={ ShowBarInfo }></CardElement>
                    <CardElement info={ DateNoMetais.hologenio.at } estilo="halo" barinfo={ ShowBarInfo }></CardElement>
                    <CardElement info={ DateNoMetais.gasesnobre.rn } estilo="gasnobre" barinfo={ ShowBarInfo }></CardElement>
                </div>
                <div className="l7">
                    <CardElement info={ DateMetais.alcalinos.fr } estilo="metalAL" barinfo={ ShowBarInfo }></CardElement>
                    <CardElement info={ DateMetais.terrosos.ra } estilo="ALTR" barinfo={ ShowBarInfo }></CardElement>
                    <CardElement info={ DateActi.ac } estilo="acti" barinfo={ ShowBarInfo }></CardElement>
                    <CardElement info={ DateMetais.transicao.rf } estilo="transicao" barinfo={ ShowBarInfo }></CardElement>
                    <CardElement info={ DateMetais.transicao.db } estilo="transicao" barinfo={ ShowBarInfo }></CardElement>
                    <CardElement info={ DateMetais.transicao.sg } estilo="transicao" barinfo={ ShowBarInfo }></CardElement>
                    <CardElement info={ DateMetais.transicao.bh } estilo="transicao" barinfo={ ShowBarInfo }></CardElement>
                    <CardElement info={ DateMetais.transicao.hs } estilo="transicao" barinfo={ ShowBarInfo }></CardElement>
                    <CardElement info={ DateMetais.transicao.mt } estilo="transicao" barinfo={ ShowBarInfo }></CardElement>
                    <CardElement info={ DateMetais.transicao.ds } estilo="transicao" barinfo={ ShowBarInfo }></CardElement>
                    <CardElement info={ DateMetais.transicao.rg } estilo="transicao" barinfo={ ShowBarInfo }></CardElement>
                    <CardElement info={ DateMetais.transicao.cn } estilo="transicao" barinfo={ ShowBarInfo }></CardElement>
                    <CardElement info={ DateMetais.postrasicao.nh } estilo="transicao" barinfo={ ShowBarInfo }></CardElement>
                    <CardElement info={ DateMetais.postrasicao.fl } estilo="transicao" barinfo={ ShowBarInfo }></CardElement>
                    <CardElement info={ DateMetais.postrasicao.mc } estilo="transicao" barinfo={ ShowBarInfo }></CardElement>
                    <CardElement info={ DateMetais.postrasicao.lv } estilo="transicao" barinfo={ ShowBarInfo }></CardElement>
                    <CardElement info={ DateNoMetais.hologenio.ts } estilo="halo" barinfo={ ShowBarInfo }></CardElement>
                    <CardElement info={ DateNoMetais.gasesnobre.og } estilo="gasnobre" barinfo={ ShowBarInfo }></CardElement>
                </div>
            </div>
            <div className="Divisao2">
                <div className="l8">
                    <CardElement info={ null } estilo="none" ></CardElement>
                    <CardElement info={ null } estilo="none" ></CardElement>
                    <CardElement info={ null } estilo="none" ></CardElement>
                    <CardElement info={ Datelanti.la } estilo="lanta" barinfo={ ShowBarInfo }></CardElement>
                    <CardElement info={ Datelanti.ce } estilo="lanta" barinfo={ ShowBarInfo }></CardElement>
                    <CardElement info={ Datelanti.pr } estilo="lanta" barinfo={ ShowBarInfo }></CardElement>
                    <CardElement info={ Datelanti.nd } estilo="lanta" barinfo={ ShowBarInfo }></CardElement>
                    <CardElement info={ Datelanti.pm } estilo="lanta" barinfo={ ShowBarInfo }></CardElement>
                    <CardElement info={ Datelanti.sm } estilo="lanta" barinfo={ ShowBarInfo }></CardElement>
                    <CardElement info={ Datelanti.eu } estilo="lanta" barinfo={ ShowBarInfo }></CardElement>
                    <CardElement info={ Datelanti.gd } estilo="lanta" barinfo={ ShowBarInfo }></CardElement>
                    <CardElement info={ Datelanti.tb } estilo="lanta" barinfo={ ShowBarInfo }></CardElement>
                    <CardElement info={ Datelanti.dy } estilo="lanta" barinfo={ ShowBarInfo }></CardElement>
                    <CardElement info={ Datelanti.ho } estilo="lanta" barinfo={ ShowBarInfo }></CardElement>
                    <CardElement info={ Datelanti.er } estilo="lanta" barinfo={ ShowBarInfo }></CardElement>
                    <CardElement info={ Datelanti.tm } estilo="lanta" barinfo={ ShowBarInfo }></CardElement>
                    <CardElement info={ Datelanti.yb } estilo="lanta" barinfo={ ShowBarInfo }></CardElement>
                    <CardElement info={ Datelanti.lu } estilo="lanta" barinfo={ ShowBarInfo }></CardElement>
                </div>
                <div className="l9">
                    <CardElement info={ null } estilo="none" ></CardElement>
                    <CardElement info={ null } estilo="none" ></CardElement>
                    <CardElement info={ null } estilo="none" ></CardElement>
                    <CardElement info={ DateActi.ac } estilo="acti" barinfo={ ShowBarInfo }></CardElement>
                    <CardElement info={ DateActi.th } estilo="acti" barinfo={ ShowBarInfo }></CardElement>
                    <CardElement info={ DateActi.pa } estilo="acti" barinfo={ ShowBarInfo }></CardElement>
                    <CardElement info={ DateActi.u } estilo="acti" barinfo={ ShowBarInfo }></CardElement>
                    <CardElement info={ DateActi.np } estilo="acti" barinfo={ ShowBarInfo }></CardElement>
                    <CardElement info={ DateActi.pu } estilo="acti" barinfo={ ShowBarInfo }></CardElement>
                    <CardElement info={ DateActi.am } estilo="acti" barinfo={ ShowBarInfo }></CardElement>
                    <CardElement info={ DateActi.cm } estilo="acti" barinfo={ ShowBarInfo }></CardElement>
                    <CardElement info={ DateActi.bk } estilo="acti" barinfo={ ShowBarInfo }></CardElement>
                    <CardElement info={ DateActi.cf } estilo="acti" barinfo={ ShowBarInfo }></CardElement>
                    <CardElement info={ DateActi.es } estilo="acti" barinfo={ ShowBarInfo }></CardElement>
                    <CardElement info={ DateActi.fm } estilo="acti" barinfo={ ShowBarInfo }></CardElement>
                    <CardElement info={ DateActi.md } estilo="acti" barinfo={ ShowBarInfo }></CardElement>
                    <CardElement info={ DateActi.no } estilo="acti" barinfo={ ShowBarInfo }></CardElement>
                    <CardElement info={ DateActi.lr } estilo="acti" barinfo={ ShowBarInfo }></CardElement>
                </div>
            </div>
            <div className="informacoes">
                <h1>Tabela Periódica dos Elementos</h1>
                <div className="infocolor">
                    <ul>
                        <li>Não metal</li>
                        <li>Gás nobre</li>
                        <li>Halogênio</li>
                        <li>Semimetal (Metalóide)</li>
                        <li>Metal de transição</li>
                    </ul>
                    <ul>
                        <li>Metal alcalino</li>
                        <li>Metal alcalino-terroso</li>
                        <li>Outros metais (pós-transição)</li>
                        <li>Lantanídeo</li>
                        <li>Actinídeo</li>
                    </ul>
                </div>
            </div>
            {BarinfoState}
        </div>
    )
}

export default App