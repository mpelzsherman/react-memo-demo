import React from "react";
import Repo from "./Repo";

const RepoList = ({ repos, limit = 30 }) => {
  console.log("rendering RepoList; limit is", limit);
  if (repos && repos.length > 0) {
    return repos
      .slice(0, limit)
      .map((repo) => <Repo repo={repo} key={repo.id} />);
  }
  return null;
};

export default RepoList;
