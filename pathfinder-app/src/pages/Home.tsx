import { useState } from "react";
import AttractionsList from "../components/AttractionsList";
import Header from "../components/Header";

const Home = () => {
  const [searchInput, setSearchInput] = useState("");
  const [isSearching, setIsSearching] = useState<boolean>(false);

  return (
    <div>
      <Header
        setSearchInput={setSearchInput}
        searchInput={searchInput}
        setIsSearching={setIsSearching}
        isSearching={isSearching}
      />
      <div className="row">
        <div className="col-12">
          <h1>Welcome to Pathfinder!</h1>
        </div>
      </div>
      <div>
        <div className="row row-cols-1 row-cols-md-1 mb-3 text-center">
          <AttractionsList
            searchInput={searchInput}
            isSearching={isSearching}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
