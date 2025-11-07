import saree1 from "../images/demo_saree_image.webp";
import saree2 from "../images/pink_saree.webp";
import "./Catalog.css";

export default function Catalog() {
  const baseProducts = [
    {
      id: 1,
      name: "Ivory Floral Sequin Saree Set",
      category: "COUTURE",
      price: "₹265000",
      image: saree1,
    },
    {
      id: 2,
      name: "Ivory Multicolour Sequins Floral",
      category: "COUTURE",
      price: "₹225000",
      image: saree2,
    },
    {
      id: 3,
      name: "Dusty Pink Taban Boota Saree",
      category: "COUTURE",
      price: "₹195000",
      image: saree1,
    },
    {
      id: 4,
      name: "Mint Green Taban Embroidered",
      category: "COUTURE",
      price: "₹195000",
      image: saree2,
    },
  ];
  const products = Array(4)
    .fill(baseProducts)
    .flat()
    .map((item, index) => ({ ...item, id: index + 1 }));
  return (
    <div className="container">
      <div className="row">
        <h3 className="text-center pt-4 pb-4">Sarees</h3>
        {products.map((product) => (
          <div key={product.id} className="col-12 col-sm-6 col-md-3 mb-4">
            <div className="card shadow-sm border-dark-subtle">
              <img
                src={product.image}
                className="card-img-top"
                alt={product.name}
                width={326}
                height={490}
              />
              {/* <img src={logo} className="card-img-top" alt="Saree 1" /> */}
              <div className="card-body text-center">
                <h6 className="text-muted">{product.category}</h6>
                <h5 className="card-title">{product.name}</h5>
                <p className="fw-bold p-0">{product.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
