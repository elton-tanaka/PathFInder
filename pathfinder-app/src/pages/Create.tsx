import React, { useState } from "react";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";
import { ICreateAttraction } from "../Interfaces/AttractionsInterface";
import Header from "../components/Header";

const Create = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const navigate = useNavigate();

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
    const newAttraction: ICreateAttraction = {
      name: name,
      description: description,
      location: location,
      city: city,
      state: state,
    };
    await api
      .post("attractions", newAttraction)
      .then((response) => {
        console.log("created new attraction: " + response.data);
      })
      .catch((error) => {
        console.log("error has occured when creating an attraction: " + error);
      });
    navigate("/");
  };

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
      <div className="container-md">
        <h2>Create Attraction</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Name: </label>
            <input
              className="form-controll"
              type="text"
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <br />
          <div className="mb-3">
            <label className="form-label">Description:</label>
            <textarea
              className="form-controll"
              value={description}
              onChange={handleDescriptionChange}
            ></textarea>
          </div>
          <br />
          <div className="mb-3">
            <label className="form-label">Location:</label>
            <textarea
              className="form-controll"
              value={location}
              onChange={handleLocationChange}
            ></textarea>
          </div>
          <br />
          <div className="mb-3">
            <label className="form-label">City:</label>
            <textarea
              className="form-controll"
              value={city}
              onChange={handleCityChange}
            ></textarea>
          </div>
          <br />
          <div className="mb-3">
            <label className="form-label">State:</label>
            <textarea
              className="form-controll"
              value={state}
              onChange={handleStateChange}
            ></textarea>
          </div>
          <br />
          <input className="btn btn-primary" type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};
export default Create;
