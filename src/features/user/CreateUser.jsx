import { useState } from "react";
import Button from "../../ui/Button";
import { useDispatch } from "react-redux";
import { updateName } from "./userSlice";
import { useNavigate } from "react-router-dom";

function CreateUser() {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (!username) return;
    dispatch(updateName(username));
    navigate("/menu");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className=" flex flex-col items-center justify-center py-8"
    >
      <p className="mb-4 text-sm text-stone-600 text-center font-bold md:text-base">
        👋 Welcome! Please start by telling us your first name:
      </p>

      <input
        type="text"
        placeholder="Your first name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="input mb-8 w-60"
      />

      {username !== "" && (
        <div>
          <Button type="primary">Start ordering</Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
