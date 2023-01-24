import React from 'react'

const Content = () => {
      const handleNameChange = ()=>{
    const names = ['bob','weird','dave'];
    const int = Math.floor(Math.random()*3) ;
    return names[int];
      }

      const handleClick = ()=>{
        console.log('You clicked it')
      }

       const handleClick2 = (name)=>{
        console.log(`${name} was clicked`)
      }
 
      const handleClick3 = (e)=>{
        console.log(e.target.innerText)
      }
  return (
    <main>
      <p onDoubleClick={handleClick}>
        Hello there {handleNameChange()} !
      </p> 
      <button onClick={handleClick}>click it</button>  
      <button onClick={()=> handleClick2('Om')}>click it</button>  
   {/* above is an anomimous function ()=>{} but no need the brackets  */}
       <button onClick={(e)=> handleClick3(e)}>click it</button> 
    </main>
  )
}

export default Content