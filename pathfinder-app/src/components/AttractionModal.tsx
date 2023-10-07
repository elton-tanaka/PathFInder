import React, { useState } from "react";
import Modal from "react-modal";
import { IAttraction } from "../Interfaces/AttractionsInterface";
import { api } from "../services/api";

type AttractionModalProps = {
  isOpen: boolean;
  onClose: () => void;
  attraction: IAttraction;
  closeModal: () => void;
};

const AttractionModal: React.FC<AttractionModalProps> = ({
  isOpen,
  onClose,
  attraction,
  closeModal,
}) => {
  const [editingAttraction, setEditingAttraction] = useState(false);
  const [name, setName] = useState(attraction.name);
  const [description, setDescription] = useState(attraction.description);
  const [location, setLocation] = useState(attraction.location);
  const [city, setCity] = useState(attraction.city);
  const [state, setState] = useState(attraction.state);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setDescription(event.target.value);
  };

  const handleLocationChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setLocation(event.target.value);
  };

  const handleCityChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCity(event.target.value);
  };

  const handleStateChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setState(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const UpdatedAttraction: IAttraction = {
      id: attraction.id,
      name: name,
      description: description,
      location: location,
      city: city,
      state: state,
    };
    await api
      .put(`attractions/${attraction.id}`, UpdatedAttraction)
      .then((response) => {
        console.log("updated attraction: " + response.data);
        closeModal();
      })
      .catch((error) => {
        console.log("error has occured when updating an attraction: " + error);
      });
  };

  const handleDeleteAttraction = async () => {
    await api
      .delete(`/attractions/${attraction.id}`)
      .then((response) => {
        //todo aparecer toast de confirmaçao
        closeModal();
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });

    onClose();
  };

  return (
    <div className="modal fade">
      <div className="modal-dialog">
        <div className="modal-content">
          <Modal isOpen={isOpen} onRequestClose={onClose}>
            {editingAttraction ? (
              <div>
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Edit Attraction</h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <form onSubmit={handleSubmit}>
                      <label>
                        Name:
                        <input
                          type="text"
                          defaultValue={attraction.name}
                          onChange={handleNameChange}
                        />
                      </label>
                      <br />
                      <label>
                        Description:
                        <textarea
                          defaultValue={attraction.description}
                          onChange={handleDescriptionChange}
                        />
                      </label>
                      <label>
                        Location:
                        <textarea
                          defaultValue={attraction.location}
                          onChange={handleLocationChange}
                        />
                      </label>
                      <label>
                        City:
                        <textarea
                          defaultValue={attraction.city}
                          onChange={handleCityChange}
                        />
                      </label>
                      <label>
                        State:
                        <textarea
                          defaultValue={attraction.state}
                          onChange={handleStateChange}
                        />
                      </label>
                      <br />
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-bs-dismiss="modal"
                          onClick={() => setEditingAttraction(false)}
                        >
                          Close
                        </button>
                        <button type="submit" className="btn btn-primary">
                          Save changes
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Attraction</h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <h1>{attraction.name}</h1>
                    <h3>{attraction.location}</h3>
                    <ul>
                      <li>City: {attraction.city}</li>
                      <li>State: {attraction.state}</li>
                    </ul>
                    <p>{attraction.description}</p>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                      onClick={() => setEditingAttraction(true)}
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={handleDeleteAttraction}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            )}
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default AttractionModal;
