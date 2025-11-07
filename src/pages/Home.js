import logo from "../images/pink-saree.avif";
import greenbs from "../images/green-bs.avif";
import pewterbs from "../images/pewter-bs.avif";
import blackbs from "../images/black-bs.avif";
// import React, { useEffect, useState } from "react";

import "./Home.css";
function Home() {
  // const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   fetchUsers();
  // }, []);

  // const fetchUsers = async () => {
  //   try {
  //     const response = await fetch("http://localhost:5000/api/users");
  //     const data = await response.json();
  //     setUsers(data);
  //   } catch (error) {
  //     console.error("Error fetching users:", error);
  //   }
  // };
  return (
    <div>
      <div className="card text-white">
        <div className="hero-section d-flex flex-column justify-content-center align-items-center text-center border border-1">
          <button className="watch-btn">WATCH NOW</button>
        </div>
      </div>
      <h3 className="text-black text-center py-5">Featured Collections</h3>
      <div className="container">
        <div className="row justify-content-center text-center cursor">
          {/* data with backend node connection */}
          {/* {users.map((user) => (
            <div className="col-md-3">
              <a href="/catalog">
                <img src={logo} className="crd-img" alt="..." />
              </a>
              <h5 className="card-title border border-1 border-dark py-3">
                {user.name}
              </h5>
            </div>
          ))} */}

          <div className="col-md-3">
            <a href="/catalog">
              <img src={logo} className="crd-img" alt="..." />
            </a>
            <h5 className="card-title py-3 border border-dark-subtle">
              Bridal
            </h5>
          </div>
          <div className="col-md-3">
            <a href="/catalog">
              <img src={logo} className="crd-img" alt="..." />
            </a>
            <h5 className="card-title py-3 border border-dark-subtle">Silk</h5>
          </div>
          <div className="col-md-3">
            <a href="/catalog">
              <img src={logo} className="crd-img" alt="..." />
            </a>
            <h5 className="card-title py-3 border border-dark-subtle">
              Cotton
            </h5>
          </div>
          <div className="col-md-3">
            <a href="/catalog">
              <img src={logo} className="crd-img" alt="..." />
            </a>
            <h5 className="card-title py-3 border border-dark-subtle">
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
              className="crd-img border border-dark-subtle border-bottom-0"
              alt="..."
            />
            <p className="card-title border border-dark-subtle ">
              Dusty Pink Taban Embroidered
            </p>
          </div>
          <div className="col-md-3 mb-5">
            <img
              src={greenbs}
              className="crd-img border border-dark-subtle border-bottom-0"
              alt="..."
            />
            <p className="card-title border border-dark-subtle">
              Lime Green Multicolor Sequin
            </p>
          </div>
          <div className="col-md-3 mb-5">
            <img
              src={pewterbs}
              className="crd-img border border-dark-subtle border-bottom-0"
              alt="..."
            />
            <p className="card-title border border-dark-subtle">
              Pewter Grey Mijwan Chikankari
            </p>
          </div>
          <div className="col-md-3 mb-5">
            <img
              src={blackbs}
              className="crd-img border border-dark-subtle border-bottom-0"
              alt="..."
            />
            <p className="card-title border border-dark-subtle">
              Black Taban Embroidered Palla Tassels Saree Set
            </p>
          </div>
          <div className="col-md-3 mb-5">
            <img
              src={logo}
              className="crd-img border border-dark-subtle border-bottom-0"
              alt="..."
            />
            <p className="card-title border border-dark-subtle">
              Dusty Pink Taban Embroidered
            </p>
          </div>
          <div className="col-md-3 mb-5">
            <img
              src={greenbs}
              className="crd-img border border-dark-subtle border-bottom-0"
              alt="..."
            />
            <p className="card-title border border-dark-subtle">
              Lime Green Multicolor Sequin
            </p>
          </div>
          <div className="col-md-3 mb-5">
            <img
              src={pewterbs}
              className="crd-img border border-dark-subtle border-bottom-0"
              alt="..."
            />
            <p className="card-title border border-dark-subtle">
              Pewter Grey Mijwan Chikankari
            </p>
          </div>
          <div className="col-md-3 mb-5">
            <img
              src={blackbs}
              className="crd-img border border-dark-subtle border-bottom-0"
              alt="..."
            />
            <p className="card-title border border-dark-subtle">
              Black Taban Embroidered Palla Tassels Saree Set
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
