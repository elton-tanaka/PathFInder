import { useEffect, useState } from "react";
import { api } from "../services/api";
import { IAttraction } from "../Interfaces/AttractionsInterface";
import AttractionCard from "./AttractionCard";
import AttractionModal from "./AttractionModal";

type AttractionListProps = {
  searchInput: string;
  isSearching: boolean;
};

const AttractionList: React.FC<AttractionListProps> = ({
  searchInput,
  isSearching,
}) => {
  const [loading, setLoading] = useState(true);
  const [attractions, setAttractions] = useState<IAttraction[]>([]);
  const [selectedAttraction, setSelectedAttraction] = useState<IAttraction>();
  const [openModal, setOpenModal] = useState(false);
  const [page, setPage] = useState(0);

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

  const searchAttractions = async () => {
    try {
      setLoading(true);
      const response = await api.get(`attractions/search?`, {
        params: {
          search: searchInput,
          page: page,
          total: 4,
        },
      });

      setLoading(false);
      setAttractions(response.data);
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };

  useEffect(() => {
    if (searchInput.length > 0) {
      console.log("searching...");
      searchAttractions();
    } else {
      getAttractions();
      console.log("normal ass");
    }
  }, [isSearching, page]);

  const closeModal = () => {
    setOpenModal(false);
    getAttractions();
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
          closeModal={() => closeModal()}
          onClose={() => {
            setOpenModal(false);
          }}
          attraction={selectedAttraction}
        />
      )}
    </div>
  );
};
export default AttractionList;
