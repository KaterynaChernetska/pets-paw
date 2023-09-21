import { nanoid } from "nanoid";

const initialState = {
  notes: [],
  selectedNote: null,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_NOTE":
      return {
        ...state,
        notes: [
          ...state.notes,
          {
            name: action.payload.name,
            id: action.payload.id,
            comments: [],
          },
        ],
      };
    case "DELETE_NOTE":
      return {
        ...state,
        notes: state.notes.filter((note) => note.id !== action.payload),
      };
    case "SELECT_NOTE":
      return {
        ...state,
        selectedNote: action.payload,
      };
    case "ADD_COMMENT":
      return {
        ...state,
        notes: state.notes.map((note) => {
          if (note.id === action.payload.noteId) {
            return {
              ...note,
              comments: [
                ...note.comments,
                {
                  id: nanoid(),
                 body: action.payload.comment,
                  color: action.payload.color,
                },
              ],
            };
          }
          return note;
        }),
      };
    default:
      return state;
  }
};

export default rootReducer;
