import React, { useState } from 'react'


export default function TextForm(props) {
    const upHandleClick=()=>{
        let newText=text.toUpperCase();
        setText(newText)
    }
    const lowHandleClick=()=>{
        let newText=text.toLowerCase();
        setText(newText)
    }
    const handleOnChange=(event)=>{
        console.log("Event Triggered")
        setText(event.target.value)
    }
    const clearText=()=>{
        setText("")
    }
    const copyToClip=()=>{
        navigator.clipboard.writeText(text);
    }
    const removeExtraspaces=()=>
    {
        let newText=text.split(/[ ]+/)
        setText(newText.join(" "))
    }
    const count = ()=>{
        if (text.length>0){
        return text.trim().split(/[ ]+/).length;
        }
        else{
        return 0;
        }
        }
    const [text,setText]=useState("Enter Text"); 
  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'#042743'}}>
    <h1>{props.heading}</h1>
        <div className="mb-3">

  <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
</div>
<button className="btn-primary mx-2" onClick={upHandleClick}>Convert to UpperCase</button>
<button className="btn-primary mx-2" onClick={lowHandleClick}>Convert to LowerCase</button>
<button className="btn-primary mx-2" onClick={clearText}>Clear the Text</button>
<button className="btn-primary mx-2" onClick={copyToClip}>Copy to Clipboard</button>
<button className="btn-primary mx-2" onClick={removeExtraspaces}>Remove Extra Spaces</button>
<div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
    <h2><u>Text Summary</u></h2>
    <p><b>Characters</b>: {text.length} <br></br><b>Words</b>: {count()} <br></br>  </p>
    <p><b>{0.008*(count())}</b> Minutes Read</p>
    <p>{text}</p>
</div>
</div>
</>
  );
}

