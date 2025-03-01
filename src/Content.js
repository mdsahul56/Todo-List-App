import React from 'react'
import ItemsList from "./ItemsList";


const Content = ({items, setItems, handleCheck, clickDelete}) => {

    //Concept -1
    /*function handleNameChange(){
        const name = ["grow","give","earn"];
        const int = Math.floor(Math.random()*3);
        setName(name[int]) // while using this we can change
      }

    const handleClick = (name) => {
      console.log(`Thanks for the support ${name}`)
    }

    function name1() {
      return console.log("Hello")
    }

    const [count, setCount] = useState(99) // 99 is deafault value. count =99. setCount will be changed
    //const [name, setName] = useState(()=>name1()) // instead of name1(). we should use like this to avoid to call the function automatically for all time when we intract app
    const [name, setName] = useState("earn") //earn is default value

    function incrementNum() {
      setCount(prevCount => prevCount+1) //prevCount is just a var
    }
    function decrementNum() {
      setCount(prevCount => prevCount-1)
    } */
      
  return (
      <main>     
        { items.length ? // by using length, we can get the result when the list is empty : 
        (
          <ItemsList 
            items = {items}
            key={items.id}
            setItems = {setItems}
            handleCheck = {handleCheck}
            clickDelete = {clickDelete}
          />
        ) :
        (
          <p><b>Your list is empty</b></p>
        )
        }  
      </main> 
  )
}

{/*Concept 1*/}
        {/*<p>Let's <b>{name}</b> Money</p>
        <button onClick={handleNameChange}>Subscribe</button>
        <button onClick={() => handleClick("Sahul")}>Submit</button> //We could not call the function xxx() like this. Because the the function executed itself before click the button
        <button onDoubleClick={() => handleClick("Sahul")}>Double Click</button>

        <button onClick={decrementNum}>-</button>
        <span>{count}</span>
        <button onClick={incrementNum}>+</button> */}

export default Content