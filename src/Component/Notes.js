import React from 'react'

const Container = (props) => {
  return (
    <div className='note'>
       <h1>{props.title}</h1>
       <p>{props.content}</p>
       <button onClick={()=>{props.handle_Button(props.idx)}}>Delete</button>
    </div>
  )
}

export default Container;