import AboutV2 from '../components/AboutV2';
import { getSortedPostsData } from '../services/fetchPost';
import Link from 'next/link';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  console.log({ allPostsData });
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <div className="container">
      <main>
        <AboutV2 />
        <section className="blog">
          <h2>Posts</h2>
          <ul className="list">
            {allPostsData.map((post) => (
              <li className="list-item" key={post.id}>
                <Link href={`/blog/${encodeURIComponent(post.id)}`}>
                  {post.title}
                  <span className="post-link-date">{post.date}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer>
        <p> &copy; {new Date().getFullYear()} Natalie Estrada</p>
      </footer>
    </div>
  );
}
