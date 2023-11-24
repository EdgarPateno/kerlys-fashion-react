import { Link } from "react-router-dom";
import "../CSS/OurBrands.css";
import { useRef } from "react";

function OurBrands() {
  const headerRef = useRef(null);

  return (
    <section className="shop-by-brands collection-list mb-5">
      <div className="container-sm">
        <h3 className="text-center my-5">BRANDS WE CARRY</h3>
        <div className="row row-cols-2 row-cols-md-4 justify-content-center g-4">
          <div className="col">
            <div className="card h-100">
              <img
                src="/images/our-brands/louis-vuitton-gold-logo.webp"
                width="200"
                height="auto"
                id="shop-by-brands-logo"
                className="card-img rounded-circle"
                alt="Louis Vuitton logo"
              />
              <div className="card-body text-center">
                <h5 className="card-title">Louis Vuitton Collection</h5>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <p>6100 Trusted Reviews</p>
                <Link
                  className="btn btn-primary form-control collection-list"
                  to="/lv-bags"
                  onClick={() =>
                    headerRef.current.scrollIntoView({ behavior: "smooth" })
                  }
                  role="button"
                >
                  EXPLORE
                </Link>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card h-100">
              <img
                src="/images/our-brands/chanel-logo-64c7de2924d5b.webp"
                width="200"
                height="auto"
                id="shop-by-brands-logo"
                className="card-img rounded-circle"
                alt="Chanel logo"
              />
              <div className="card-body text-center">
                <h5 className="card-title">Chanel Collection</h5>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <p>4580 Trusted Reviews</p>
                <Link
                  className="btn btn-primary form-control collection-list"
                  to="/chanel-bags"
                  onClick={() =>
                    headerRef.current.scrollIntoView({ behavior: "smooth" })
                  }
                  role="button"
                >
                  EXPLORE
                </Link>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card h-100">
              <img
                src="/images/our-brands/gucci-logo-64c7de2949aee.webp"
                width="200"
                height="auto"
                id="shop-by-brands-logo"
                className="card-img rounded-circle"
                alt="Gucci logo"
              />
              <div className="card-body text-center">
                <h5 className="card-title">Gucci Collection</h5>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <p>4200 Trusted Reviews</p>
                <Link
                  className="btn btn-primary form-control collection-list"
                  to="/gucci"
                  onClick={() =>
                    headerRef.current.scrollIntoView({ behavior: "smooth" })
                  }
                  role="button"
                >
                  EXPLORE
                </Link>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card h-100">
              <img
                src="/images/our-brands/prada-64c7de2a03fa1.webp"
                width="200"
                height="auto"
                id="shop-by-brands-logo"
                className="card-img rounded-circle"
                alt="Prada logo"
              />
              <div className="card-body text-center">
                <h5 className="card-title">Prada Collection</h5>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <p>5350 Trusted Reviews</p>
                <Link
                  className="btn btn-primary form-control collection-list"
                  to="/prada"
                  onClick={() =>
                    headerRef.current.scrollIntoView({ behavior: "smooth" })
                  }
                  role="button"
                >
                  EXPLORE
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurBrands;
