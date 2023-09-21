import { Input } from "../Input";
import { ItemsList } from "../ItemsList";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { addNote } from "../../redux/actions";
import "./items.css";
import { nanoid } from "nanoid";

export const Items = () => {
  const dispatch = useDispatch();
  const [note, setNote] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    dispatch(addNote(note, nanoid()));
    setNote("");
  };

  return (
    <div className="itemsContainer">
      <h2 className="itemsHeader">Items</h2>
      <form className="itemsForm" onSubmit={handleFormSubmit}>
        <Input
          placeholder={"Type name here..."}
          required={true}
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
        <button className="addBtn" type="submit">Add new</button>
      </form>
      <ItemsList />
    </div>
  );
};
