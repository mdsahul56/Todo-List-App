import React from 'react'

const searchItem = ({search, setSearch}) => {
  return (
    <form className = "searchForm" onsubmit = {(e) => e.preventDefault()}>
        <label htmlFor='Search'>Search</label>
        <input
            id = "search"
            type = "text"
            role = "searchbox"
            placeholder = "Search Items"
            value = {search}
            onChange={(e) => setSearch(e.target.value)}
        />
    </form>
  )
}

export default searchItem