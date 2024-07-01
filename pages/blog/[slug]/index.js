import { getSortedPostsData } from '../../../services/fetchPost';
import Post from '../../../components/Post/Post';

export async function getStaticPaths() {
  // Return a list of possible value for id
  const posts = getSortedPostsData();

  return {
    paths: posts.map((post) => ({ params: { slug: post.id } })),
    fallback: true,
  };
}
export function getStaticProps({ params }) {
  const post = getSortedPostsData().find((post) => post.id === params.slug);
  return {
    props: { post },
  };
}

export default function BlogPage({ post }) {
  if (!post && !post?.content) {
    return null;
  }
  return <Post content={post?.content} title={post?.title} date={post?.date} />;
}
