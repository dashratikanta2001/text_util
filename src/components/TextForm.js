import React, {useState} from 'react'


export default function TextForm(props) {
    const [text, setText ] = useState("");

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
    const HandleCopyClick = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const HandleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }
  return (
      <>
    <div className="container" style={{backgroundColor : props.mode==='dark'?'#121212':'white', color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" id="myBox" rows="8" onChange={HandleOnchange} value={text} style={{backgroundColor : props.mode==='dark'?'#121212':'white', color:props.mode==='dark'?'white':'black'}} placeholder="Enter text here"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={HandleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={HandleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={HandleCopyClick}>Copy Text</button>
        <button className="btn btn-primary mx-2" onClick={HandleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-2" onClick={HandleExtraSpaces}>Clear Extra  spaces</button>
    
        <div className="container my-3">
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} minutes read </p>
            <h2 className="my-2">Preview</h2>
            <p>{text.length>0?text:"Enter something in the textBox above to preview here"}</p>
        </div>
    </div>
    </>
  )
}
