import { useRouter } from 'next/router';
import styles from './Post.module.css';

export default function Post({ content, title }) {
  const  pop  = 'helllo'     
  return (
    <article className={styles.post}>
      <h3>{title}</h3>
      <p>{content}</p>
      <p></p>
    </article>
  );
}
