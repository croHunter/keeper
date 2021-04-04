import React, { useState } from "react";
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';
import AddBoxIcon from '@material-ui/icons/AddBox';
function CreateArea(props) {
  const [expand, setExpand] = useState(false);

  function onContentClick() {

    setExpand(true);
  }
  return (

    <form className="create-note">
      {expand ? <input
        autoComplete="off"
        onChange={props.onChange} name="title" placeholder="Title"
        value={props.titleValue}
      /> : null}
      <textarea
        onClick={onContentClick}
        onChange={props.onChange}
        value={props.contentValue}
        name="content" placeholder="Take a note..." rows={expand?3:1} />
      {expand ? <Zoom in={expand ? true : false}>
        <Fab
          onClick={props.onAddClick}>
          <AddBoxIcon />
        </Fab>
      </Zoom> : null}




    </form>

  );
}

export default CreateArea;
