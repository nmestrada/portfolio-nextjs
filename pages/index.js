import Head from 'next/head'
import axios from 'axios'
import {useState, useEffect} from 'react'
import SingleProject from './components/singleProject'
import Scrollspy from 'react-scrollspy'

export default function Home() {
  const [projects, setProjects] = useState([])
  const [navClass, setNavClass] = useState('nav')
  useEffect(()=>{
    axios.get('/api/projects')
    .then( res => {
        setProjects(res.data)
    })
    .catch(err => console.log(err.message))
    window.addEventListener('scroll', function() {
        let heroHeight = document.querySelector('.hero').clientHeight;
        console.log('hero height',heroHeight)
        if(window.scrollY > heroHeight){
            setNavClass('nav solid')
        }else {
            setNavClass('nav')
        }
    })
  },[])
  //scrolling navbar control
  
  
  return (
    <div className="container">
      <Head>
        <title>Natalie Estrada Full Stack Developer</title>
      </Head>
    <nav className={navClass}>
      <Scrollspy items={ ['projects', 'about'] } currentClassName="is-active">
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
        <section>
            <h3>Contact</h3>
        </section>
      </main>

      <footer>
        <p>Other Links</p>
      </footer>
    </div>
  )
}
