import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer className="bg-dark text-white text-center py-4 mt-10">
        <div className="container">
          <div className="row text-center py-3">
            <div className="col-lg-3 col-sm-3 col-xs-3">
              <Link className="nav-link active" to="/">
                Home
              </Link>
            </div>
            <div className="col-lg-3 col-sm-3 col-xs-3">
              <Link className="nav-link" to="/catalog">
                Catalog
              </Link>
            </div>
            <div className="col-lg-3 col-sm-3 col-xs-3">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </div>
          </div>
          <div className="footer_copyright py-3">
            <p>© 2025 Manogna Sarees. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
