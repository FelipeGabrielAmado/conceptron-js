import React, { Component } from "react";
import api from "../../services/api";
import NeuralNetwork from "../../components/NeuralNetwork";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCodeBranch } from "@fortawesome/free-solid-svg-icons";

import "./styles.css";

export default class AlterProject extends Component {
  state = {
    projects: [],
    tx_nome: "",
    nr_camadas: "",
    nr_entrada: "",
    nr_escondida: "",
    nr_saida: "",
    nr_funcaoativacao: "",
    fl_softmax: "",
  };

  handlenr_entrada = (event) => {
    this.setState({ nr_entrada: event.target.value });
  };

  handlenr_escondida = (event) => {
    this.setState({ nr_escondida: event.target.value });
  };

  handlenr_saida = (event) => {
    this.setState({ nr_saida: event.target.value });
  };

  handlenr_funcaoativacao = (event) => {
    this.setState({ nr_funcaoativacao: event.target.value });
  };

  handlefl_softmax = (event) => {
    this.setState({ fl_softmax: event.target.checked });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { id } = this.props.match.params;
    const {
      nr_entrada,
      nr_escondida,
      nr_saida,
      nr_funcaoativacao,
      fl_softmax,
    } = this.state;

    const response = api
      .put(`/projetos/${id}`, {
        nr_entrada,
        nr_escondida,
        nr_saida,
        nr_funcaoativacao,
        fl_softmax,
      })
      .then((res) => {
        console.log(res);
        console.log(res.data);
        alert(res.data);
      });
    window.location.reload();
  };

  async componentDidMount() {
    const { id } = this.props.match.params;
    const response = await api.get(`/projetos/${id}`);
    this.setState({ projects: response.data });
  }

  render() {
    const { projects } = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit} className="menu-form">
          {projects.map((project) => (
            <div className="alter-menu">
              <div className="menu-item">
                <div className="x-icon">X</div>
                Neurônios de entrada
                <input
                  className="menu-input"
                  type="text"
                  name="numeroentradas"
                  onChange={this.handlenr_entrada}
                  placeholder={project.nr_entrada}
                />
              </div>
              <div className="menu-item">
                <div className="x-icon">
                  <FontAwesomeIcon icon={faCodeBranch} />
                </div>
                Neurônios escondidos
                <input
                  className="menu-input"
                  type="text"
                  name="numeroescondidas"
                  onChange={this.handlenr_escondida}
                  placeholder={project.nr_escondida}
                />
              </div>

              <div className="menu-item">
                <div className="x-icon">X</div>
                Neurônios de saída
                <input
                  className="menu-input"
                  type="text"
                  name="numerosaida"
                  onChange={this.handlenr_saida}
                  placeholder={project.nr_saida}
                />
              </div>
              <div className="menu-divider"> | </div>
              <div className="selector">
                <select
                  name="activation"
                  id="activation"
                  onChange={this.handlenr_funcaoativacao}
                >
                  <option value="" disabled selected hidden> Função de ativação </option>
                  <option value="1">Linear</option>
                  <option value="2">Sigmoide</option>
                  <option value="3">ReLu</option>
                  <option value="4">Tangente Hiperbólica</option>
                </select>
              </div>
              <div className="checkbox">
                <input
                  type="checkbox"
                  id="softmax"
                  name="softmax"
                  onChange={this.handlefl_softmax}
                />
                <label className="softmax-checkbox" for="softmax">
                  SoftMax
                </label>
              </div>
              <button className="save-button" type="submit">
                Salvar
              </button>
              <Link to={`/visualizar/${project.id}`}>
                {" "}
                <button className="show-button">Script</button>{" "}
              </Link>
            </div>
          ))}
        </form>

        {projects.map((project) => (
          <NeuralNetwork networkData={project} />
        ))}
      </div>
    );
  }
}
