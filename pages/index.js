import Head from 'next/head'
import axios from 'axios'
import {useState, useEffect} from 'react'
import SingleProject from './components/singleProject'

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
            <h1>Natalie</h1>
            <h2>Web Developer Projects</h2>
        </div>
        <div className="projects">
            {
                projects.map(project => <SingleProject project={project}/>)
            }
        </div>
      </main>

      <footer>
        <p>Other Links</p>
      </footer>
    </div>
  )
}
