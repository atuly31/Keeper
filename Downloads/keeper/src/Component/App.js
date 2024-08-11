import React from "react";
import Card from "./Card";
import Header from "./Header";
import Footer from "./Footer";
import notes from "../notes";
console.log(notes);


function create_box(note)
{ return(


  <Card key = {note.key}
  title = {note.title}
 content = {note.content}
 />
)
}
function App() {
  return (
    <>
      <Header />
       {notes.map(create_box)}
      <Footer />
    </>
  );
}

export default App;
