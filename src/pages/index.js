// src/pages/index.js
import React from "react";
import { graphql } from "gatsby";

export default function Home({ data }) {
  const projects = data.allProjects.nodes;
  return (
    <div>
      <h1>My Portfolio</h1>
      <div>
        {projects.map((project) => (
          <div key={project.id} style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "10px" }}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export const query = graphql`
  query {
    allProjects {
      nodes {
        id
        title
        description
      }
    }
  }
`;
