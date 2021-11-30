import './App.css';
import { useEffect, useState } from 'react';
import axios from "axios";
import CocktailContainer from './components/CocktailContainer';

const cocktailApi = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita"

function App() {

  const [cocktailData, setCocktailData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setLoading(true);
    const response = await axios.get(cocktailApi);
    setCocktailData(response.data);
    setLoading(false);
  };

  return (
    <div>
      <h1>Sofjas Margarita Bar</h1>
      {!loading && <CocktailContainer cocktailData={cocktailData}/>}
    </div>

  );
}

export default App;
