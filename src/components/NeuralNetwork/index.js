import React, { Component } from "react";
import NNVisualizer from "neural-network-visualizer";

export default class NeuralNetwork extends Component {
  async componentDidMount() {
    const root = document.getElementById("neural-network-id");

    while (root.firstChild) {
      root.removeChild(root.firstChild);
    }

    let entradas = {
      units: this.props.networkData.nr_entrada,
      stroke: "black",
      fill: "lightblue",
    };

    let escondidas = {
      units: this.props.networkData.nr_escondida,
      stroke: "black",
      fill: "lightgreen",
    };

    const nrCamadasEscondidas = this.props.networkData.nr_camadas;
    let escondidasObject = [];

    function funcaoEscondida(nrCamadasEscondidas, escondidas) {
      for (var i = 0; i < nrCamadasEscondidas; i++) {
        escondidasObject.push(escondidas);
      }
    }

    funcaoEscondida(nrCamadasEscondidas, escondidas);
    console.log(escondidasObject);
    console.log(typeof escondidasObject);


    let saidas = {
      units: this.props.networkData.nr_saida,
      stroke: "black",
      fill: "lightyellow",
    };

    new NNVisualizer(root, {
      width: 800,
      height: 500,
      network: {
        vertical: false,
        radius: 30,
        strokeWidth: 1,
        layers: [
          entradas,
          ...escondidasObject,
          saidas,
        ],
      },
    });
  }

  render() {
    return <div id="neural-network-id" className="neural-network"></div>;
  }
}
