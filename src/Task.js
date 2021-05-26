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
            <h3 style={{ textDecoration: item.completed ? 'line-through' : 'none',textDecorationStyle:'solid'}}>{item.text}  <button className="btn-complete" onClick={completeHandle}><i class="bi bi-pencil-square"></i></button><button className="btn-delete" onClick={deleteHandle}><i class="bi bi-trash"></i></button></h3>
        </div>
    )
}
