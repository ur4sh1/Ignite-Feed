import { Header } from './components/header/Header';
import { Sidebar } from './components/sidebar/Sidebar';
import { Post } from './components/post/Post';
import './global.css';
import styles from './App.module.css';

const post = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/ur4sh1.png',
      name: 'Lucas Edgerly',
      role: 'Developer Web'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW, evento da Rocketseat. 🚀🚀🚀' },
      { type: 'link', content: '👉 https://github.com/ur4sh1?tab=repositories' }
    ],
    publishedAt: new Date('2022-10-28 20:34:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/2254731?v=4',
      name: 'Diego Fernandes',
      role: 'CTO @Rocketseat.'
    },
    content: [
      { type: 'paragraph', content: 'Fala Dev 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW, evento da Rocketseat. 🚀🚀🚀' },
      { type: 'link', content: '👉 https://github.com/diego3g?tab=repositories' }
    ],
    publishedAt: new Date('2022-10-25 12:30:00'),
  },
]

export function App() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {post.map(post => {
            return (
            <Post 
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
            )
          })
          }
        </main>
      </div>
    </div>

  )
}

