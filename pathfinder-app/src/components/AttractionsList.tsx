import { useEffect, useState } from "react";
import { api } from "../services/api";
import { IAttraction } from "../Interfaces/AttractionsInterface";
import AttractionCard from "./AttractionCard";
import AttractionModal from "./AttractionModal";
import Pagination from "./Pagination";

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
  const [currentPage, setCurrentPage] = useState(1);
  const [attractionsPerPage] = useState(4);

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
  }, [isSearching]);

  const closeModal = () => {
    setOpenModal(false);
    getAttractions();
  };

  const indexOfLastAttraction = currentPage * attractionsPerPage;
  const indexOfFirstAttraction = indexOfLastAttraction - attractionsPerPage;
  const currentAttractions = attractions.slice(
    indexOfFirstAttraction,
    indexOfLastAttraction
  );

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div>
      <h2>Attractions</h2>
      <ul>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div>
            <div
              className="container py-3"
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              {currentAttractions.map((attraction) => (
                <AttractionCard
                  key={attraction.id}
                  attraction={attraction}
                  selectAttraction={() => {
                    setSelectedAttraction(attraction);
                    setOpenModal(true);
                  }}
                />
              ))}
            </div>
            <Pagination
              attractionsPerPage={attractionsPerPage}
              totalAttractions={attractions.length}
              paginate={paginate}
            />
          </div>
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
