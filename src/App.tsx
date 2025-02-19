// src/App.tsx
import { useState } from "react";
import styled from "styled-components";
import { fetchDrinkDetails, fetchDrinksByIngredient } from "./api/cocktailApi";
import DrinkList from "./components/DrinkList";
import SearchBar from "./components/SearchBar";

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
`;

interface Drink {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
}

const App = () => {
  const [drinks, setDrinks] = useState<Drink[]>([]);
  const [selectedDrink, setSelectedDrink] = useState<Drink | null>(null);

  const handleSearch = async (ingredient: string) => {
    const results = await fetchDrinksByIngredient(ingredient);
    setDrinks(results);
  };

  const handleSelectDrink = async (id: string) => {
    const drinkDetails = await fetchDrinkDetails(id);
    setSelectedDrink(drinkDetails);
  };

  return (
    <Container>
      <h1>🍹 Mat & Dryckesmatchare</h1>
      <SearchBar onSearch={handleSearch} />
      {selectedDrink ? (
        <div>
          <h2>{selectedDrink.strDrink}</h2>
          <img src={selectedDrink.strDrinkThumb} alt={selectedDrink.strDrink} />
          <p>Instruktioner: {selectedDrink.strInstructions}</p>
          <button onClick={() => setSelectedDrink(null)}>Tillbaka</button>
        </div>
      ) : (
        <DrinkList drinks={drinks} onSelect={handleSelectDrink} />
      )}
    </Container>
  );
};

export default App;
