// src/components/DrinkList.tsx
import styled from "styled-components";

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 20px;
`;

const DrinkCard = styled.div`
  text-align: center;
  cursor: pointer;
`;

const DrinkImage = styled.img`
  width: 100%;
  border-radius: 10px;
`;

interface DrinkListProps {
  drinks: { idDrink: string; strDrink: string; strDrinkThumb: string }[];
  onSelect: (id: string) => void;
}

const DrinkList = ({ drinks, onSelect }: DrinkListProps) => {
  return (
    <ListContainer>
      {drinks.map((drink) => (
        <DrinkCard key={drink.idDrink} onClick={() => onSelect(drink.idDrink)}>
          <DrinkImage src={drink.strDrinkThumb} alt={drink.strDrink} />
          <p>{drink.strDrink}</p>
        </DrinkCard>
      ))}
    </ListContainer>
  );
};

export default DrinkList;
