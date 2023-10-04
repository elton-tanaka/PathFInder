import { useEffect, useState } from "react";
import { IAttraction } from "../Interfaces/AttractionsInterface.ts";
import { api } from "../services/api";

const AttractionCard = ({
  attraction,
  selectAttraction,
}: {
  attraction: IAttraction;
  selectAttraction: () => void;
}) => {
  return (
    <div
      className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"
      onClick={() => selectAttraction()}
    >
      <div>
        <h2>{attraction.name}</h2>
        <p>{attraction.description}</p>
      </div>
    </div>
  );
};

export default AttractionCard;
