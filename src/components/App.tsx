import { FC, useEffect, useState } from "react";

import "./styles.css";

const App: FC = () => {
  const [userName, setUserName] = useState("");
  const [userRepositories, setUserRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    if (userName !== "") {
      fetch(`https://api.github.com/users/${userName}/repos`)
        .then((data) => data.json())
        .then((repositories) => setUserRepositories(repositories));
    } else {
      setUserRepositories([]);
    }
  }, [userName]);

  return (
    <div className="container">
      <label htmlFor="github-username">Github Username</label>
      <input
        type="text"
        id="github-username"
        name="github-username"
        onBlur={(e) => setUserName(e.currentTarget.value)}
      />

      <section className="repositoriesContainer">
        {userRepositories.map((repository) => (
          <article key={repository.id} className="repository">
            <p className="repositoryContentText">
              <strong>Repository Name: </strong>
              <span>{repository.name}</span>
            </p>
            <p className="repositoryContentText">
              <strong>Repository URL: </strong>
              <span>{repository.url}</span>
            </p>
          </article>
        ))}
      </section>
    </div>
  );
};

export default App;
