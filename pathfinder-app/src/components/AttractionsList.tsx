import { useEffect, useState } from "react";
import { api } from "../services/api";
import { IAttraction } from "../Interfaces/AttractionsInterface";
import AttractionCard from "./AttractionCard";
import AttractionModal from "./AttractionModal";

const AttractionList = () => {
  const [loading, setLoading] = useState(true);
  const [attractions, setAttractions] = useState<IAttraction[]>([]);
  const [selectedAttraction, setSelectedAttraction] = useState<IAttraction>();
  const [openModal, setOpenModal] = useState(false);

  const getAttractions = async () => {
    try {
      setLoading(true);
      const res = await api.get("attractions");
      setLoading(false);
      setAttractions(res.data);
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };

  useEffect(() => {
    getAttractions();
  }, []);

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
              selectAttraction={() => {
                setSelectedAttraction(attraction);
                setOpenModal(true);
              }}
            />
          ))
        )}
      </ul>
      {openModal && selectedAttraction && (
        <AttractionModal
          isOpen={openModal}
          onClose={() => setOpenModal(false)}
          attraction={selectedAttraction}
        />
      )}
    </div>
  );
};
export default AttractionList;
