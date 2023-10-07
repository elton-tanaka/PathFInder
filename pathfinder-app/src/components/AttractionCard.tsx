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
      <div
        className="card mb-4 rounded-3 shadow-sm border-primary"
        style={{
          display: "inline-block",
          margin: "10px",
          border: "1px solid #ccc",
          width: "space-200px",
        }}
      >
        <div className="card-header py-3 text-bg-primary border-primary">
          <h1 className="my-0 fw-normal">{attraction.name}</h1>
        </div>
        <div className="card-body">
          <h3 className="card-title pricing-card-title">
            {attraction.location}
          </h3>
          <ul className="list-unstyled mt-3 mb-4">
            <li>City: {attraction.city}</li>
            <li>State: {attraction.state}</li>
          </ul>
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
