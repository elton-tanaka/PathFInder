import { Link } from "react-router-dom";
import { Dispatch, SetStateAction } from "react";

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
  return (
    <main>
      <header className="p-3 text-bg-dark">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a
              href="/"
              className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
            >
              <svg
                className="bi me-2"
                width="40"
                height="32"
                role="img"
                aria-label="Bootstrap"
              >
                <use href="#bootstrap" />
              </svg>
            </a>

            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li>
                <Link to={"/"} className="nav-link px-2 text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to={"/Create"}
                  className=" nav-link px-2 text-white hover:bg-cyan-700 duration-300 cursor-pointer"
                >
                  Register attraction
                </Link>
              </li>
            </ul>
            <div className="d-flex">
              <input
                type="search"
                className="form-control form-control-dark text-bg-dark"
                placeholder="Search..."
                aria-label="Search"
                onChange={(e) => setSearchInput(e.target.value)}
              ></input>
              <button
                type="button"
                className="btn btn-outline-light me-2"
                onClick={() => setIsSearching(!isSearching)}
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </header>
    </main>
  );
};

export default Header;
