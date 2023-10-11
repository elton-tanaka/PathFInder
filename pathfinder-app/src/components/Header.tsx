import { Link } from "react-router-dom";
import { Dispatch, SetStateAction } from "react";
import { Alert } from "react-bootstrap";
import { useState } from "react";

type HeaderProps = {
  setSearchInput: Dispatch<SetStateAction<string>>;
  searchInput: string;
  setIsSearching: Dispatch<SetStateAction<boolean>>;
  isSearching: boolean;
};

const Header: React.FC<HeaderProps> = ({
  setSearchInput,
  setIsSearching,
  isSearching,
}) => {
  const [variant, setVariant] = useState<string>("");
  const [headingText, setHeadingText] = useState<string>("");
  const [alertText, setAlertText] = useState<string>("");
  const [showAlert, setShowAlert] = useState<boolean>(false);

  return (
    <main>
      <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              className="logo-icon me-2"
              src="src/assets/logo.png"
              alt="logo"
              width={50}
              height={50}
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor01"
            aria-controls="navbarColor01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link active">
                  <Link to={"/"} className="nav-link">
                    Home
                  </Link>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">
                  <Link to={"/Create"} className="nav-link">
                    Register attraction
                  </Link>
                </a>
              </li>
            </ul>
            <div className="d-flex">
              <input
                className="form-control me-sm-2"
                type="search"
                placeholder="Search"
                onChange={(e) => setSearchInput(e.target.value)}
              />
              <button
                className="btn btn-secondary my-2 my-sm-0"
                type="button"
                onClick={() => setIsSearching(!isSearching)}
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </nav>
      {showAlert && (
        <div>
          <div>hhahahhaha</div>
          <Alert
            variant={variant}
            dismissible
            onClose={() => setShowAlert(false)}
          >
            <Alert.Heading>{headingText}</Alert.Heading>
            {alertText}
          </Alert>
        </div>
      )}
    </main>
  );
};

export default Header;
