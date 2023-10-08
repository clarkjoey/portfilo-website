import React from "react";

function About() {
  // Define the inline style as a JavaScript object
  const aboutMeStyle = {
    textAlign: "center"
  };
  return (
    <section id="about">
      <h2 style={aboutMeStyle}>About Me</h2>
      <p>
        Hello, fellow hackers! I'm Joe, and I'm delighted to have you here in my
        virtual coding realm. Let me give you a glimpse into my world of
        programming and technology.
      </p>
      <h3>Who Am I?</h3>
      <p>
        I'm a passionate coder hailing from New York, deeply immersed in the
        world of software development. My journey is a symphony of code,
        creativity, and constant learning. It's not as daunting of a journey
        when it's something you genuinely love doing - which it do!
      </p>
      <h3>My Journey</h3>
      <p>
        In my coding journey I've learned a lot. From getting my Full Stack
        Masters certificate to my hands-on experience working as a Solutions
        Engineer. Every bug squashed, every line of code written has been a
        stepping stone toward mastery.
      </p>
      <h3>Why This Website?</h3>
      <p>
        Welcome to my digital coding playground! This website serves as a
        showcase of my coding portfolio, a place where I can display my
        creations and demonstrate my skills. It's a testament to my dedication
        to the world of programming.
      </p>

      <h3>What to Expect</h3>
      <p>
        Here, you'll find a plethera of JavaScript projects that I've put a lot
        of time into. From a kanban board to keep me organized at work, to a 3-tier web app that showcases my full stack knowledge, I invite you to explore my
        work and get inspired.
      </p>

      <h3>Let's Connect</h3>
      <p>
        I'm always eager to connect with fellow code enthusiasts and
        collaborators. If you have questions, ideas, or just want to chat about
        code, don't hesitate to reach out. You can find me on <a href="">LinkedIn</a> and <a href="">GitHub</a> to stay in touch.
      </p>

      <p>
        Thank you for stopping by and getting to know me a little better. I'm
        excited to embark on this journey with you and share my personal
        projects with you!
      </p>

      <p>Cheers, <br />Joe</p>
    </section>
  );
}

export default About;
