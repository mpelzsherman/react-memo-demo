import React from "react";

const Repo = ({ repo }) => {
  console.log("rendering Repo", repo.name);
  return <h2>{repo.name}</h2>;
};

const areEqual = (prevProps, nextProps) => {
  return prevProps.repo.id === nextProps.repo.id;
};

// always re-renders
export default Repo;

// re-renders only when limit increases
// e.g. start with 30, reduce to 20, then back to 30
// export default React.memo(Repo);

// Same behavior as without areEqual
// export default React.memo(Repo, areEqual);
