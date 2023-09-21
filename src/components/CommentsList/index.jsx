import "./commentsList.css";
import { useSelector } from "react-redux";

export const CommentsList = ({ id }) => {
  const list = useSelector((state) => state.notes);
  const selectedItem = list.find((item) => item.id === id);
  if (!selectedItem) return;
  const { comments } = selectedItem;
  return (
    <ul>
      {comments?.map((comment) => (
        <li key={comment.id}>
          <div
            className="color"
            style={{ backgroundColor: comment.color }}
          ></div>
          {comment.body}
        </li>
      ))}
    </ul>
  );
};
