//import Head from 'next/head';
import axios from 'axios';
import { useState, useEffect } from 'react';
import AboutV2 from '../components/AboutV2';
import Post from '../components/Post/Post';

export default function Home() {
  const [posts, setPosts] = useState([]);
  //const [navClass, setNavClass] = useState('nav');
  useEffect(() => {
    axios
      .get('/api/blogPosts')
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => console.log(err.message));
    //   window.addEventListener('scroll', function () {
    //     // add throttle instead this calllback
    //     let heroHeight = document.querySelector('.hero').clientHeight;
    //     console.log('hero height', heroHeight);
    //     if (window.scrollY > heroHeight) {
    //       setNavClass('nav solid');
    //     } else {
    //       setNavClass('nav');
    //     }
    //   });
  }, []);
  //scrolling navbar control

  return (
    <div className="container">
      <main>
        <AboutV2 />
        <section className="blog">
          <h2>Blog Posts</h2>
          {posts.map((post) => (
            <Post {...post} />
          ))}
        </section>
      </main>

      <footer>
        <p> &copy; {new Date().getFullYear()} Natalie Estrada</p>
      </footer>
    </div>
  );
}
