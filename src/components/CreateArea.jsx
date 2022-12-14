import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const [isExpand, setIsExpand]= useState(false);




  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }
  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  function Expand(){
    setIsExpand(true);
  }

  return (
    <div>
      <form className="create-note">
        {isExpand ? <input
          onChange={handleChange}
          value={note.title}
          name="title"
          placeholder="Title"
        /> : null}
        <textarea
          onChange={handleChange}
          onClick={Expand}
          value={note.content}
          name="content"
          placeholder="Take a note..."
          rows={isExpand ? 3 : 1}
        />
        <Zoom in={isExpand}>
        <Fab onClick={submitNote}>
          <AddIcon />
        </Fab>
        </Zoom>
        
      </form>
    </div>
  );
}

export default CreateArea;
