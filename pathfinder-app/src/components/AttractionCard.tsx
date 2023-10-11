import { IAttraction } from "../Interfaces/AttractionsInterface.ts";

const AttractionCard = ({
  attraction,
  selectAttraction,
}: {
  attraction: IAttraction;
  selectAttraction: () => void;
}) => {
  return (
    <div className="col">
      <div className="card border-primary mb-3" style={{ maxWidth: "20rem" }}>
        <div className="card-header">
          <h3>{attraction.name}</h3>
        </div>
        <div className="card-body">
          <h5 className="card-title">{attraction.location}</h5>
          <p className="card-text">{attraction.description}</p>
          <button
            type="button"
            className="w-100 btn btn-lg btn-primary"
            onClick={() => selectAttraction()}
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default AttractionCard;
