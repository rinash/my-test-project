/**
 * About page component.
 * React, React-Route, Redux Test project.
 */

import React from "react";

export default function About() {
  return (
    <div className="container">
      <article>
        <div>
          <section className="text-section">
            <h1>Welcome to Test Project</h1>
            <p>
              This application demonstrates simple example using React, React-Router, React-Redux and Styled-Components based workflow{" "}
              <a href="https://github.com/">redux-saga</a>.
            </p>
          </section>
          <section className="text-section">
            <h2>Description</h2>
            <p>
              Application started in <code>/index.js</code>.
            </p>
          </section>
        </div>
      </article>
    </div>
  );
}
