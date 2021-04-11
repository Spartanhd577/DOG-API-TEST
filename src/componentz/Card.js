import React from "react";

export const Card = ({ dog, loading, updateDog }) => {
  if (loading) return <h1>Loading... </h1>;

  return (
    <div className="card" onClick={() => updateDog(dog.breed.id)}>
      <img src={dog.image} alt="dog" />
      <p>{dog.breed.name}</p>
    </div>
  );
};

export default Card;
