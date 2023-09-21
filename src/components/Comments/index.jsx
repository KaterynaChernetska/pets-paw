import { useSelector } from "react-redux";
import { Input } from "../Input";
import { useState } from "react";
import useSelectedNote from "../hooks/selectedNoteHook";

export const Comments = () => {
    const [comment, setComment] = useState('');
//   const storedSelectedNote = JSON.parse(localStorage.getItem("activeNote"));

//   const selectedNoteRedux = useSelector((state) => state.selectedNote);

  const selectedNote = useSelectedNote();

  console.log(selectedNote);
  return (
    <div>
      <h2>{selectedNote?.id}</h2>
    <form>
    <Input
          placeholder={"Type comment here..."}
          required={true}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
    <button type="submit"></button>
    </form>
    </div>
  );
};
