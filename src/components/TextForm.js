import React, {useState} from 'react'


export default function TextForm(props) {

    const HandleUpClick = () => {
        // console.log("Uppercase clicked");
        let newText = text.toUpperCase();
        setText(newText)
    }
    const HandleLoClick = () => {
        // console.log("Uppercase clicked");
        let newText = text.toLowerCase();
        setText(newText)
    }
    const HandleClearClick = () => {
        // console.log("Uppercase clicked");
        let newText = "";
        setText(newText)
    }
    
    const HandleOnchange = (event) => {
        // console.log("onchange");
        setText(event.target.value)
    }
    const [text, setText ] = useState("");
  return (
      <>
    <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" id="myBox" rows="8" onChange={HandleOnchange} value={text} placeholder="Enter text here"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={HandleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={HandleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={HandleClearClick}>Clear Text</button>
    </div>
    <div className="container my-3">
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} minutes read </p>
        <h2 className="my-2">Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
