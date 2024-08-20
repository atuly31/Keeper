import React, { useState } from "react";
import Card from "./Card";
import Header from "./Header";
import Footer from "./Footer";
import Container from "./Notes";

function App() {
  const [currentNote, setCurrentNote] = useState(
    {
  
      title: "",
      content: "",
    }
  )
  const [body,setbody] = useState([]);

  function handlechange(event) {
    const { name, value } = event.target;
    console.log(name);
    setCurrentNote((preval) => ({
      ...preval,
      [name]:value
    }));
  }

  const handleClick = (event) => {
    event.preventDefault();
    setbody((prevBody) => [...prevBody, currentNote]);
    setCurrentNote({ title: "", content: "" }); 
  };
  console.log(body)


const handle_Button = (id) => {
  
  setbody((preval)=>{
      return preval.filter((data,index)=>{
          return index !== id;
      })
      
  })
};
  return (
    <>
      <Header />
      <Card func={handlechange} handleClick={handleClick} value_in={currentNote.title} value_text={currentNote.content} />
      {body.map((data,index)=>{
    
        
        return( <Container key={index} idx={index}title={data.title}
         content={data.content}  handle_Button={handle_Button} />
        )
    
    })}
      <Footer />
    </>
  );
}

export default App;
