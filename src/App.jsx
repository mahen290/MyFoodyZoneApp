import React from 'react';
import './App.css';
import FoodContainer from './components/FoodContainer';
import FoodyWallpaper from './assets/Foody_Wallpaper.jpg';
import { useEffect, useState } from 'react';

const BASE_URL = "https://localhost:9000/";

function App() {

  const [ data, setData ] = useState();
  const [ loading, setLoading ] = useState();
  const [ error,  setError ] = useState();

  async function fetchFoodData() {
    setLoading(true);

    try 
    {
      const response = await fetch(BASE_URL);
      const result = await response.json();
      console.log("FoodData_Result", result);
      setData(result);
      setLoading(false);
    }
    catch (err) 
    {
      setError("Unable To Fetch Data");
    }
  };

  useEffect( () => {
    fetchFoodData();
  }, []);

  console.log(data);

  if (error) 
    {
      return <div> { error } </div>
    }
  if (loading) 
    {
      return <div> Loading Process is Running on... </div>
    }

  return (
    <div>
      <h1> Most Welcome In My Foody Zone App </h1>
      <FoodContainer />
      <img src = { FoodyWallpaper } alt = "FoodyWallpaper" className = "bg-img" />
    </div>
  );
}

export default App;
