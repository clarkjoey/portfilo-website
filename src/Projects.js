import React from "react";

function Projects() {
  const style = {
    opacity: ".25",
    cusor: "not-allowed"
  };
  return (
    <section id="projects">
      <h2>Projects</h2>
      <p>
        This page is currently under construction. Check back later for updates!
      </p>
      <img style={style} src="/kanban.png" width="100%" height="auto" alt="" />
    </section>
  );
}

export default Projects;
