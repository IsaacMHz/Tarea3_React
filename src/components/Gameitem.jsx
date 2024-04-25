import React from 'react'
import { IoClose } from "react-icons/io5";
import { FaCheck } from "react-icons/fa";


const Gameitem = (props) => {
  return (
    <li className={`GameItem ${props.completed && "GameItem--active"}`}>
        <span 
        className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
        onClick={props.onComplete}
        >
          <FaCheck />
          
        </span>
        <p className={`Item-p ${props.completed && "Item-p--complete" }`}>{props.text}</p>
        <span 
        className='Icon Icon-delete'
        onClick={props.onDelete}
        >
          
          <IoClose />

        </span>
    </li>
  )
}

export default Gameitem