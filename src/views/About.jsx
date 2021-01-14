/**
 * About page component.
 * React, React-Route, Redux Test project.
 */

import React from "react";

const AboutView = () => {
  return (
    <div className="container">
      <article>
        <div>
          <section className="text-section">
            <h1>Welcome to Test Project</h1>
            <p>
              This app demonstrates a simple example of using a workflow based on React, React-Router, React-Redux, Bootstrap
              and Styled-Components. The code can be find on{" "}
              <a href="https://github.com/rinash/my-test-project" target="__blank">
                GitHub
              </a>
              .
            </p>
          </section>
          <section className="text-section">
            <h2>Description</h2>
            <p>
              The folder <code>/Components</code> contains the main components that were used in the project. The file{" "}
              <code>/Components/App.js</code> contains the main paths of the application created with React-Router. The file{" "}
              <code>/Components/Home.js</code> contains the main application form. By clicking on the button Submit, you will be
              redirected to another page, which is described in the file <code>/Components/Item.js</code>. The Redux part such
              as actions and reducers can be found in the directory <code>/reduce </code>. The application has 3 themes, the
              description of which you can find in the folder <code>/themes</code>. Bootstrap styles were used for simplicity,
              but variable styles were created for some components. Stylized components can be find in the folder{" "}
              <code>/Components/Common</code>.
            </p>
          </section>
        </div>
      </article>
    </div>
  );
};

export default AboutView;
