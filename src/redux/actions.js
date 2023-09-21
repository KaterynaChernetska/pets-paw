export const addNote = (name, id) => ({
  type: "ADD_NOTE",
  payload: { name, id },
});
export const deleteNote = (noteId) => ({
  type: "DELETE_NOTE",
  payload: noteId,
});

export const addComment = (noteId, comment, color) => ({
    type: "ADD_COMMENT",
    payload: { noteId, comment, color},
  });

  export const selectNote = (note) => ({
    type: "SELECT_NOTE",
    payload: note,
  });