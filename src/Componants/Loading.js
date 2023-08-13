import React, { Component } from 'react';
import loading from './Loading.gif';
export default class Loading extends Component {
  render() {
    return (
      <div className="text-center">
        <img width="100px" src={loading} alt="loading" />
      </div>
    );
  }
}
