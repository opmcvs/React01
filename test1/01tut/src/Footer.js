import React from 'react'

const Footer = ({length}) => {
    // const today = new Date();
  return (
    <footer>
      <p>{length} list {length === 1 ? "item":"items"}</p>
     {/* <p> Copyright &Copy; {today.getFullYear()}</p> */}
    </footer>
  )
}

export default Footer