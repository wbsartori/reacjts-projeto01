import {Header} from "./components/Header";

import styles from './App.module.css';
import {Sidebar} from "./components/Sidebar";
import {Post} from "./components/Post";

// author : { avatar_url: "", name: "", role: "" }
//publisheAd : Date
//comment: String

const posts = [
    {
        id: 1,
        author: {
            avatarUrl: "https://avatars.githubusercontent.com/u/25470180?v=4",
            name: "Wesley Sartóri",
            role: "Software engineer"
        },
        content: [
            {type : 'paragraph', content: "Fala galeraa 👋", },
            {type : 'paragraph', content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀", },
            {type : 'link', content: "jane.design/doctorcare", },
        ],
        publishedAt: new Date('2022-10-22 20:00:00')
    },
    {
        id: 1,
        author: {
            avatarUrl: "https://avatars.githubusercontent.com/u/26235664?v=4",
            name: "Jean Carlos da Campo",
            role: "UX/UI Design"
        },
        content: [
            {type : 'paragraph', content: "Fala galeraa 👋", },
            {type : 'paragraph', content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀", },
            {type : 'link', content: "jane.design/doctorcare" ,},
        ],
        publishedAt: new Date('2022-10-22 20:00:00')
    },
];

export function App() {
  return (
      <div>
        <Header />
          <div className={styles.wrapper}>
            <Sidebar />
              <main>
                  {posts.map((post) => {
                    return (
                        <Post
                           author={post.author}
                           content={post.content}
                           publishedAt={post.publishedAt}
                        />
                    )
                  })}
              </main>
          </div>
      </div>
  )
}
