import React, { Component } from 'react';

export default class Usercard extends Component {
  render() {
    let { title, description, image, visit, author, publishTime, source } = this.props;
    return (
      <div className="card my-3">
        <div className="card-body">
          <span
            style={{ zIndex: '1', left: '90%' }}
            className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
          >
            {source}
          </span>
          <img src={image} className="card-img-top" alt="..." />
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <small className="text-body-secondary">
              Publish by {author ? author : 'unknown'} at {new Date(publishTime).toUTCString()}
            </small>
          </p>
          <a href={visit} rel="noreferrer" target="_blank" className="btn btn-dark">
            Go to News
          </a>
        </div>
      </div>
    );
  }
}
