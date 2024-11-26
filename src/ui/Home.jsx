import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import Button from "./Button";

const Home = () => {
  const username = useSelector((state) => state.user.username);
  return (
    <div className="py-10">
      <h1 className="text-xl  font-semibold text-center">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          From our kitchen to your home, effortlessly.
        </span>
      </h1>
      {username === "" ? (
        <CreateUser />
      ) : (
        <Button type="round" to="/menu">
          Continue ordering, {username}
        </Button>
      )}
    </div>
  );
};

export default Home;
