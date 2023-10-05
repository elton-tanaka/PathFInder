import React, { useState } from "react";
import Modal from "react-modal";
import { IAttraction } from "../Interfaces/AttractionsInterface";

type AttractionModalProps = {
  isOpen: boolean;
  onClose: () => void;
  attraction: IAttraction;
};

const AttractionModal: React.FC<AttractionModalProps> = ({
  isOpen,
  onClose,
  attraction,
}) => {
  const [editingAttraction, setEditingAttraction] = useState(false);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setDescription(event.target.value);
  };

  const handleDeleteAttraction = () => {
    onClose();
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission here
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose}>
      {editingAttraction ? (
        <div>
          <h2>Edit Attraction</h2>
          <form onSubmit={handleSubmit}>
            <label>
              Name:
              <input
                type="text"
                value={attraction.name}
                onChange={handleNameChange}
              />
            </label>
            <br />
            <label>
              Description:
              <textarea
                value={attraction.description}
                onChange={handleDescriptionChange}
              />
            </label>
            <label>
              Location:
              <textarea
                value={attraction.location}
                onChange={handleDescriptionChange}
              />
            </label>
            <label>
              City:
              <textarea
                value={attraction.city}
                onChange={handleDescriptionChange}
              />
            </label>
            <label>
              State:
              <textarea
                value={attraction.state}
                onChange={handleDescriptionChange}
              />
            </label>
            <br />
            <button type="submit">Save</button>
            <button type="button" onClick={() => setEditingAttraction(false)}>
              Cancel
            </button>
          </form>
        </div>
      ) : (
        <div>
          <h2>Attraction</h2>
          <h1>{attraction.name}</h1>
          <h3>{attraction.location}</h3>
          <ul>
            <li>City: {attraction.city}</li>
            <li>State: {attraction.state}</li>
          </ul>
          <p>{attraction.description}</p>
          <button
            type="button"
            className="w-100 btn btn-lg btn-primary"
            onClick={() => setEditingAttraction(true)}
          >
            Edit
          </button>
          <button
            type="button"
            className="w-100 btn btn-lg btn-primary"
            onClick={handleDeleteAttraction}
          >
            Delete
          </button>
        </div>
      )}
    </Modal>
  );
};

export default AttractionModal;
