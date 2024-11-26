import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";

export const loader = async () => {
  const menu = await getMenu();
  return menu;
};

const Menu = () => {
  const menu = useLoaderData();

  return (
    <div className="flex flex-wrap gap-6 justify-center items-center px-4 py-6 bg-gray-50">
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </div>
  );
};

export default Menu;
