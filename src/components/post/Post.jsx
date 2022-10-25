import { Comment } from '../comment/Comment'
import styles from './Post.module.css'

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img src="https://avatars.githubusercontent.com/u/50805441?v=4" />
          <div className={styles.authorInfo}>
            <strong>Lucas Edgerly</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="11 de maio às 08:15h" dateTime="2022-08-20">Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW, evento da Rocketseat. 🚀🚀🚀</p>
        <p>👉 <a href="https://github.com/ur4sh1?tab=repositories">lucas.github/repositorios</a></p>
        <a href="">#novoprojeto</a>{' '}
        <a href="">#nlw</a>{' '}
        <a href="">#rocketseat</a>{' '}
      </div>
      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe seu comentário" />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
      <Comment />
      </div>
    </article>
  )
}