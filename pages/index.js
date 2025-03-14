// pages/index.js
import Head from 'next/head';

export default function Home({ users }) {
  return (
    <div>
      <Head>
        <title>My Landing Page</title>
      </Head>
      <header style={{ padding: '20px', background: '#f5f5f5' }}>
        <h1>Welcome to My Site</h1>
      </header>
      <main style={{ padding: '20px' }}>
        <section>
          <h2>About Us</h2>
          <p>This is a placeholder for about us section.</p>
        </section>
        <section>
          <h2>Services</h2>
          <p>Placeholder text about services.</p>
        </section>
      </main>
      <footer style={{ padding: '20px', background: '#f5f5f5' }}>
        <p>Footer content goes here.</p>
      </footer>
    </div>
  );
}

// Optional: Implement SSG with getStaticProps
export async function getStaticProps() {
  // Example: Fetch user profiles from an API
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await res.json();

  return {
    props: {
      users,
    },
  };
}
