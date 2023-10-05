import React, { useState } from "react";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";
import { ICreateAttraction } from "../Interfaces/AttractionsInterface";

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
    await api.post("attractions", newAttraction);
    navigate("/");
  };

  return (
    <div>
      <h2>Create Attraction</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
        <br />
        <label>
          Description:
          <textarea
            value={description}
            onChange={handleDescriptionChange}
          ></textarea>
        </label>
        <br />
        <label>
          Location:
          <textarea value={location} onChange={handleLocationChange}></textarea>
        </label>
        <br />
        <label>
          City:
          <textarea value={city} onChange={handleCityChange}></textarea>
        </label>
        <br />
        <label>
          State:
          <textarea value={state} onChange={handleStateChange}></textarea>
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};
export default Create;
