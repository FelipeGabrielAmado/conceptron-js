import React, { Component } from "react";
import CodeBlock from "../../components/CodeBlock";

import api from "../../services/api";

export default class ViewProject extends Component {
  state = {
    projects: [],
  };

  async componentDidMount() {
    const { id } = this.props.match.params;
    const response = await api.get(`/projetos/${id}`);
    console.log(response);
    this.setState({ projects: response.data });
  }

  render() {
    const { projects } = this.state;

    return (
      <div>
        {projects.map((project) => (
          <CodeBlock codeData={project} />
        ))}
      </div>
    );
  }
}
