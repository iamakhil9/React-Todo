import React from 'react'
import Task from './Task'
export default function Tasklist({taskItems,setTaskitems}) {
    return (
        <div className="tasklist">
            <ul>
           {taskItems.length ?  taskItems.map((item)=> {return(<Task  key={item.id}setTaskitems={setTaskitems} taskItems={taskItems} item={item}/> )}): null }
           </ul>
        </div>
    )
}
