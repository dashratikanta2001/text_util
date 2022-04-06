import React from "react"
export default function About(props) {
    let myStyle = {
        color : props.mode ==='dark'?'white':'black',
        backgroundColor: props.mode ==='dark'?'rgb(48 50 54)':'white',
    }
  return (
    <div className='container' >
        <h1 className='my-3'style={{color : props.mode ==='dark'?'white':'black'}}>About Us</h1>
        <div className="accordion" id="accordionPanelsStayOpenExample" style={myStyle}>
            <div className="accordion-item" style={{color : props.mode ==='dark'?'white':'black',
        backgroundColor: props.mode ==='dark'?'white':''}}>
                <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                   <strong>Analyze your text</strong>
                </button>
                </h2>
                <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                <div className="accordion-body" style={myStyle}>
                    Textutils gives you a way to analyze your text quality and efficiently. Be it word count, character count etc.
                </div>
                </div>
            </div>
            <div className="accordion-item" style={{color : props.mode ==='dark'?'white':'black',
        backgroundColor: props.mode ==='dark'?'white':''}}>
                <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                    <strong>Free to use</strong>
                </button>
                </h2>
                <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                <div className="accordion-body" style={myStyle}>
                    Textutils is a free character counter tool that provides instant character count & word count statistics for a given text. Textutils reports the number o fwords and characters. Thus it is suitable for writing text with word/ character limit.
                </div>
                </div>
            </div>
            <div className="accordion-item" style={{color : props.mode ==='dark'?'white':'black',
        backgroundColor: props.mode ==='dark'?'white':''}}>
                <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                    <strong>Browser compatible</strong>
                </button>
                </h2>
                <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                <div className="accordion-body" style={myStyle}>
                    This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blogs, books, excel document, pdf document, essays etc.
                </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}
