import React from 'react';
import Tasklist from './Tasklist';

export default function Inputbox({setTaskitems,taskitems,item,setItem}) {
   
    
    const log = ()=>{
        console.log(item);
        setTaskitems((prevState)=>[...prevState,{text:item,id:Math.random()*100,completed: false}]);

        setItem("");
        // console.log(taskitems);
    }
    return (
        <div className="warpper">
            <div className="input-form">
            <input type="text" onChange={(e)=>{setItem(e.target.value)}}  value={item}/>
            <button onClick={log}>ADD</button>
            </div>
           {taskitems.length ? <Tasklist setTaskitems={setTaskitems} taskItems={taskitems}/>: null}
        </div>
    )
}
