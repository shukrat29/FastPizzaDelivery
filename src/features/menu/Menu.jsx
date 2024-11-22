import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";

export const loader = async () => {
  const menu = await getMenu();
  return menu;
};

const Menu = () => {
  const menu = useLoaderData();
  console.log(menu);
  return (
    <ul className="flex flex-wrap gap-4">
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
};

export default Menu;
