import React from 'react'

const Footer = ({length}) => {

    //const year = new Date();
    //Copyrights &copy; {year.getFullYear()   ---we can use this in footer
  return (
    <footer>
      {length} list {length ===1 ? "item" : "items"}
    </footer>
  )
}

export default Footer