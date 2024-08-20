import React from 'react'

const Card = (props) => {
  return (
    
      <form onSubmit={props.handleClick}>
      <input onChange={props.func} name= "title" placeholder='Title' value={props.value_in}></input>
      <textarea onChange={props.func} id = "content" name="content"placeholder='Take a Note....'  value={props.value_text}></textarea>
      <button>ADD</button>
      </form>
   
    
  )
}

export default Card;
