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
    localStorage.removeItem("activeNote");
  };

  const handleNoteClick = (item) => {
    dispatch(selectNote(item));
    localStorage.setItem("activeNote", JSON.stringify(item));
  };

  return (
    <ul>
      {list.length > 0 ? (
        list.map((item) => (
          <li
            style={{
              borderLeft:
                item.id === selectedNote.id ? "4px solid deeppink" : "",
            }}
            className="listItem"
            key={item.id}
            onClick={() => handleNoteClick(item)}
          >
            {item.name}
            <span className="itemsComments">{item.comments.length}</span>
            <button className="deleteBtn" onClick={() => handleDeleteNoteBtn(item.id)}>Delete</button>
          </li>
        ))
      ) : (
        <p>Please add some notes first</p>
      )}
    </ul>
  );
};
