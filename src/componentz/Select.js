import React, { useState, useEffect } from "react";
import getBreeds from "../helpers/getBreeds";

const Select = ({ updateDog }) => {
  const initialBreeds = [
    {
      id: 1,
      name: "Boxer",
    },
    {
      id: 2,
      name: "Husky",
    },
  ];
  const [breeds, setBreeds] = useState(initialBreeds);

  useEffect(() => {
    updateBreeds();
  }, []);

  const updateBreeds = () => {
    getBreeds().then((newBreeds) => {
      setBreeds(newBreeds);
    });
  };

  return (
    <div>
      <select onChange={(a) => updateDog(a.target.value)}>
        {breeds.map((breed) => (
          <option value={breed.id} key={breed.id}>
            {breed.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
