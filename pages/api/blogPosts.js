import { getAllPosts } from '../../services/fetchPost';

export default (req, res) => {
  res.statusCode = 200;
  res.json(getAllPosts());
};
