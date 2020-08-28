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
        setRepos(data.sort((r1, r2) => (r1.name > r2.name ? 1 : -1)));
      });
  };

  const [repos, setRepos] = useState([]);
  const [limit, setLimit] = useState(10);

  const handleLimitChange = (e) => {
    setLimit(Math.min(e.currentTarget.value, 30));
  };

  return (
    <div className="App">
      <div className={"controls"}>
        <input type="button" value="Fetch Repos" onClick={fetchRepos} />
        <h2>Limit:</h2>
        <input type="text" value={limit} onChange={handleLimitChange} />
      </div>
      <RepoList repos={repos} limit={limit} />
    </div>
  );
};

export default App;
