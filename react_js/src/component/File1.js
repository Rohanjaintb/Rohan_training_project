import React ,{useState} from 'react';

function Form(){
    const handel=()=>{
        
        let news =text.toUpperCase();
        setText(news)

    }
    const changer=(event)=>{
        setText(event.target.value)
    }
    const Reset=()=>{
        let items=text.replace("apple","orange")
        setText(items)
    }
    const[text,setText]=useState("list of cars");
    
    return(
        <>
<div>
    <textarea name="text" id="rohan" value={text} onChange={changer} cols="30" rows="10"></textarea>
    <br></br>
    <button className="buton mx-3"  type="button" onClick={handel}>Submit</button>
    <button className='hhaj mx-3' onClick={Reset}>Reset</button>
</div>
<div className="container">
    <h1>To Count Number of Words and Character</h1>
    <p>{text.split(" ").length} words and {text.length} character</p>
</div>
</>
);
}
export default Form;