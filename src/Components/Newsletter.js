import '../CSS/Newsletter.css';

const Newsletter = () => {
    return (
        <section className="newsletter">
            <div className="container">
                <h2 className="text-center">Let's Stay Connected</h2>
                <p className="text-center">Don't Miss Our Promotion. Sign up to get your 20% discount off your purchase.</p>

                <form className="row row-cols-lg-auto g-3 justify-content-center align-items-center" action="" target="_blank" method="get">
                    <div className="row container g-3">
                        <div className="col-sm-4">
                            <input type="text" className="form-control" placeholder="Enter full name" aria-label="City" />
                        </div>
                        <div className="col-sm-4">
                            <input type="text" className="form-control" placeholder="Enter email address" aria-label="State" />
                        </div>
                        <div className="col-sm-4">
                            <button type="submit" className="btn btn-primary form-control newsletter-subscribe">Subscribe</button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Newsletter;