import { useSelector } from 'react-redux';

const useSelectedNote = () => {
  const storedSelectedNote = JSON.parse(localStorage.getItem("activeNote"));
  const selectedNoteRedux = useSelector((state) => state.selectedNote);
  return storedSelectedNote || selectedNoteRedux;
};

export default useSelectedNote;
