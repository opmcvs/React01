import React from 'react'
import {useState} from 'react';
import{FaTrashAlt} from 'react-icons/fa';

const Content = () => {
      const [items, setItems] = useState([

        {
          id:1,
         checked:true,
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

    const handleCheck = (id) => {
      console.log(`key:${id}`)
      const listItems = items.map((item)=> 
      item.id=== id ? {...item, checked: !item.checked}:
      item);
      setItems(listItems);
      localStorage.setItem("shopping list",JSON.stringify(listItems));
    }

    const handleDelete = (id) =>{
      console.log(id);
      const listItems = items.filter((item)=> item.id !== id);
         setItems(listItems);
         localStorage.setItem('shoppinglist',JSON.stringify(listItems));
        
    }
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
      {items.map((item) => (
        <li className ='item' key={item.id}>
          <input
          type='checkbox'
          onChange={() => handleCheck(item.id)}
          checked ={item.checked}/>
          <label
          style = {(item.checked) ? {textDecoration:
            'line-through'}: null }
          onDoubleClick={()=> handleCheck(item.id)}
          >{item.item}</label>
          <FaTrashAlt 
          onClick={()=> handleDelete(item.id)}
          role='button' 
          tabIndex='0'/>
          
                {/* each list item needs a key in react */}
        </li>
      
      ))}

     </ul>


    </main>
  )
}

export default Content