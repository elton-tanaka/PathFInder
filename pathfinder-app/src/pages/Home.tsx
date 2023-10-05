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
        setIsSearching={setIsSearching}
        isSearching={isSearching}
      />
      <div className="row">
        <div className="col-12">
          <h1>Welcome to Pathfinder!</h1>
        </div>
      </div>
      <AttractionsList searchInput={searchInput} isSearching={isSearching} />
    </div>
  );
};

export default Home;
