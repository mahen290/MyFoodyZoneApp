import React from 'react';
import './App.css';
import FoodContainer from './components/FoodContainer';
import FoodyWallpaper from './assets/Foody_Wallpaper.jpg';
import { useEffect, useState } from 'react';

const BASE_URL = "https://localhost:9000";

function App() 
{

    const [ data, setData ] = useState(BASE_URL);
    const [ loading, setLoading ] = useState();
    const [ error,  setError ] = useState();
    const [ search, setSearch ] = useState();

    async function fetchFoodData() 
    {
        setLoading(true);

        try 
        {
            const response = await fetch();
            const result = await response.json();
            console.log("Result", result);
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
      },[]);

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
      <FoodContainer setSearch = { search } />
      <img src = { FoodyWallpaper } alt = "FoodyWallpaper" className = "bg-img" />
    </div>
  );
}

export default App;