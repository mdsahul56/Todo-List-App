import React from 'react'
import { FaPlus } from 'react-icons/fa'
import { useRef } from 'react'
import { useState } from 'react'

const AddItem = ({newItem, setNewItem, handleSubmit}) => {

  const inputRef = useRef() // useref mostly used for once the button action done the focus should be in form

  return (
    <form className='addForm' onSubmit={handleSubmit}>
        <label htmlFor="addItem">Add Item</label>
        <input
            autoFocus
            ref = {inputRef}
            id = "addItem"
            type='text'
            placeholder='Add Item'
            required
            value = {newItem} //put the value of the new item
            onChange={(e) => setNewItem(e.target.value)} // the value will store in setnewItem when the event happens
        />

        <button
            type = 'submit'
            aria-label='Add Item'
            onClick = {() => inputRef.current.focus()} // by using this we can achieve it
        >
            <FaPlus />
        </button>
    </form>
        
    
  )
}

export default AddItem