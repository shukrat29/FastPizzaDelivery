import CreateUser from "../features/user/CreateUser";

const Home = () => {
  return (
    <div className="">
      <h1 className="text-xl  font-semibold text-center">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      <CreateUser />
    </div>
  );
};

export default Home;
