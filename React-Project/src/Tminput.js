import React, { useState} from './react';

function Tminput(){
const[data,setData]= useState(null);

function getInput(val){
        console.log(val.target.value)
setData(val.target.value);
}
  return(
<>
<input type="text"onChange={getInput}/>
<h1>Welcome to Webpage:{data}</h1>
</>
    )
}
export default Tminput;