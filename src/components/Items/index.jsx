import { Input } from "../Input";
import { ItemsList } from "../ItemsList";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { addNote } from "../../redux/actions";

export const Items = () => {
  const dispatch = useDispatch();
  const [note, setNote] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    dispatch(addNote(note, Math.round(Date.now() + Math.random())));
    console.log(note)
    setNote("");
  };

  return (
    <div>
      <h2>Items</h2>
      <form onSubmit={handleFormSubmit}>
        <Input
          placeholder={"Type name here..."}
          required={true}
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
        <button type="submit">Add new</button>
      </form>
      <ItemsList />
    </div>
  );
};
