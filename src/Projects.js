import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuildingColumns } from '@fortawesome/free-solid-svg-icons';
import { faListCheck } from '@fortawesome/free-solid-svg-icons';

function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <p>Check out some of the things I'm working on!</p>
      <br />
      <h4><FontAwesomeIcon icon={faListCheck} style={{ marginRight: "0.5rem" }}/>Kanban Board</h4>
      <a href="https://joeclarkdev-kanban-board.web.app/" target="_blank" rel="noopener noreferrer">
        <img src="/kanban.png" width="100%" height="auto" alt="Kanban Board" />
      </a>
      <p style={{ marginTop: "1rem" }}>
        This is a basic Kanban board implemented using React.js. It allows you
        to manage tasks in a simple, visual manner with columns representing
        different stages of tasks.
      </p>
      <br />
      <h4><FontAwesomeIcon icon={faBuildingColumns} style={{ marginRight: "0.5rem" }}/>Bad Bank</h4>
      <a href="https://github.com/clarkjoey/badbank-capstone" target="_blank" rel="noopener noreferrer">
        <img src="/bad-bank.png" width="100%" height="auto" alt="Bad Bank" />
      </a>
      <p style={{ marginTop: "1rem" }}>
        Bad Bank is a straightforward banking application designed for users to perform common banking actions such as creating accounts, depositing and withdrawing money, checking account balances, and accessing user data. It serves as a fundamental system for managing user accounts.
      </p>
      <p>
        The name "bad" is derived from the assignment's title in my Full Stack Development class, primarily because, at the initial stage, it lacked robust security measures. While I have since implemented the capability for users to log in to their individual accounts, a quirk remains: users can still view all the accounts under "All Data." This was intentionally done to demonstrate the functionality of the database. However, this lack of security is what led to keeping the "bad" moniker for this banking application.
      </p>
    </section>
  );
}

export default Projects;
