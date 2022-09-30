import React, {useState} from 'react';
import PropTypes from 'prop-types'


export default function TextForm(){
    let [text,setText] = useState("Enter Text Here");
    const handleOnChange = (event)=>{
        console.log("On Change Handler")
        setText(event.target.value);
    }
    
    const btnUpperClick = ()=>{
        console.log("Button Clicked");
        //let upperText = text.toUpperCase
        let el = text.toUpperCase();
        document.getElementById('output').value=el;
    }

    let btnLowerClick = ()=>{
        console.log("Lower case btn clicked");
        let el = text.toLowerCase();
        document.getElementById('output').value=el;
    }
    let btnWords= ()=>{
        let letters = text.split(" ").length;
        document.getElementById('output').value=letters;
    }
    let btnLength=()=>{
        let lengthOf = text.length;
        document.getElementById("output").value=lengthOf;
    }
    let btnBackSpace=()=>{
        setText(text.substring(0,text.length-1));
    }
    let btnClear=()=>{
        setText("");
    }
    return (
        <>  
            <input  className="form-control" type="text" value={text} onChange={handleOnChange} ></input>
            <div id="btnWrapper">
                <button type="button" className="btn btn-outline-primary" onClick={btnUpperClick}>Capital</button>
                <button type="button" className="btn btn-outline-primary" onClick={btnLowerClick}>Small</button>
                <button type="button" className="btn btn-outline-primary" onClick={btnWords}>Words</button>
                <button type="button" className="btn btn-outline-primary" onClick={btnLength}>Length</button>
                <button type="button" className="btn btn-outline-primary" onClick={btnBackSpace}>←</button>
                <button type="button" className="btn btn-outline-primary" onClick={btnClear}>Clear</button>
                <button type="button" className="btn btn-outline-primary">Primary</button>
            </div>
            <input id='output' className="form-control" type="text" ></input>
                    
        </>
    );
}
