// import Layout from "../components/Layout";
import logo from "../images/pink-saree.avif";
import greenbs from "../images/green-bs.avif";
import pewterbs from "../images/pewter-bs.avif";
import blackbs from "../images/black-bs.avif";
// import logo1 from "../images/pink_saree.webp";

import "./Home.css";
function Home() {
  return (
    <div style={{ position: "relative", top: "85px" }}>
      <div class="card text-white">
        <div className="hero-section d-flex flex-column justify-content-center align-items-center text-center border border-1">
          <button className="watch-btn">WATCH NOW</button>
        </div>
      </div>
      <h3 className="text-black text-center py-5">Featured Collections</h3>
      <div className="container">
        <div className="row justify-content-center text-center cursor">
          <div className="col-md-3">
            <a href="/catalog">
              <img src={logo} class="crd-img" alt="..." />
            </a>
            <h5 class="card-title border border-1 border-dark py-3">Bridal</h5>
          </div>
          <div className="col-md-3">
            <a href="/catalog">
              <img src={logo} class="crd-img" alt="..." />
            </a>
            <h5 class="card-title border border-1 py-3 border-dark">Silk</h5>
          </div>
          <div className="col-md-3">
            <a href="/catalog">
              <img src={logo} class="crd-img" alt="..." />
            </a>
            <h5 class="card-title border border-1 py-3 border-dark">Cotton</h5>
          </div>
          <div className="col-md-3">
            <a href="/catalog">
              <img src={logo} class="crd-img" alt="..." />
            </a>
            <h5 class="card-title border border-1 py-3 border-dark">
              Designer
            </h5>
          </div>
        </div>
      </div>
      <h3 className="text-black text-center py-5">Best Sellers</h3>
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-md-3 mb-5">
            <img
              src={logo}
              class="crd-img border border-2 border-dark border-bottom-0"
              alt="..."
            />
            <p class="card-title border border-2 border-dark ">
              Dusty Pink Taban Embroidered
            </p>
          </div>
          <div className="col-md-3 mb-5">
            <img
              src={greenbs}
              class="crd-img border border-2 border-dark border-bottom-0"
              alt="..."
            />
            <p class="card-title border border-2 border-dark">
              Lime Green Multicolor Sequin
            </p>
          </div>
          <div className="col-md-3 mb-5">
            <img
              src={pewterbs}
              class="crd-img border border-2 border-dark border-bottom-0"
              alt="..."
            />
            <p class="card-title border border-2 border-dark">
              Pewter Grey Mijwan Chikankari
            </p>
          </div>
          <div className="col-md-3 mb-5">
            <img
              src={blackbs}
              class="crd-img border border-2 border-dark border-bottom-0"
              alt="..."
            />
            <p class="card-title border border-2 border-dark">
              Black Taban Embroidered Palla Tassels Saree Set
            </p>
          </div>
          <div className="col-md-3 mb-5">
            <img
              src={logo}
              class="crd-img border border-2 border-dark border-bottom-0"
              alt="..."
            />
            <p class="card-title border border-2 border-dark">
              Dusty Pink Taban Embroidered
            </p>
          </div>
          <div className="col-md-3 mb-5">
            <img
              src={greenbs}
              class="crd-img border border-2 border-dark border-bottom-0"
              alt="..."
            />
            <p class="card-title border border-2 border-dark">
              Lime Green Multicolor Sequin
            </p>
          </div>
          <div className="col-md-3 mb-5">
            <img
              src={pewterbs}
              class="crd-img border border-2 border-dark border-bottom-0"
              alt="..."
            />
            <p class="card-title border border-2 border-dark">
              Pewter Grey Mijwan Chikankari
            </p>
          </div>
          <div className="col-md-3 mb-5">
            <img
              src={blackbs}
              class="crd-img border border-2 border-dark border-bottom-0"
              alt="..."
            />
            <p class="card-title border border-2 border-dark">
              Black Taban Embroidered Palla Tassels Saree Set
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
