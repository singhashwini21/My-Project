
import React,{useState} from 'react'

export default function TextForm(props){

    const handleUpClick=()=>{
        // console.log("Uppercase was clicked" + text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("converted to uppercase","success");
    }
    const handleloClick=()=>{
        // console.log("Uppercase was clicked" + text);
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("converted to lowercase","success");
    }
    const handleCopy=()=>{
        var text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("copied to clipboard","success");
    }
    const handleOnChange=(event)=>{
        console.log("On change");
        setText(event.target.value)
    }
    const[text,setText]=useState('Enter text here');
    // text="new text"; //wrong way to change the state
    // setText("new text");  //correct way to change the state
    return(
        <>
        <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
            <h1>{props.heading}</h1>
<div className="mb-3">
  {/* <label for="myBox" class="form-label">Example textarea</label> */}
  <textarea class="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="9"></textarea>
</div>  
   <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
   <button className="btn btn-primary mx-2" onClick={handleloClick}>Convert to LowerCase</button>
   <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
  
     
        </div>
       <div className="container my-3"style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox above to preview"}</p>

      

       </div>
       </>
    )

 
}