import React, { Component } from 'react';
import './Project.css';
import PropTypes from 'prop-types';

class Project extends Component {
  render() {
    let image = null;
    if (this.props.image) {
      image = (
        <div className="imageBox">
          <img src={this.props.image} alt={this.props.name} />
        </div>
      )
    }

    const contentBoxClass = this.props.image ? ["contentBox", "hasImage"] : ["contentBox"];

    const codeLink = this.props.codeLink ?
      <a href={this.props.codeLink} className="codeLink" target="_blank" rel="noopener noreferrer">
        (Link to code)
      </a>
      : null;
    const liveLink = this.props.liveLink ?
      <a href={this.props.liveLink} className="liveLink" target="_blank" rel="noopener noreferrer">
        (See it live)
      </a>
      : null;

    return (
      <div className="project">
        <div className={contentBoxClass.join(" ")}>
          <h3 className="name">{this.props.name}</h3>
          <p className="languages">{this.props.languages}</p>
          <div className="links">
            {codeLink} {liveLink}
          </div>
          <div className="description">{this.props.description}</div>
        </div>
        {image}
        <div className="clear"/>
      </div>
    );
  }
};

Project.propTypes = {
  name: PropTypes.string.isRequired,
  codeLink: PropTypes.string,
  liveLink: PropTypes.string,
  languages: PropTypes.string.isRequired,
  description: PropTypes.object.isRequired,
  image: PropTypes.string
}

export default Project;
