import React from 'react'

const Content = () => {
      const handleNameChange = ()=>{
    const names = ['bob','weird','dave'];
    const int = Math.floor(Math.random()*3) ;
    return names[int];
      }

  return (
    <main>
      <p>
        Hello there {handleNameChange()} !
      </p>    
    </main>
  )
}

export default Content