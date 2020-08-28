import React from "react";

const Repo = ({ repo }) => {
  console.log("rendering Repo", repo.name);
  return <h2>{repo.name}</h2>;
};

// export default React.memo(Repo);
export default Repo;
