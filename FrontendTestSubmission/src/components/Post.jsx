import { useEffect, useState } from 'react';
import axios from 'axios';
import { logEvent } from '../../../Logging Middleware/log';

function Posts() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPosts = async () => {
      logEvent("frontend", "info", "api", "Fetching posts started");

      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5');
        setPosts(response.data);
        logEvent("frontend", "info", "api", "Fetched posts successfully");
      } catch (err) {
        setError('Failed to fetch posts');
        logEvent("frontend", "error", "api", "Error fetching posts: " + err.message);
      }
    };

    fetchPosts();
  }, []);

  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <div>
      <h2>Latest Posts</h2>
      {posts.map((post) => (
        <div key={post.id} className="post-card">
          <h4>{post.title}</h4>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default Posts;
