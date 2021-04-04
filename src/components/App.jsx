import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";


function App() {
  const initNote = { title: "", content: "" };
  const [note, setNote] = useState(initNote);
  const [noteList, setNoteList] = useState([]);

  function addNote() {
    if (note.title === "" && note.content === "") {
      console.log("fill in the Blanks");
    }
    else {
      setNoteList(prev => {
        return [...prev, note];
      });
      setNote(initNote);
    }

  }
  function changeHandle(e) {
    const { name, value } = e.target;
    setNote(prev => {
      if (name === "title") {
        return {
          title: value,
          content: prev.content
        }
      }
      else if (name === "content") {
        return {
          title: prev.title,
          content: value
        }
      }
    })
  }
  function handleDelete(id){
    setNoteList(prev=>{
      return noteList.filter((item,index)=>{return index!==id});
    }); 
  }
 noteList.map((note,index)=>{ note.id=index; return note;});
  return (
    <div >
      <Header />
      
      <CreateArea 
      onAddClick={addNote} onChange={changeHandle}
        titleValue={note.title}
        contentValue={note.content}

      />
      <div className="note-container">
        {noteList.map((note) => {
          const {id, title, content } = note;
          return <Note
            key={id}
            id={id}
            title={title}
            content={content}
            deleteClick={handleDelete}
          />
        })}
      </div>


      <Footer />
    </div>
  );
}

export default App;
