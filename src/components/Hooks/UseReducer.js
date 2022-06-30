import React, { useReducer } from 'react';
import "./style.css";
 import "./style1.css";
import "./background.css";


const reducer=(state,action)=>{
if(action.type==="INCREAMENT"){
   state = state + 1;
}
 if(state>0&&action.type==="DECREAMENT")
{
    state = state - 1;
}
 if(action.type==="RESET")
{
    state=state*0;
}
return state;
};
const UseReducer = () => {

    
//   const initialdata=0;
//   const [MyNumber,setMyNumber]=React.usestate(initialdata);
const initialData=0;
const[state,dispatch]=useReducer(reducer,initialData);
  return (
    <>
    <div className='context'>
       
       </div>
   
   
       <div className='context'>
       
       </div>
   
   
   <div className='area' >
               <ul class="circles">
                       <li></li>
                       <li></li>
                       <li></li>
                       <li></li>
                       <li></li>
                       <li></li>
                       <li></li>
                       <li></li>
                       <li></li>
                       <li></li>
               </ul>
       </div >
      
    
    <div className='center_div'>
    
    <div className="gradient-border">
     <p>{state}</p>
    
     </div>
        <div class="button2" onClick={()=>dispatch({type:"INCREAMENT"})}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            INCREAMENT
        </div>
        <div class="button2" onClick={()=>dispatch({type:"DECREAMENT"})}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            DECREAMENT
        </div>
        <div class="button2" onClick={()=>dispatch({type:"RESET"})}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            RESET
        </div>
        
    </div>
    </>
  )
}

export default UseReducer;