import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "../avatar/Avatar.component";
import styles from "../modules/Comment.module.css";
import { useState } from "react";

export function Comment({ content, onDeleteComment }) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeletComment() {
    onDeleteComment(content);
  }

  function handleLikeComment() {
    setLikeCount((state) => {
      return state + 1;
    });
  }

  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        src={"https://avatars.githubusercontent.com/u/50805441?v=4"}
      />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Lucas Edgerly</strong>
              <time title="11 de maio às 08:15h" dateTime="2022-08-20">
                Cerca de 1h atrás
              </time>
            </div>
            <button onClick={handleDeletComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
