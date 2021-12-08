import React , {useState,useEffect} from 'react';
      

function UseEffect(){
        const [count,setCount] = useState(0);
        const [count1,setCount1] = useState(50);

        const handleIncrement=()=>{
                setCount(count+1);
        }

        const handleDecrement=()=>{
                setCount1(count1-1);
        } 
        useEffect(()=>{

                console.log("use Effect called");
        } ,[count,count1]);
        return (
                              <React.Fragment>
                        <hi>count up:{count}</hi>

                        <button type="button" onClick={handleIncrement}>
                        Increment
                        </button>

                                  <hi>count Down:{count1}</hi>

<button type="button" onClick={handleDecrement}>
Decrement
</button>

</React.Fragment>

 ) }

        
export default UseEffect;