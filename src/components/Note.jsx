import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';


const Note = ({ title, content, id, deleteClick }) => {
  return (
    <div className="note">
      <h1>{title}</h1>
      <p>{content}</p>
      <button onClick={() => deleteClick(id)} >
        <DeleteIcon />
      </button>
    </div>
  );
};
export default Note;
