import React, { useState } from "react";

export default function TextForm(props) {
  const HandleUpClick = () => {
    console.log("UpperCase Was Clicked" + Text);
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("Text Converted To UpperCase","success")
  };
  const HandlelowClick = () => {
    console.log("LowerCase Was Clicked" + Text);
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("Text Converted To LowerCase","success")
  };
  const ClearClick = () => {
    console.log("Clear click was clicked" + Text);
    let newtext = "";
    setText(newtext);
    props.showAlert("Text Cleared","success")

  };
  const handleOnChnage = (event) => {
    console.log("UpperCase On Change");
    setText(event.target.value);
  };
  const handleCopy = () => {
    console.log("Iam Copy Button");
    var text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert(" Text Copied To Clipboard","success")

  };
  const handleExtraSpace = () => {
    console.log("Removing unwanted space");
    let newtext = text.split(/[ ]+/);
    setText(newtext.join(" "));
    props.showAlert("Extra Spaces Removed","success")

  };
  const [text, setText] = useState("");
  // setText("enter new text");
  return (
    <>
      <div className="container"  style={{color: props.mode==='dark'?'white':'#042743'}} >
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea
          style={{backgroundColor: props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#042743'}}
            className="form-control"
            value={text}
            onChange={handleOnChnage}
            id="mybox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={HandleUpClick}>
          Convert To UpperCase
        </button>
        <button className="btn btn-primary mx-1" onClick={HandlelowClick}>
          Convert To LowerCase
        </button>
        <button className="btn btn-primary mx-1" onClick={ClearClick}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpace}>
          Remove Extra Space
        </button>
      </div>
      <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter someting in the above textbox to preview it here"}</p>
      </div>
    </>
  );
}
