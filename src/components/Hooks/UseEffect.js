import React, { useEffect } from 'react';
import "./style.css";
 import "./style1.css";
import "./background.css";

const UseEffect = () => {


  const initialdata=0;
  const [MyNumber,setMyNumber]=React.useState(initialdata);
  useEffect(()=>{
    document.title= `Chats(${MyNumber})`;
  });
  return (
    
    <>
    
    
    <div className='center_div'>
{/*     
    <div className="gradient-border"> */}
     <p>{MyNumber}</p>
    
     {/* </div> */}
        <div class="button2" onClick={()=>setMyNumber(MyNumber+1)}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            INCREAMENT
        </div>
       
       
        
    </div>
    
    </>
  )
}

export default UseEffect;