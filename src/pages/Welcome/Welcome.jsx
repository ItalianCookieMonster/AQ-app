import { Button } from "../../components/ui/button";
import { Link } from "react-router-dom";

const Welcome = () => {
  // check if user info is saved in local storage
  const userData = localStorage.getItem("user-data");

  const nextStepCopy = userData
    ? "Let's make the world a better place"
    : "First we need to ask you some questions";

  const linkTo = userData ? "/auth/home" : "/form";

  return (
    <div className="text-center w-full flex flex-col gap-7">
      <h1 className="font-bold text-2xl ">Welcome to AQ</h1>
      <p className="font-semibold">{nextStepCopy}</p>
      <Link to={linkTo}>
        <Button>{`Let's go!`}</Button>
      </Link>
    </div>
  );
};
export default Welcome;
