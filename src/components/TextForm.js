import React, {useState} from 'react'


export default function TextForm(props) {
    const [text, setText ] = useState("");

    const HandleUpClick = () => {
        // console.log("Uppercase clicked");
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("converted to uppercase","success") //Alert
    }
    const HandleLoClick = () => {
        // console.log("Uppercase clicked");
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("converted to lowercase","success")

    }
    const HandleClearClick = () => {
        // console.log("Uppercase clicked");
        let newText = "";
        setText(newText)
        props.showAlert("text cleared","success")

    }
    
    const HandleOnchange = (event) => {
        // console.log("onchange");
        setText(event.target.value)
    }
    const HandleCopyClick = () => {
        var text = document.getElementById("myBox");
        // text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("copied to clipboard","success")

    }
    const HandleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("extra spaces removed","success")

    }
  return (
      <>
    <div className="container" style={{backgroundColor : props.mode==='dark'?'#202124':'white', color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" id="myBox" rows="8" onChange={HandleOnchange} value={text} style={{backgroundColor : props.mode==='dark'?'#303134':'white', color:props.mode==='dark'?'white':'black'}} placeholder="Enter text here"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={HandleUpClick}>Convert to Uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={HandleLoClick}>Convert to Lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={HandleExtraSpaces}>Clear Extra  spaces</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={HandleCopyClick}>Copy Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={HandleClearClick}>Clear Text</button>
    
        <div className="container my-3">
            <h2>Your text summary</h2>
            <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes read </p>
            <h2 className="my-2">Preview</h2>
            <p>{text.length>0?text:"Nothing to preview"}</p>
        </div>
    </div>
    </>
  )
}
