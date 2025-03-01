import React from 'react'
import { FaTrashAlt } from "react-icons/fa";

const ItemsList = ({items, setItems, handleCheck, clickDelete}) => {
  return (
          <ul>
          {items.map((item) => (
            <li className="item">
              <input 
                type='checkbox' 
                onChange={() => handleCheck (item.id)}
                checked= {item.checked} />
              <label 
                style={(item.checked ? {textDecoration: "line-through"} : null)}
                onDoubleClick={() => handleCheck (item.id)}>{item.item}
              </label>
              <FaTrashAlt 
              role='button'
              tabIndex={0}
              onClick={() => clickDelete (item.id)}/>
            </li>
          ))}
        </ul>
        )
}

export default ItemsList