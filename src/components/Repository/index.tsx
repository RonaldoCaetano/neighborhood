import React, { FC } from "react";

const Repository: FC<RepositoryProps> = ({ repositoryData }) => {
  return (
    <article key={repositoryData.id} className="repository">
      <p className="repository-content-text repository-name">
        <strong>Repository:&nbsp;</strong>
        <a
          href={repositoryData.url}
          title={repositoryData.name}
          target="_blank"
          rel="noreferrer"
        >
          {repositoryData.name}
        </a>
      </p>
      <p className="repository-content-text repository-url">
        <strong>Clone URL:&nbsp;</strong>
        <span>{repositoryData.clone_url}</span>
      </p>
    </article>
  );
};

export default Repository;
