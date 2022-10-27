import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from '../avatar/Avatar';
import styles from './Comment.module.css';

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src={"https://avatars.githubusercontent.com/u/50805441?v=4"} />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Lucas Edgerly</strong>
              <time title="11 de maio às 08:15h" dateTime="2022-08-20">Cerca de 1h atrás</time>
            </div>
            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>
        <footer>
          <button>
          <ThumbsUp />
          Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}