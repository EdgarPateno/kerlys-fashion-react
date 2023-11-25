import "../CSS/Footer.css";
import { Link } from "react-router-dom";
import { useRef } from "react";

function Footer() {
  const headerRef = useRef(null);

  return (
    <section className="site-footer">
      <div className="container-fluid">
        <div className="row row-cols-1 row-cols-md-4 g-4">
          <div className="customer-help col">
            <div className="card bg-transparent h-100">
              <div className="card-body">
                <h5 className="card-title">Customer Help</h5>
                <ul className="list-unstyled">
                  <li>
                    <Link
                      to="/about"
                      onClick={() =>
                        headerRef.current.scrollIntoView({ behavior: "smooth" })
                      }
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/contact"
                      onClick={() =>
                        headerRef.current.scrollIntoView({ behavior: "smooth" })
                      }
                    >
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/faq"
                      onClick={() =>
                        headerRef.current.scrollIntoView({ behavior: "smooth" })
                      }
                    >
                      FAQs
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/track-order"
                      onClick={() =>
                        headerRef.current.scrollIntoView({ behavior: "smooth" })
                      }
                    >
                      Track Your Order
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="corporate-policies col">
            <div className="card bg-transparent h-100">
              <div className="card-body">
                <h5 className="card-title">Corporate Policies</h5>
                <ul className="list-unstyled">
                  <li>
                    <Link
                      to="/shipping"
                      onClick={() =>
                        headerRef.current.scrollIntoView({ behavior: "smooth" })
                      }
                    >
                      Shipping and Cancellation
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/return"
                      onClick={() =>
                        headerRef.current.scrollIntoView({ behavior: "smooth" })
                      }
                    >
                      Return, Refund, and Exchange
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/privacy"
                      onClick={() =>
                        headerRef.current.scrollIntoView({ behavior: "smooth" })
                      }
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/tos"
                      onClick={() =>
                        headerRef.current.scrollIntoView({ behavior: "smooth" })
                      }
                    >
                      Terms of Service
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="social-media col">
            <div className="card bg-transparent h-100">
              <div className="card-body">
                <h5 className="card-title">Follow Us On Social Media</h5>
                <ul className="list-unstyled follow-us d-flex">
                  <li className="me-2">
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa fa-facebook-square"></i>
                    </a>
                  </li>
                  <li className="me-2">
                    <a
                      href="https://pinterest.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa fa-pinterest-square"></i>
                    </a>
                  </li>
                  <li className="me-2">
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa fa-twitter-square"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="friendly-support col">
            <div className="card bg-transparent h-100">
              <div className="card-body">
                <h5 className="card-title">Friendly Support</h5>
                <p className="card-text">
                  For any questions and concerns, please don't hesitate to
                  contact us below:
                </p>
                <p className="d-flex align-items-center">
                  <i className="fa fa-envelope"></i>
                  &nbsp;support@kerlysfashion.com
                </p>
                <p className="d-flex align-items-center">
                  <i className="fa fa-mobile-phone"></i>&nbsp;
                  <span className="phone-number-footer">+639123456789</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom pb-5">
        <div className="container-fluid">
          <div className="copyright-payment-icons-wrapper d-block justify-content-between align-items-center">
            <div className="copyright-footer p-3">
              <span>&copy; Copyright 2022, </span>
              <span className="site-logo-footer-bottom me-2">
                <a href="#">Kerlys Fashion LTD.</a>
              </span>
              <span className="all-rights-reserved">ALL RIGHTS RESERVED</span>
            </div>
            <div className="p-3">
              <i
                className="fa fa-cc-visa mx-1"
                id="payment-method-footer-bottom"
              ></i>
              <i
                className="fa fa-cc-amex mx-1"
                id="payment-method-footer-bottom"
              ></i>
              <i
                className="fa fa-cc-mastercard mx-1"
                id="payment-method-footer-bottom"
              ></i>
              <i
                className="fa fa-cc-discover mx-1"
                id="payment-method-footer-bottom"
              ></i>
              <i
                className="fa fa-cc-paypal mx-1"
                id="payment-method-footer-bottom"
              ></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
