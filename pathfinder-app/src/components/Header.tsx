import { Link } from "react-router-dom";

const Header = () => {
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
                <a href="/" className="nav-link px-2 text-white">
                  Home
                </a>
                <Link
                  to={"/"}
                  className="bg-cyan-600 py-4 px-16 rounded-md text-white hover:bg-cyan-700 duration-300 cursor-pointer"
                >
                  Home
                </Link>
              </li>
              <li>
                <a href="/Create" className="nav-link px-2 text-white">
                  Register attraction
                </a>
                <Link
                  to={"/Create"}
                  className="bg-cyan-600 py-4 px-16 rounded-md text-white hover:bg-cyan-700 duration-300 cursor-pointer"
                >
                  Register attraction
                </Link>
              </li>
            </ul>

            <form
              className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
              role="search"
            >
              <input
                type="search"
                className="form-control form-control-dark text-bg-dark"
                placeholder="Search..."
                aria-label="Search"
              ></input>
            </form>
            <button type="button" className="btn btn-outline-light me-2">
              Search
            </button>
          </div>
        </div>
      </header>
    </main>
  );
};

export default Header;
