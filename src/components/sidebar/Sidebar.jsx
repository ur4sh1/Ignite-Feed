import styles from './Sidebar.module.css';
import { PencilLine } from 'phosphor-react';
import { Avatar } from '../avatar/Avatar';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src="https://images.unsplash.com/photo-1577375729078-820d5283031c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" />
      <div className={styles.profile}>
        <Avatar src={"https://avatars.githubusercontent.com/u/50805441?v=4"} />
        <strong>Lucas Edgerly</strong>
        <span>Web Developer</span>
      </div>
      <footer>
        <a href="#">
        <PencilLine size={20}/>
          Editar seu perfil</a>
      </footer>
    </aside>
  )
}