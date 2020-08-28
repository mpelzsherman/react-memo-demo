import React, { useState } from "react";
import "./App.css";
import { Octokit } from "@octokit/rest";
import RepoList from "./RepoList";

const octokit = new Octokit();

const App = () => {
  const fetchRepos = () => {
    octokit.repos
      .listForOrg({
        org: "octokit",
        type: "public",
      })
      .then(({ data }) => {
        setRepos(data);
      });
  };

  const [repos, setRepos] = useState([]);
  const [limit, setLimit] = useState(10);

  const handleLimitChange = (e) => {
    setLimit(Math.min(e.currentTarget.value, 30));
  };

  return (
    <div className="App">
      <input type="button" value="Fetch Repos" onClick={fetchRepos} />
      <input type="text" value={limit} onChange={handleLimitChange} />
      <RepoList repos={repos} limit={limit} />
    </div>
  );
};

export default App;
