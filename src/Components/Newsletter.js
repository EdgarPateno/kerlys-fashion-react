import "../CSS/Newsletter.css";
import React, { useState } from "react";

const Newsletter = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email_address: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send a POST request to your Laravel backend
    fetch("http://localhost:8000/api/subscribe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        // Handle success (you might want to show a success message to the user)
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle error (you might want to show an error message to the user)
      });
  };

  return (
    <section className="newsletter">
      <div className="container">
        <h2 className="text-center">Let's Stay Connected</h2>
        <p className="text-center">
          Don't Miss Our Promotion. Sign up to get your 20% discount off your
          purchase.
        </p>

        <form
          className="row row-cols-lg-auto g-3 justify-content-center align-items-center"
          onSubmit={handleSubmit}
        >
          <div className="row container align-items-center g-3">
            <div className="col-sm-3">
              <input
                type="text"
                className="form-control"
                placeholder="Enter first name"
                aria-label="Name"
                name="first_name"
                value={formData.first_name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-sm-3">
              <input
                type="text"
                className="form-control"
                placeholder="Enter last name"
                aria-label="Last Name"
                name="last_name"
                value={formData.last_name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-sm-3">
              <input
                type="text"
                className="form-control"
                placeholder="Enter email address"
                aria-label="Email"
                name="email_address"
                value={formData.email_address}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-sm-3">
              <button
                type="submit"
                className="btn btn-primary form-control newsletter-subscribe"
              >
                Subscribe
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
