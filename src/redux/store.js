import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";

const storedNotes = JSON.parse(localStorage.getItem("notes")) || [];

const store = configureStore({
  reducer: rootReducer,
  preloadedState: { notes: storedNotes },
});

store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem("notes", JSON.stringify(state.notes));
});

export default store;
