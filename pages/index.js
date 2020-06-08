import Head from 'next/head'
import axios from 'axios'
import {useState, useEffect} from 'react'

export default function Home() {
  const [projects, setProjects] = useState([])
  useEffect(()=>{
    axios.get('/api/projects')
    .then( res => {
        setProjects(res.data)
    })
    .catch(err => console.log(err.message))
  },[])
  return (
    <div className="container">
      <Head>
        <title>Natalie Estrada Full Stack Developer</title>
      </Head>

      <main>
        <div className="hero">
            Natalie Estrada
        </div>
        <div className="projects">
            {
                projects.map(project => <div key={project.title}>{project.title}</div>)
            }
        </div>
      </main>

      <footer>
        <p>Other Links</p>
      </footer>
    </div>
  )
}
