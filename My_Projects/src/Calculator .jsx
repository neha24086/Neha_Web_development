
import React,{useState} from 'react';


function Calculator () {
       
      const [value,setValue] = useState("");

const update = (e) => {
        let Val = e. target.value
       
                setValue(value+Val)           
        
     
}
const calculate = () =>{
   
        setValue (eval(value))
}
const neha= () =>{
        setValue("")
}
        return(
            <div className="Calculator">
                         
                <h1 style={{textAlign:"center"}}>Calculator</h1>
               <div style={{display: "flex",flexDirection:"column", background:"dark"}}>
    
                       <input style={{fontFamily:"sans-serif", height:"35px",fontSize:"1rem",}} type="text" value={value}/>
                <div > 
<div className="betu">
        <div >
                <button className="btn1" onClick={update} value="1">1</button>
                  <button className="btn1" onClick={update} value="2">2</button>
                  <button className="btn1" onClick={update} value="3" >3</button>
                  <button className="btn1" onClick={update} value="4">4</button></div>
        </div> 

        <div >              
                 <button className="btn1" onClick={update}  value="5">5</button>
                  <button className="btn1" onClick={update} value="6" >6</button>
                  <button className="btn1" onClick={update}  value="7">7</button>
                  <button className="btn1" onClick={update}  value="8">8</button></div>

        <div> 
                 <button className="btn1" onClick={update} value="9" >9</button>
                  <button className="btn1" onClick={update} value="0" >0</button>
                  <button className="btn1" onClick={update} value="-" >-</button>
                  <button className="btn1" onClick={update} value="+" >+</button>
        </div>
        <div>
                 
                  <button className="btn1" onClick={calculate}  >=</button>
                  <button className="btn1" onClick={update} value="/" >/</button>
                  <button className="btn1" onClick={update} value="*" >*</button>
                  <button className="btn1" onClick={neha} value="C">C</button>
        </div>                   

        </div>              
</div>
</div>
            
        );
    }

export default Calculator;