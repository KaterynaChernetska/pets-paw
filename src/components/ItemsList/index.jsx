import { useDispatch, useSelector } from "react-redux";
import { deleteNote, selectNote } from "../../redux/actions";
import "./ItemsList.css";
import useSelectedNote from "../hooks/selectedNoteHook";

export const ItemsList = () => {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.notes);

  const selectedNote = useSelectedNote();

  const handleDeleteNoteBtn = (id) => {
    dispatch(deleteNote(id));
  };

  const handleNoteClick = (item) => {
    dispatch(selectNote(item));
    localStorage.setItem("activeNote", JSON.stringify(item));
  };

  return (
    <ul>
      {list.length > 0 ? (
        list.map((item) => (
          <li key={item.id} onClick={() => handleNoteClick(item)}>
            <p
              className="isActive"
              style={{
                backgroundColor: item.id === selectedNote.id ? "red" : "",
              }}
            ></p>
            {item.name}
            <span>{item.comments.length}</span>
            <button onClick={() => handleDeleteNoteBtn(item.id)}>delete</button>
          </li>
        ))
      ) : (
        <p>Please add some notes first</p>
      )}
    </ul>
    
  );
};
