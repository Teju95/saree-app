// import { Link } from "react-router-dom";
import logo from "../images/manogna_logo.jpg";

export default function Header() {
  return (
    <header class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">
          <img src={logo} alt="Logo" height={50} width={50} />
          Manogna Sarees
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/catalog">
                Catalog
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
    // <header className="d-flex justify-content-between align-items-center p-3 shadow">
    //   <nav className="d-flex gap-3">
    //     <Link to="/" className="text-decoration-none">
    //       Home
    //     </Link>
    //     <Link to="/catalog" className="text-decoration-none">
    //       Catalog
    //     </Link>
    //     <Link to="/contact" className="text-decoration-none">
    //       Contact
    //     </Link>
    //   </nav>
    // </header>
  );
}
