import '../CSS/Newsletter.css';
import React, { useState } from 'react';

const Newsletter = () => {
    // State to store form data
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email_address: '',
    });

    // Function to handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent the default form submission behavior

        // Make an HTTP POST request to server
        try {
            const response = await fetch('http://localhost:5000/subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                // Subscription was successful
                alert('Subscription successful!');
                // Clear the form after successful submission
                setFormData({
                    first_name: '',
                    last_name: '',
                    email_address: '',
                });
            } else {
                // Handle errors here
                console.error('Subscription error:', response.statusText);
                alert('An error occurred while subscribing.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while subscribing.');
        }
    };

    return (
        <section className="newsletter">
            <div className="container">
                <h2 className="text-center">Let's Stay Connected</h2>
                <p className="text-center">Don't Miss Our Promotion. Sign up to get your 20% discount off your purchase.</p>

                <form className="row row-cols-lg-auto g-3 justify-content-center align-items-center" onSubmit={handleSubmit}>
                    <div className="row container align-items-center g-3">
                        <div className="col-sm-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter first name"
                                aria-label="Name"
                                name="first_name"
                                value={formData.first_name}
                                onChange={handleInputChange}
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
                                onChange={handleInputChange}
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
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="col-sm-3">
                            <button type="submit" className="btn btn-primary form-control newsletter-subscribe">
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