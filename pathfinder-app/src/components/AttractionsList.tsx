import { useEffect, useState } from "react";
import { api } from "../services/api";
import { IAttraction } from "../Interfaces/AttractionsInterface";
import AttractionCard from "./AttractionCard";

const AttractionList = () => {
  const [loading, setLoading] = useState(true);
  const [attractions, setAttractions] = useState<IAttraction[]>([]);
  const [selectedAttraction, setSelectedAttraction] = useState<IAttraction>();

  const getAttractions = async () => {
    try {
      setLoading(true);
      const response = await api.get<IAttraction[]>("attractions");
      setLoading(false);
      setAttractions(response.data);
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Attractions</h2>
      <ul>
        {loading ? (
          <p>Loading...</p>
        ) : (
          attractions.map((attraction) => (
            <AttractionCard
              key={attraction.id}
              attraction={attraction}
              selectAttraction={() => selectAttraction(attraction)}
            />
          ))
        )}
      </ul>
    </div>
  );
};
export default AttractionList;
