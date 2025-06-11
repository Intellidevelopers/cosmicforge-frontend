import { useNavigate } from "react-router-dom";

const UseNavigateToPath = () => {
  const navigate = useNavigate();

  const takeMeTo = (path: string) => {
    navigate(path);
  };
  return takeMeTo;
};

export default UseNavigateToPath;
