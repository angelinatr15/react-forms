import { useState } from "react";
import GroceryList from "./GroceryList";

const Grocery = () => {
  const [foodList, setFoodList] = useState([
    {
      id: 1,
      name: "bakery",
    },
    {
      id: 2,
      name: "produce",
    },
    {
      id: 3,
      name: "poultry",
    },
    {
      id: 4,
      name: "seasoning",
    },
  ]);

  return (
    <div>
      {foodList.map((foody) => (
        <GroceryList key={foody.id} id={foody.id} name={foody.name} />
      ))}
    </div>
  );
};

export default Grocery;