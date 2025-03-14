// app/routes/index.jsx
import { Link } from "@remix-run/react";

export default function Index() {
  const posts = [
    { id: "1", title: "Hello Remix" },
    { id: "2", title: "Remix Rocks" },
  ];

  return (
    <div>
      <h1>Blog Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
