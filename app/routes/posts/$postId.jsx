// app/routes/posts/$postId.jsx
import { useLoaderData } from "@remix-run/react";

export async function loader({ params }) {
  // For simplicity, using static data; in a real app, parse Markdown or fetch data.
  const posts = {
    "1": { title: "Hello Remix", content: "This is the first post." },
    "2": { title: "Remix Rocks", content: "This is the second post." },
  };
  return posts[params.postId];
}

export default function Post() {
  const post = useLoaderData();
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}
