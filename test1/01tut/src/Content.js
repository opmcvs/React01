import React from 'react'
import {useState} from 'react';
import{FaTrashAlt} from 'react-icons/fa';

const Content = () => {
      const [items, setItems] = useState([

        {
          id:1,
         checked:false,
         item: 'One half of Secret' 
          
        },
        {
          id:2,
         checked:false,
         item: 'item2' 
          },

        {
          id:3,
         checked:false,
         item: 'item3' 
          
        }
      ]);
          // getter, setter           // default state inside the parameter
      // const [count,setCount] = useState(0);    
      // const handleNameChange = ()=>{
    // const names = ['bob','weird','dave'];
    // const int = Math.floor(Math.random()*3) ;
    // setName( names[int]);
    //   }

    //   const handleClick = ()=>{
    //     setCount(count + 1)
    //     // the value of count still remains 0 as originally set
    //     //  it won't change rapidly?
    //     console.log(count)
    //   }

    //    const handleClick2 = (name)=>{
    //     console.log(count)
    //   }
 
    //   const handleClick3 = (e)=>{
    //     console.log(e.target.innerText)
    //   }
  return (
    <main>
      {/* <p onDoubleClick={handleClick}>
        Hello there {name()} !
      </p> 
      <button onClick={handleNameChange}>change Name</button>  
      <button onClick={handleClick}>click it</button>  
   {/* above is an anomimous function ()=>{} but no need the brackets
   as only one line using arrow function   */}
       {/* <button onClick={(e)=> handleClick3(e)}>click it</button>  */}
       {/* <button onClick={handleClick2}>click it</button> */ }

     <ul>
      {items.map((item) => {
        <li className ='item' key={item.id}>
          <input
          type='checkbox'
          checked ={item.checked}/>
          <label>{item.item}</label>
          <FaTrashAlt 
          role='button' 
          tabIndex='0'/>
          
                {/* each list item needs a key in react */}
        </li>
      }
      )}

     </ul>


    </main>
  )
}

export default Content