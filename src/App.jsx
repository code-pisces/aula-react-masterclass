import "./App.css";
import React from "react";

import Primeiro from "./components/Primeiro.jsx";
import ComParametro from "./components/ComParametro.jsx";
import ComFilhos from "./components/ComFilhos.jsx";
import Card from "./components/layout/Card.jsx";
import Repeticao from './components/Repeticao.jsx';
import Condicional from './components/Condicional.jsx';
import CondicionalComIf from './components/CondicionalComIf.jsx';

export default (props) => (
  <div className="App">
    <Card titulo="#06-Condicional v2">
        <CondicionalComIf numero={10}></CondicionalComIf>
    </Card>

    <Card titulo="#05-Condicional v1">
    <Condicional numero={11}></Condicional>
    </Card>

    <Card titulo="#04-Repeticao">
        <Repeticao></Repeticao>
    </Card>
    <Card titulo="#03-Componente com filhos">
    <ComFilhos>
      <ul>
        <li>Ana</li>
        <li>Bia</li>
        <li>Carlos</li>
        <li>Daniel</li>
      </ul>
    </ComFilhos>
    </Card>

    <Card titulo="#02-Componente com Parâmetros">
    <ComParametro
      titulo="Esse é o título"
      subtitulo="Esse é o subtitulo"
    />
    <ComParametro titulo="Opa" subtitulo="Epa" />
    </Card>

    <Card titulo="#01-Primeiro Componente">
      <Primeiro />
    </Card>
  </div>
);
