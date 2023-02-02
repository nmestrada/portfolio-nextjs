//import Head from 'next/head';
//import axios from 'axios';
//import { useState, useEffect } from 'react';
//import SingleProject from '../components/SingleProject';
import AboutV2 from '../components/AboutV2';
import { Blog } from '../components/Blog';
//import Scrollspy from 'react-scrollspy';

export default function Home() {
  //const [projects, setProjects] = useState([]);
  //const [navClass, setNavClass] = useState('nav');
  //   useEffect(() => {
  //     axios
  //       .get('/api/projects')
  //       .then((res) => {
  //         setProjects(res.data);
  //       })
  //       .catch((err) => console.log(err.message));
  //     window.addEventListener('scroll', function () {
  //       // add throttle instead this calllback
  //       let heroHeight = document.querySelector('.hero').clientHeight;
  //       console.log('hero height', heroHeight);
  //       if (window.scrollY > heroHeight) {
  //         setNavClass('nav solid');
  //       } else {
  //         setNavClass('nav');
  //       }
  //     });
  //   }, []);
  //scrolling navbar control

  return (
    <div className="container">
      <main>
        <AboutV2 />
        <section className="blog">
          <Blog />
        </section>
      </main>

      <footer>
        <p> &copy; {new Date().getFullYear()} Natalie Estrada</p>
      </footer>
    </div>
  );
}
