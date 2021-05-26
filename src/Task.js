import React from 'react'

export default function Task({setTaskitems,item, taskItems}) {
 const deleteHandle = ()=>{
    setTaskitems(taskItems.filter( (ele)=> ele.id!==item.id) );
 }
 const completeHandle = ()=>{
    setTaskitems(taskItems.map((ele) =>{if(ele.id===item.id){
        return{
            ...ele,completed:!ele.completed,
        };
    }
    return ele;
    } ) 
    );
 }; 
    return (
        <div className="task">
            <h3>{item.text}  <button className="btn-complete" onClick={completeHandle}>a</button><button className="btn-delete" onClick={deleteHandle}>X</button></h3>
        </div>
    )
}
