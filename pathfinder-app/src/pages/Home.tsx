import { useState } from "react";
import AttractionsList from "../components/AttractionsList";
import Header from "../components/Header";

const Home = () => {
  const [searchInput, setSearchInput] = useState("");
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [variant, setVariant] = useState<string>("");
  const [headingText, setHeadingText] = useState<string>("");
  const [alertText, setAlertText] = useState<string>("");
  const [showAlert, setShowAlert] = useState<boolean>(false);

  return (
    <div>
      <Header
        setSearchInput={setSearchInput}
        setIsSearching={setIsSearching}
        isSearching={isSearching}
        variant={variant}
        headingText={headingText}
        alertText={alertText}
        showAlert={showAlert}
        setShowAlert={setShowAlert}
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
            setVariant={setVariant}
            setHeadingText={setHeadingText}
            setAlertText={setAlertText}
            setShowAlert={setShowAlert}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
