import AddItem from "./AddItem";
import SearchItem from "./SearchItem";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import apiRequest from "./apiRequest";
import { useState, useEffect} from 'react';

function App() {
  const API_URL = 'http://localhost:3500/items' // strors a url in variable is good practice for future use
  const [items, setItems] = useState([]) // we give here an empty array. beacause if no todolist file in local storage. it uses an empty array to avoid the app crash
  const [newItem, setNewItem] = useState('') //to create new usestate to work on the new add item functionalities
  const [search, setSearch] = useState('')
  const [fetchError, setFetchError] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => { // basically useeffect works when ever we do changes in the page. So it may affect the speed of the application
    //JSON.parse( //insead of giving the default values. We directly just input the new
      //localStorage.getItem("todo_list"))

    const fetchItems = async () => { // we need to use an async function to fetch api
        try {
          const response = await fetch(API_URL) // if use asycn, we should use await here. to wait to fetch the data
          if (!response.ok) throw Error ("Data not received")
          console.log(response)
          const listItems = await response.json() //we need to wait here until the fetch operations completes
          console.log(listItems)
          setItems(listItems)
          setFetchError(null)
        }
        catch (err) {
          setFetchError (err.message)
        }
        finally {
          setIsLoading(false)
        }
    }
    setTimeout(() => {
      (async () => await fetchItems()) ()
    }, 2000)
  }, [])

  const addItem = async (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1
    const addNewItem = {id, checked:false, item}
    const listItems = [...items, addNewItem]
    setItems(listItems)
    //localStorage.setItem("todo_list", JSON.stringify(listItems)) // to store in local

    const postOptions = {
      method: 'POST', //for adding the record weshould use post method
      headers: {
        'Content-Type': 'application/json' // we should give the content type
      },
      body: JSON.stringify(addNewItem) //convert the string to json to store in db.json
    }
    const result = await apiRequest(API_URL, postOptions)
    if (result) setFetchError(result)

  }

  const handleCheck = async (id) => {
    const listItems = items.map((item) =>
    item.id === id ? {...item, checked:!item.checked } : item)
    setItems(listItems)
    //localStorage.setItem("todo_list", JSON.stringify(listItems)) // to store in local

    const myItem = listItems.filter((item) => item.id === id)
    const updateOptions = {
      method: 'PATCH', //we should use PATCH method for updatation
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({checked:myItem[0].checked})
    }
    const reqUrl = `${API_URL}/${id}` // we should send the ID with the url to do the operation
    const result = await apiRequest(reqUrl, updateOptions)
    if (result) setFetchError(result)
  } 

  const clickDelete = async (id) => {
    const listItems = items.filter((item) => // by using filter, we can do the delete operation
      item.id !== id)
    setItems(listItems)
    //localStorage.setItem("todo_list", JSON.stringify(listItems))

    const deleteOptions = {method: 'DELETE'} // method only enough to do the delete operation
    
    const reqUrl = `${API_URL}/${id}`
    const result = await apiRequest(reqUrl, deleteOptions)
    if (result) setFetchError(result)
  }

  const handleSubmit = (e) => { //create a new function for the button submission for add new item
    e.preventDefault()
    if (!newItem) return; // if we forget to give required  element in form
    //console.log(newItem)
    addItem(newItem)
    setNewItem('')
  }

  return (
    <div className="App">
      <Header  title = "To do List"/>
      <AddItem 
        newItem = {newItem}
        setNewItem = {setNewItem}
        handleSubmit = {handleSubmit}
        />
      <SearchItem 
        search = {search}
        setSearch = {setSearch}
        />
      <main>
        {isLoading && <p><b>Loading items...</b></p>}
        {fetchError && <p>{`Error: ${fetchError}`}</p>}
        {!isLoading && !fetchError  && <Content 
          items = {items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
          setItems = {setItems}
          handleCheck = {handleCheck}
          clickDelete = {clickDelete}/>}
      </main>
      <Footer 
        length = {items.length}
      />
    </div>
  );
}

export default App;
