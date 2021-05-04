import React, { Component } from "react";
import "./styles.css";

export default class CodeBlock extends Component {

  render() {
    const { codeData } = this.props;
    let  ativacao  = null;

    if (codeData.nr_funcaoativacao == 1) {
        ativacao = "self.linear = nn.Linear()";
      }
    if (codeData.nr_funcaoativacao == 2) {
      ativacao = "self.sigmoid = nn.Sigmoid()";
    }
    if (codeData.nr_funcaoativacao == 3) {
      ativacao = "self.relu = nn.ReLU()";
    }
    if (codeData.nr_funcaoativacao == 4) {
      ativacao = "self.tanh = nn.Tanh()";
    }

    return (
      <div className="code-box">
        <p className="comment"> # Adicionando codificação do arquivo </p>
        <p className="comment"># -*- coding: utf-8 -*-\n</p>
        <br />
        <p className="comment"> # Adicionando biblioteca PyTorch</p>
        <div className="line">
          {" "}
          <p className="blue"> import </p>{" "}
          <p className="yellow">&nbsp; torch </p>{" "}
        </div>
        <div className="line">
          {" "}
          <p className="blue"> from </p> <p className="yellow">&nbsp;torch </p>{" "}
          <p className="blue"> &nbsp;import </p>{" "}
          <p className="yellow"> &nbsp;nn </p>
        </div>
        <br />
        <div className="line">
          {" "}
          <p className="blue"> class </p> &nbsp;
          <p className="yellow">RedeNeural</p>(<p className="yellow">nn</p>
          .Module):{" "}
        </div>
        <div className="line">
          {" "}
          <p className="blue"> &nbsp;&nbsp;&nbsp;def</p>{" "}
          <p className="yellow"> __init__</p>(<p className="yellow">self</p>):{" "}
        </div>
        <div className="line">
          <p className="yellow">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; super </p>(
          <p className="yellow">RedeNeural</p>,{" "}
          <p className="yellow">&nbsp;self</p>).__init__():
        </div>
        <br />
        <div className="line">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <p className="yellow">self</p>.hidden ={" "}
          <p className="yellow">&nbsp;nn</p>.Linear(
          <p className="orange">" + str({codeData.nr_entrada}) + "</p>,{" "}
          <p className="orange">&nbsp;" + str({codeData.nr_escondida}) +</p>
        </div>

        <div className="line">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {ativacao}
        </div>

        <div className="line">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <p className="yellow">self</p>.output ={" "}
          <p className="yellow">&nbsp;nn</p>.Linear(
          <p className="orange">" + str({codeData.nr_escondida}) + "</p>,{" "}
          <p className="orange">&nbsp;" + str({codeData.nr_saida}) +</p>
        </div>
        <br />

        <div className="line">
          &nbsp;&nbsp;&nbsp;
          <p className="blue">def</p> &nbsp;<p className="yellow">forward</p>(
          <p className="yellow">self</p>, <p className="yellow">&nbsp;X</p>):
        </div>

        <div className="line">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <p className="yellow">hidden</p>&nbsp; =&nbsp;{" "}
          <p className="yellow">self</p>.relu(<p className="yellow">self</p>
          .hidden(<p className="yellow">X</p>))
        </div>

        <div className="line">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <p className="yellow">output</p> &nbsp; =&nbsp;{" "}
          <p className="yellow">self</p>.output(<p className="yellow">hidden</p>
          )
        </div>

        <br />

        <div className="line">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <p className="blue">return</p> <p class="yellow">&nbsp;output</p>
        </div>

        <br />

        <div className="line">
          &nbsp;&nbsp;&nbsp;
          <p className="blue">def</p> <p class="yellow">&nbsp;ajuda</p>
        </div>

        <div className="line">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <p className="yellow">print</p>(
          <p className="orange">
            'Para realizar a predicao da rede neural artificial basta executar a
            chamada da
          </p>
        </div>

        <div className="line">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <p className="orange">
            {" "}
            rede neural passa o tensor como parametro. Ex: predicao =
            minha_rede(tensor)'
          </p>
          )
        </div>
      </div>
    );
  }
}
