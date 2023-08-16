import React from 'react';

export default function Usercard(props) {
  let { title, description, image, visit, author, publishTime, source } = props;
  return (
    <div className="card my-3">
      <div className="card">
        <div
          style={{ display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: 0 }}
        >
          <span className="badge rounded-pill bg-danger">{source}</span>
        </div>
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
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
    </div>
  );
}
