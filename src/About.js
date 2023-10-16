import React from "react";

function About() {
  // Define the inline style as a JavaScript object
  const aboutMeStyle = {
    textAlign: "center",
  };
  return (
    <section id="about">
      <h2 style={aboutMeStyle}>About Me</h2>
      <p>
        Hello, fellow hackers! My name is Joe and I'm delighted to have you here
        in my virtual coding realm. Let me give you a glimpse into my world of
        programming and technology.
      </p>
      <h4>Who Am I?</h4>
      <p>
        I'm a passionate coder hailing from New York, deeply immersed in the
        world of software development. My journey is a symphony of code,
        creativity, and constant learning. It's not as daunting of a journey
        when it's something you genuinely love doing - which I do!
      </p>
      <h4>My Journey</h4>
      <p>
        In my coding journey I've learned a lot. From getting my Full Stack
        Masters certificate to my hands-on experience working as a Solutions
        Engineer. Every bug squashed, every line of code written has been a
        stepping stone toward mastery.
      </p>
      <h4>Why This Website?</h4>
      <p>
        Welcome to my digital coding playground! This website serves as a
        showcase of my coding portfolio, a place where I can display my
        creations and demonstrate my skills. It's a testament to my dedication
        to the world of programming.
      </p>

      <h4>What to Expect</h4>
      <p>
        Here, you'll find a plethera of JavaScript projects that I've put a lot
        of time into. From a kanban board to keep me organized at work, to a
        3-tier web app that showcases my full stack knowledge, I invite you to
        explore my work and get inspired.
      </p>

      <h4>Let's Connect</h4>
      <p>
        I'm always eager to connect with fellow code enthusiasts and
        collaborators. If you have questions, ideas, or just want to chat about
        code, don't hesitate to reach out. You can find me on{" "}
        <a href="https://www.linkedin.com/in/imjosephclark/">LinkedIn</a> and{" "}
        <a href="https://github.com/clarkjoey">GitHub</a> to stay in touch.
      </p>

      <p>
        Thank you for stopping by and getting to know me a little better. I'm
        excited to embark on this journey with you and share my personal
        projects with you!
      </p>

      <p>
        Cheers, <br />
        Joe
      </p>
    </section>
  );
}

export default About;
