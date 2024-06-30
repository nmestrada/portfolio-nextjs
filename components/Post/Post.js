import { useRouter } from 'next/router';
import styles from './Post.module.css';

export default function Post({ content, title, date }) {
  return (
    <article className={styles.post}>
      <h3>{title}</h3>
      <p>{date}</p>
      <div>{content}</div>
    </article>
  );
}
