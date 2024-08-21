import React from 'react'
import { DeleteFilled} from '@ant-design/icons';
const Container = (props) => {
  return (
    <div className='note'>
       <h1>{props.title}</h1>
       <p>{props.content}</p>
       <button onClick={()=>{props.handle_Button(props.idx)}}><DeleteFilled /></button>
    </div>
  )
}

export default Container;