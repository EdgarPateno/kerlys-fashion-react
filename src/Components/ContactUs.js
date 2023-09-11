import React from 'react'
import '../CSS/ContactUs.css'

function ContactUs() {
    return (
        <section className="contact-us-page">
            <div className="container my-5">
                <h2 className="contact-us-page-title text-center mb-5">CONTACT US</h2>
                <p>Our team is strong and efficient, and our products are of high quality, but we are not perfect. We do
                    make mistakes, but we are willing to resolve whatever it is.</p>
                <p>Please allow us to resolve your issues, and we promise that you will leave our store happy and satisfied. </p>
                <p>Kindly shoot us a message at support@patenojewellers.com or use this form below.</p>
            </div>
            <div className="row container-fluid">
                <div className="column alcoy-google-map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125840.33686483405!2d123.39946397775563!3d9.722750027973502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33abbddafece6bfb%3A0xf15a0cc4c94d0d76!2sAlcoy%2C%20Cebu!5e0!3m2!1sen!2sph!4v1664767169289!5m2!1sen!2sph"
                        width="100%" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className="column">
                    <form action="https://google.com" method="get" target="_blank">
                        <label htmlFor="fullname">Full Name</label>
                        <input type="text" id="fullname" name="fullname" placeholder="Your full name.." />
                        <label htmlFor="emailaddress">Email Address</label>
                        <input type="text" id="emailaddress" name="email" placeholder="Your email address.." required />
                        <label htmlFor="phonenumber">Phone Number</label>
                        <input type="text" id="phonenumber" name="phonenumber" placeholder="Your phone number here.." />
                        <label htmlFor="subject">Subject</label>
                        <textarea id="subject" name="subject" placeholder="Write your message.." style={{ height: "170px" }}></textarea>
                        <input className="form-control" type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </section>
    )
}

export default ContactUs;