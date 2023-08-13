import React, { useState } from 'react';

export default function Textchange() {
  const [text, setText] = useState('Enter Text');

  const TextToUpperCase = () => {
    const newTxt = text.toUpperCase();
    setText(newTxt);
  };
  const TextToLowerCase = () => {
    const newTxt = text.toLowerCase();
    setText(newTxt);
  };
  const inputText = (e) => {
    setText(e.target.value);
  };
  return (
    <>
      <div className="container">
        <div className="mb-3 my-3">
          <label htmlFor="exampleInputEmail1" value className="form-label">
            Enter Text Here
          </label>
          <input
            className="form-control"
            value={text}
            id="exampleInputEmail1"
            onChange={inputText}
          />
        </div>
        <button className="btn btn-primary mx-3" onClick={TextToUpperCase}>
          Convert text to UppperCase
        </button>
        <button className="btn btn-primary mx-3" onClick={TextToLowerCase}>
          Convert text to LowerCase
        </button>
      </div>
      <div className="container my-3">
        <h2>Summary of Text</h2>
        <p className="my-2">
          {text.split(' ').length} words {text.length} characters
        </p>
      </div>
    </>
  );
}
