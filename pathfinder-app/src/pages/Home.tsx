import { useState } from "react";
import AttractionsList from "../components/AttractionsList";

const Home = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1>Welcome to Pathfinder!</h1>
        </div>
      </div>
      <AttractionsList search={search} />
    </div>
  );
};

export default Home;
