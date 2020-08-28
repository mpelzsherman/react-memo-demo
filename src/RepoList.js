import React from "react";
import Repo from "./Repo";

const RepoList = ({ repos, limit = 10 }) => {
  console.log("rendering RepoList; limit is", limit);
  const repoElements = [];
  if (repos && repos.length > 0) {
    for (let i = 0; i < limit; i++) {
      repoElements.push(<Repo repo={repos[i]} key={repos[i].id} />);
    }
    return repoElements;
  }
  return null;
};

export default RepoList;
