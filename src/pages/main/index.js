import React, { Component } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import "./styles.css";

export default class Main extends Component {
  state = {
    projects: [],
    isOpen: false,
    tx_nome: "",
  };

  openModal() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  closeModal() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  async componentDidMount() {
    const response = await api.get(`/projetos`);
    //console.log(response);
    this.setState({ projects: response.data });
  }

  removeProject(id) {
    const removeProject = api.delete(`/projetos/${id}`, { id }).then((res) => {
      console.log(removeProject);
      console.log(removeProject.data);
    });
    setTimeout(3000);
    window.location.reload();
  }

  handleChangeName = (event) => {
    this.setState({ tx_nome: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { tx_nome } = this.state;

    const response = api.post(`projetos`, { tx_nome }).then((res) => {
      console.log(res);
      console.log(res.data);
      alert(res.data.message);
      setTimeout(3000);
      window.location.reload();
    });
  };

  render() {
    const { projects } = this.state;
    if (!projects) return null;

    return (
      <div>
        <div className="items">
          <a className="modal-button" href="#" onClick={() => this.openModal()}>
            <div className="item-create">
              <div className="icon">
                <FontAwesomeIcon icon={faPlus} />
              </div>
            </div>
          </a>

          {projects.map((project) => (
            <div className="item">
              <article key={project.id}>
                <div className="project-title"> {project.tx_nome} </div>
              </article>
              <div className="button-line">
                <Link to={`/alterar/${project.id}`}>
                  {" "}
                  <button>Editar</button>{" "}
                </Link>
                <Link to={`/visualizar/${project.id}`}>
                  {" "}
                  <button>Visualizar</button>{" "}
                </Link>
              </div>
              <div className="button-delete">
                <button onClick={() => this.removeProject(project.id)}>
                  Excluir
                </button>
              </div>
            </div>
          ))}
        </div>
        <div
          className={!this.state.isOpen ? "create-modal" : "create-modal-show"}
        >
          <div className="close-icon">
            <a onClick={() => this.closeModal()}>
              <FontAwesomeIcon icon={faTimes} />
            </a>
          </div>
          <h2>Criar um novo projeto!</h2>

          <form onSubmit={this.handleSubmit}>
            <label>
              Nome do projeto:
              <input
                type="text"
                name="categoryName"
                onChange={this.handleChangeName}
                placeholder="Nome do projeto"
                required
              />
            </label>
            <button type="submit" className="button-submit">
              Criar
            </button>
          </form>
        </div>
      </div>
    );
  }
}
