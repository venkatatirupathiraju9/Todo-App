

import React from 'react'
import styles from "./todolist.module.css"

function Todolist ({todos,setTodos}) {


    const editHandler =(index) =>{
        const editValues = prompt("", todos[index].title);
        // todos[index] = editValues;
        const data = [...todos]
        data[index].title =editValues
        setTodos(data);
    }
    const deleteHandler =(index) => {
        // console.log("delete")
        const updatedTodos = todos.filter((todo, i) => i !== index);
        setTodos(updatedTodos);
    }

    const handleComplete = (index) =>{
        const data = [...todos]
        data[index].completed = !data[index].completed;
        setTodos(data)
    }

  return (
    <div>
        {
            todos.map((todos , index) =>
                <div key={index}>
                
                        <ul className={styles.ulitems}>
                        <li style={{textDecoration:todos.completed?"line-through":"none",marginRight:"20px" }} >
                        {todos.title} &nbsp; 
                        <button type='button' onClick={()=>editHandler(index)}>Edit</button> &nbsp;
                        <button  onClick={()=>deleteHandler(index)}>Delete</button> &nbsp;
                        <button  onClick={()=>handleComplete(index)}>{todos.completed? "completed": "not completed"}</button>
                        </li>
                        </ul>
                
                        
                </div>

            )
        }
    </div>
  )
}

export default Todolist
