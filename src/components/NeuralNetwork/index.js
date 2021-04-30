import React, { Component } from "react";
import NNVisualizer from "neural-network-visualizer";

export default class NeuralNetwork extends Component {
  async componentDidMount() {
    const root = document.getElementById("neural-network-id");

    while (root.firstChild) {
      root.removeChild(root.firstChild);
    }

    console.log(this.props.networkData.nr_escondida);

    new NNVisualizer(root, {
      width: 800,
      height: 500,
      network: {
        vertical: false,
        layers: [
          {
            units: this.props.networkData.nr_entrada,
            strokeWidth: 1,
            radius: 30,
            stroke: "black",
            fill: "lightblue",
          },
          {
            units: this.props.networkData.nr_escondida,
            strokeWidth: 1,
            radius: 30,
            stroke: "black",
            fill: "lightgreen",
          },
          {
            units: this.props.networkData.nr_saida,
            strokeWidth: 1,
            radius: 30,
            stroke: "black",
            fill: "lightyellow",
          },
        ],
      },
    });
  }

  render() {
    return <div id="neural-network-id" className="neural-network"></div>;
  }
}
