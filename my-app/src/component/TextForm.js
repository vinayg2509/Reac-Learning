import {useState} from 'react'


export default function TextForm(props) {


const convertUpper=()=>
{
    let newText=text.toUpperCase()
    setText(newText)
}

const addText=(event)=>{
    setText(event.target.value)
}

const [text,setText]=useState("Enter your text")

return (
<div>
<div className="mb-3">
<h1>{props.heading} </h1>
<label htmlFor="mybox" className="form-label">
   {props.label}
</label> 
<textarea className="form-control" value={text} onChange={addText} id="mybox" rows="8" ></textarea>
</div>
<button className="btn btn-primary" onClick={convertUpper}>Convert to Upper Case</button>
</div>
);
}
