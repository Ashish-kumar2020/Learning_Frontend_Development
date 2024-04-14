import useGithubData from "../Hooks/useGithubData";

const Github = () => {
  const githubUser = useGithubData();
  return <div>GithubFollowers: {githubUser.followers} </div>;
};

export default Github;
