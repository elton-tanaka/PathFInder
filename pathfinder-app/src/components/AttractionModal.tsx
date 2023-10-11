import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { IAttraction } from "../Interfaces/AttractionsInterface";
import { api } from "../services/api";
import { useForm } from "react-hook-form";
import statesApi from "../services/statesApi";

type AttractionModalProps = {
  isOpen: boolean;
  onClose: () => void;
  attraction: IAttraction;
  closeModal: () => void;
  setVariant: React.Dispatch<React.SetStateAction<string>>;
  setHeadingText: React.Dispatch<React.SetStateAction<string>>;
  setAlertText: React.Dispatch<React.SetStateAction<string>>;
  setShowAlert: React.Dispatch<React.SetStateAction<boolean>>;
};

const AttractionModal: React.FC<AttractionModalProps> = ({
  isOpen,
  onClose,
  attraction,
  closeModal,
  setVariant,
  setHeadingText,
  setAlertText,
  setShowAlert,
}) => {
  const [editingAttraction, setEditingAttraction] = useState(false);
  const [states, setStates] = useState<string[]>([]);

  function showAlertData(
    variant: string,
    headingText: string,
    alertText: string
  ) {
    setVariant(variant);
    setHeadingText(headingText);
    setAlertText(alertText);
    setShowAlert(true);
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IAttraction>();

  const fetchStates = async () => {
    const response = await statesApi.get("/estados");
    const data = response.data.map((state: { sigla: string }) => state.sigla);
    setStates(data);
  };

  const handleEditAttraction = async (data: IAttraction) => {
    await api
      .put(`attractions/${attraction.id}`, data)
      .then(() => {
        showAlertData("success", "Success!", "Attraction edited successfully!");
        closeModal();
      })
      .catch((error) => {
        showAlertData(
          "danger",
          "Ops something went wrong!",
          "error has occured when editing an attraction: " + error
        );
      });
  };

  const handleDeleteAttraction = async () => {
    await api
      .delete(`/attractions/${attraction.id}`)
      .then(() => {
        showAlertData(
          "success",
          "Success!",
          "Attraction deleted successfully!"
        );
        closeModal();
      })
      .catch((error) => {
        showAlertData(
          "danger",
          "Ops something went wrong!",
          "error has occured when deleting an attraction: " + error
        );
      });

    onClose();
  };

  useEffect(() => {
    fetchStates();
  }, []);

  return (
    <div className="modal">
      <div className="modal-dialog" role="document">
        <Modal
          isOpen={isOpen}
          onRequestClose={onClose}
          style={{
            overlay: {
              backgroundColor: "rgba(17, 17, 17, 0.7)",
            },
            content: {
              top: "50%",
              left: "50%",
              right: "auto",
              bottom: "auto",
              marginRight: "-50%",
              transform: "translate(-50%, -50%)",
              outline: "none",
            },
          }}
        >
          {editingAttraction ? (
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
                <form onSubmit={handleSubmit(handleEditAttraction)}>
                  <fieldset className="align-items-center flex-column row">
                    <br />
                    <legend>Edit Attraction</legend>
                    <div className="form-group has-danger">
                      <label className="form-label mt-4">Name</label>
                      <input
                        defaultValue={attraction.name}
                        className={
                          errors.name
                            ? "form-control is-invalid"
                            : "form-control"
                        }
                        placeholder="Enter name"
                        {...register("name", { required: true })}
                      />

                      {errors.name && (
                        <div className="invalid-feedback">Name is Required</div>
                      )}
                    </div>
                    <div className="row">
                      <div className="form-group col-md-4">
                        <label className="form-label mt-4">State</label>
                        <select
                          defaultValue={attraction.state}
                          className={
                            errors.state
                              ? "form-select is-invalid"
                              : "form-select"
                          }
                          {...register("state", { required: true })}
                        >
                          <option value="">Select State</option>
                          {states.map((state) => (
                            <option key={state} value={state}>
                              {state}
                            </option>
                          ))}
                        </select>
                        {errors.state && (
                          <div className="invalid-feedback">
                            State is Required
                          </div>
                        )}
                      </div>
                      <div className="form-group col">
                        <label className="form-label mt-4">City</label>
                        <input
                          defaultValue={attraction.city}
                          className={
                            errors.city
                              ? "form-control is-invalid"
                              : "form-control"
                          }
                          placeholder="Enter City"
                          {...register("city", { required: true })}
                        />
                        {errors.city && (
                          <div className="invalid-feedback">
                            City is Required
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="form-label mt-4">Address</label>
                      <input
                        defaultValue={attraction.location}
                        className={
                          errors.location
                            ? "form-control is-invalid"
                            : "form-control"
                        }
                        placeholder="Enter Address"
                        {...register("location", { required: true })}
                      />
                      {errors.location && (
                        <div className="invalid-feedback">
                          Address is Required
                        </div>
                      )}
                    </div>
                    <div className="form-group">
                      <label className="form-label mt-4">Description</label>
                      <textarea
                        defaultValue={attraction.description}
                        className={
                          errors.description
                            ? "form-control is-invalid"
                            : "form-control"
                        }
                        rows={3}
                        {...register("description", {
                          required: true,
                          maxLength: 100,
                        })}
                      ></textarea>
                      {errors.description && (
                        <div className="invalid-feedback">
                          Description is Required or is too long
                        </div>
                      )}
                    </div>
                    <br />
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </fieldset>
                </form>
              </div>
            </div>
          ) : (
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Attraction</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true"></span>
                </button>
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
          )}
        </Modal>
      </div>
    </div>
  );
};

export default AttractionModal;
