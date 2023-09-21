import "./commentsList.css";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

export const CommentsList = ({ id }) => {
  const list = useSelector((state) => state.notes);
  const selectedItem = list.find((item) => item.id === id);
  if (!selectedItem) return;
  const { comments } = selectedItem;
  console.log(comments)
  return (
    <ul className="commentsList">
      {comments?.map((comment) => (
        <li className="commentsListItem" key={comment.id}>
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

CommentsList.propTypes = {
  id: PropTypes.number,
};
