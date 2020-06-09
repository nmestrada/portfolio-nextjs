import Head from 'next/head'
import axios from 'axios'
import {useState, useEffect} from 'react'
import SingleProject from './components/singleProject'
import Scrollspy from 'react-scrollspy'

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
    <nav>
      <Scrollspy items={ ['projects', 'about'] } currentClassName="is-current">
        <a href="#projects">Projects</a>
        <a href="#about">About</a>
      </Scrollspy>
    </nav>
      <main>
        <section className="hero">
            <h1>Natalie</h1>
            <h2>Web Developer Projects</h2>
        </section>
        <section className="projects" id="projects">
            {
                projects.map(project => <SingleProject project={project}/>)
            }
        </section>
        <section className="about" id="about">
            <h2>About Me</h2>
        </section>
      </main>

      <footer>
        <p>Other Links</p>
      </footer>
    </div>
  )
}
