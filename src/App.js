import React, { useState, useEffect } from 'react';
import Select from './componentz/Select';
import Card from './componentz/Card';
import getDog from './helpers/getDog';


const initialDog = {
  imagen: "",
  breed: {
    id: "",
    name: ""
  }
}

function App() {
  const [dog, setDog] = useState(initialDog);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    updateDog(0);
  }, []);

  const updateDog = (breedId) => {
    setLoading(true)
    getDog(breedId)
      .then((newDog) => {
        setDog(newDog);
        setLoading(false)
      })
  }

  return (
    <div className="app">
      <Select updateDog={updateDog}/>
      <Card dog={dog} updateDog={updateDog} loading={loading} />
      
    </div>
  );
}

export default App;
