import "./App.css";
import React from "react";

import Primeiro from "./components/basicos/Primeiro.jsx";
import ComParametro from "./components/basicos/ComParametro.jsx";
import ComFilhos from "./components/basicos/ComFilhos.jsx";
import Card from "./components/layout/Card.jsx";
import Repeticao from "./components/basicos/Repeticao.jsx";
import Condicional from "./components/basicos/Condicional.jsx";
import CondicionalComIf from "./components/basicos/CondicionalComIf.jsx";
import Pai from "./components/comunicacao/direta/Pai";
import Super from "./components/comunicacao/indireta/Super";
import Input from "./components/form/Input";
import Contador from "./components/contador/Contador";
import Mega from "./components/mega/Mega"

export default (props) => (
  <div className="App">
    <h1>Fundamentos React</h1>
    <div className="Cards">
      <Card titulo="#11-Mega" color="#73503C">
        <Mega qtdeNumero={8}></Mega>
      </Card>
      <Card titulo="#10-Contador" color="#293E6A  ">
        <Contador></Contador>
      </Card>
      <Card titulo="#09-Input" color="#9C0F5F">
        <Input></Input>
      </Card>
      <Card titulo="#08-Comunicação Indireta" color="#000">
        <Super></Super>
      </Card>
      <Card titulo="#07-Comunicação Direta" color="#4298b5">
        <Pai sobrenome="Freitas"></Pai>
      </Card>
      <Card titulo="#06-Condicional v2" color="#FA6900">
        <CondicionalComIf numero={10}></CondicionalComIf>
      </Card>

      <Card titulo="#05-Condicional v1" color="#E94C6F">
        <Condicional numero={11}></Condicional>
      </Card>

      <Card titulo="#04-Repeticao" color="#008BBA">
        <Repeticao></Repeticao>
      </Card>
      <Card titulo="#03-Componente com filhos" color="#D96459">
        <ComFilhos>
          <ul>
            <li>Ana</li>
            <li>Bia</li>
            <li>Carlos</li>
            <li>Daniel</li>
          </ul>
        </ComFilhos>
      </Card>

      <Card titulo="#02-Componente com Parâmetros" color="#FF85CB">
        <ComParametro titulo="Esse é o título" subtitulo="Esse é o subtitulo" />
        <ComParametro titulo="Opa" subtitulo="Epa" />
      </Card>

      <Card titulo="#01-Primeiro Componente" color="#92B06A">
        <Primeiro />
      </Card>
    </div>
  </div>
);
