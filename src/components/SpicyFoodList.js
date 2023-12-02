import React, { useState } from "react";

const SpiceFoodList = () => {
  // Sample spicyFoods array for initial data
  const spicyFoodsData = [
    { id: 1, name: 'Spicy Chicken', heatLevel: 4, cuisine: 'American' },
    { id: 2, name: 'Sichuan Hotpot', heatLevel: 5, cuisine: 'Sichuan' },
    // Add more sample data as needed...
  ];

  // State to hold the list of spicy foods
  const [foods, setFoods] = useState(spicyFoodsData);

  // Function to generate new spicy food
  const getNewSpicyFood = () => {
    // Generate a new food object (for demonstration purposes)
    const newFood = {
      id: foods.length + 1,
      name: `New Spicy Food ${foods.length + 1}`,
      heatLevel: Math.floor(Math.random() * 5) + 1,
      cuisine: 'Random Cuisine', // You can adjust this based on your needs
    };
    return newFood;
  };

  // Handler to add new spicy food
  const handleAddFood = () => {
    const newFood = getNewSpicyFood();
    const newFoodArray = [...foods, newFood];
    setFoods(newFoodArray);
  };

  // Handler to remove spicy food by ID
  const handleLiClick = (id) => {
    const newFoodArray = foods.filter((food) => food.id !== id);
    setFoods(newFoodArray);
  };

  // Handler to update heat level of spicy food by ID
  const handleUpdateHeatLevel = (id) => {
    const newFoodArray = foods.map((food) => {
      if (food.id === id) {
        return {
          ...food,
          heatLevel: food.heatLevel + 1,
        };
      }
      return food;
    });
    setFoods(newFoodArray);
  };

  // JSX for rendering the list and button
  const foodList = foods.map((food) => (
    <li key={food.id} onClick={() => handleLiClick(food.id)}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
      <button onClick={() => handleUpdateHeatLevel(food.id)}>+1 Heat</button>
    </li>
  ));

  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foodList}</ul>
    </div>
  );
};

export default SpiceFoodList;

