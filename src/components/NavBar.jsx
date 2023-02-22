import logo from "./images/signosLogo.png"
import CartWidget from "./CartWidget";
import { Link, NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="container-fluid w-100">
          <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid " >
              <a className="navbar-brand" href={'/'}>
                <img src={logo} alt="logo" width={"70%"} />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <NavLink
                      className="nav-link active"
                      aria-current="page"
                      href={'/'}
                    >
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" href={'/category/Nosotros'}>
                      Nosotros
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" href={'/category/Precios'}>
                      Precios
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" href={'/category/Contacto'}>
                      Contacto
                    </NavLink>
                  </li>
                </ul>
                <div className="col d-flex justify-content-center ">
          <CartWidget/>
        </div>
              </div>
            </div>
          </nav>
    </div>
  );
};

export default NavBar;
