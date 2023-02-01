import React from 'react'

const Header = ({title}) => {
  // The props come from the parent.
  // instead of props now will destructure the components 
  return (
    <header  >
        <h1>{title} </h1>
    </header>
  )
}
//  Default props if no props its the default
Header.defaultProps = {
  title : "This is new" 
}
export default Header


//  <header style={{
//       backgroundColor:'mediumBlue',
//       color:'Red'
//     }}>

// const Header = () => {
//   const headerStyle= {
//    backgroundColor:'mediumBlue',
//    color:'Red'
//   };
//   return (
//     <header style={headerStyle} >
//         <h1>Groceries List </h1>
//     </header>
//   )
// }