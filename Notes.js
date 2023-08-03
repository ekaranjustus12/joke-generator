import React from 'react';


const Note = ({id,text,deleteNote})=>{
    return(
        
        <div className="Notes-app">
          
          <button onClick={deleteNote(id)}>delete</button>
        </div>
    )
}
export default Note;