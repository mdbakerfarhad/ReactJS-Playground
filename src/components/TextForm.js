import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("UpperCase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLoClick = () => {
    // console.log("UpperCase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleCopyClick = () => {
    // console.log("Copy was clicked" + text);
    navigator.clipboard.writeText(text)
  };

  const handleClearClick = () => {
    // console.log("UpperCase was clicked" + text);
    let newText = "";
    setText(newText);
  };



  const handleOnChange = (event) => {
    console.log("On Change");
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  return (
    <>
      <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            value={text}
            onChange={handleOnChange}
            rows="14" style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCopyClick}>
          Copy Text
        </button>
      </div>
      <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h2>Text Summery</h2>
        <ul>
          <li>{text.split(" ").length} Words</li>
          <li>{text.length} Characters</li>
        </ul>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
