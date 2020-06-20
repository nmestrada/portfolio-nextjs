import Head from 'next/head'
import axios from 'axios'
import {useState, useEffect} from 'react'
import SingleProject from '../components/SingleProject'
import About from '../components/About'
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
        // add throttle instead this calllback
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
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet"></link>
      </Head>
    <nav className={navClass}>
      <Scrollspy items={ ['projects', 'about'] } currentClassName="is-active">
        <a href="#projects">Projects</a>
        <a href="#about">About</a>
      </Scrollspy>
      
    </nav>
      <main>
      <div className="hero">
            <h1>Natalie Estrada</h1>
            <h2>Software Developer</h2>
        </div>
        <h1>Projects</h1>
        <section className="projects" id="projects">
            {
                projects.map(project => <SingleProject project={project}/>)
            }
        </section>
        <About/>
        <section className="blog">
            <h2>Blog</h2>
            <p>Currently in Progress!</p>
        </section>
      </main>

      <footer>
        <p>	&copy; {new Date().getFullYear()} Natalie Estrada</p>
      </footer>
    </div>
  )
}
