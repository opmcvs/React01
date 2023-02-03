import React from 'react'
import{FaTrashAlt} from 'react-icons/fa';

const ItemList = ({}) => {
  return (
    <ul>
                {items.map((item) => (
                //   <li className ='item' key={item.id}>
                //     <input
                //     type='checkbox'
                //     onChange={() => handleCheck(item.id)}
                //     checked ={item.checked}/>
                //     <label
                //     style = {(item.checked) ? {textDecoration:
                //       'line-through'}: null }
                //     onDoubleClick={() => handleCheck(item.id)}
                //     >{item.item}</label>
                //     <FaTrashAlt 
                //     onClick={() => handleDelete(item.id)}
                //     role="button" 
                //     tabIndex="0"/>
                    
                //           {/* each list item needs a key in react */}
                //   </li>
                
                ))}

              </ul>

  )
}

export default ItemList