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
      <h1 className="font-bold text-2xl">Welcome to AQ</h1>
      <h2 className="  text-lg bg-lime-200 border-lime-600 border-2 border-solid p-2 inline-block mx-auto rounded-lg">
        <p>
          Our main goal is to raise <span className="font-bold">awareness</span>{" "}
          about the dangers of air pollution among the public.
        </p>
        <p>
          Understanding what you breathe is key for{" "}
          <span className="font-bold">making informed decisions</span> to
          enhance your quality of life.
        </p>
        <p>
          By being informed, you can take proactive steps to{" "}
          <span className="font-bold">improve</span> your health and contribute
        </p>
        positively to the environment.
      </h2>
      <p className="font-semibold">{nextStepCopy}</p>
      <Link to={linkTo}>
        <Button>{`Let's go!`}</Button>
      </Link>
    </div>
  );
};
export default Welcome;

// problema / quien somos / como lo hemos arreglado / stack usado
