import { useState, useEffect } from "react";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";
import { ICreateAttraction } from "../Interfaces/AttractionsInterface";
import Header from "../components/Header";
import { useForm } from "react-hook-form";
import statesApi from "../services/statesApi";

const Create = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICreateAttraction>();

  const [searchInput, setSearchInput] = useState("");
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [states, setStates] = useState<string[]>([]);
  const [variant, setVariant] = useState<string>("");
  const [headingText, setHeadingText] = useState<string>("");
  const [alertText, setAlertText] = useState<string>("");
  const [showAlert, setShowAlert] = useState<boolean>(false);

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

  const fetchStates = async () => {
    const response = await statesApi.get("/estados");
    const data = response.data.map((state: { sigla: string }) => state.sigla);
    setStates(data);
  };

  const handleCreateAttraction = async (data: ICreateAttraction) => {
    await api
      .post<ICreateAttraction>("attractions", data)
      .then(() => {
        showAlertData(
          "success",
          "Success!",
          "Attraction created successfully!"
        );
        setTimeout(() => {
          navigate("/");
        }, 3000);
      })
      .catch((error) => {
        showAlertData(
          "danger",
          "Ops something went wrong!",
          "error has occured when creating an attraction: " + error
        );
      });
  };

  useEffect(() => {
    fetchStates();
  }, []);

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
      <div className="container d-flex justify-content-center">
        <form onSubmit={handleSubmit(handleCreateAttraction)}>
          <fieldset className="align-items-center flex-column row">
            <br />
            <legend>Create Attraction</legend>
            <div className="form-group has-danger">
              <label className="form-label mt-4">Name</label>
              <input
                className={
                  errors.name ? "form-control is-invalid" : "form-control"
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
                  className={
                    errors.state ? "form-select is-invalid" : "form-select"
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
                  <div className="invalid-feedback">State is Required</div>
                )}
              </div>
              <div className="form-group col">
                <label className="form-label mt-4">City</label>
                <input
                  className={
                    errors.city ? "form-control is-invalid" : "form-control"
                  }
                  placeholder="Enter City"
                  {...register("city", { required: true })}
                />
                {errors.city && (
                  <div className="invalid-feedback">City is Required</div>
                )}
              </div>
            </div>

            <div className="form-group">
              <label className="form-label mt-4">Address</label>
              <input
                className={
                  errors.location ? "form-control is-invalid" : "form-control"
                }
                placeholder="Enter Address"
                {...register("location", { required: true })}
              />
              {errors.location && (
                <div className="invalid-feedback">Address is Required</div>
              )}
            </div>
            <div className="form-group">
              <label className="form-label mt-4">Description</label>
              <textarea
                className={
                  errors.description
                    ? "form-control is-invalid"
                    : "form-control"
                }
                rows={3}
                {...register("description", { required: true, maxLength: 100 })}
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
  );
};
export default Create;
