import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "../avatar/Avatar.component";
import styles from "../modules/Comment.module.css";

export function Comment({ content, onDeleteComment }) {
  function handleDeletComment() {
    onDeleteComment(content);
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
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
