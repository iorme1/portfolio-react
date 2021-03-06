import React, { Component } from 'react';


class Project extends Component {
  render() {
    const {title, github, site, src, alt, desc } = this.props;
    const liveSite = this.props.site ? "Live Website" : "Not Live";
    const btnType = this.props.site ? "btn btn-warning m-2" : "btn btn-danger m-2";

    return (
      <div className="col-md-4 p-1 project-card-container">
        <div className="card project-card"
          data-aos="flip-right"
          data-aos-duration="1200"
        >
          <img className="card-img-top" src={src} alt={alt}/>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{desc}</p>
            <a href={github} target="_blank" className="btn btn-primary m-2">View Github</a>
            <a href={site} target="_blank" className={btnType}>{liveSite}</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Project;
