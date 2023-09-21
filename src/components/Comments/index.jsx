import { Input } from "../Input";
import { useState } from "react";
import useSelectedNote from "../hooks/selectedNoteHook";
import { useDispatch, useSelector } from "react-redux";
import { addComment } from "../../redux/actions";
import { CommentsList } from "../CommentsList";
import "./Comments.css";

export const Comments = () => {
  const [comment, setComment] = useState("");
  const [selectedColor, setSelectedColor] = useState("#000000");
  const dispatch = useDispatch();
  const selectedNote = useSelectedNote();
  const notes = useSelector((state) => state.notes);

  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };

  const handleFormSubmit = () => {
    dispatch(addComment(selectedNote.id, comment, selectedColor));
    setSelectedColor("#000000");
    setComment("");
  };
  return (
    <div className="commentsContainer">
      <h2 className="itemsHeader">Comments #{notes.length > 0 ? selectedNote.id : ""}</h2>
      {notes.length > 0 && <CommentsList id={selectedNote.id} />}
      <form className="itemsForm" onSubmit={handleFormSubmit}>
        <input 
        className="colorInput"
          type="color"
          value={selectedColor}
          onChange={handleColorChange}
        />
        <Input
          placeholder={"Type comment here..."}
          required={true}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button className="addBtn" type="submit">Add new</button>
      </form>
    </div>
  );
};
