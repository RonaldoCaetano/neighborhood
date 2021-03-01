import { FC, useCallback, useState } from "react";
import Repository from "./Repository";
import SendForm from "./SendForm";

import "./styles.css";

const App: FC = () => {
  const [userName, setUserName] = useState("");
  const [loading, setLoading] = useState(false);
  const [noRepositories, setNoRepositories] = useState(false);
  const [userRepositories, setUserRepositories] = useState<Repository[]>([]);

  const handleSubmit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (userName !== "") {
        setLoading(true);

        const response = await fetch(
          `https://api.github.com/users/${userName}/repos`
        );
        const repositories = await response.json();

        setLoading(false);

        if (repositories?.length) {
          noRepositories && setNoRepositories(false);
          setUserRepositories(repositories);
        } else {
          setNoRepositories(true);
        }
      }
    },
    [userName, noRepositories]
  );

  return (
    <section className="container">
      <SendForm
        handleSubmit={handleSubmit}
        loading={loading}
        setUserName={setUserName}
      />
      <section className="repositories-container">
        {!noRepositories ? (
          <>
            {userRepositories.map((repository) => (
              <Repository key={repository.id} repositoryData={repository} />
            ))}
          </>
        ) : (
          <div className="empty-list-message">
            <p>Não encontramos nenhum repositório :(</p>
          </div>
        )}
      </section>
    </section>
  );
};

export default App;
