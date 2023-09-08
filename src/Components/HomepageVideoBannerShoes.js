import '../CSS/HomepageVideoBannerShoes.css';

function HomepageVideoBannerShoes() {
    return (
        <section className="shoes-homepage-banner-video">
            <div className="container-liquid">
                <video width="100%" no-controls autoPlay loop muted>
                    <source src="videos/homepage-video-banner-shoes.mp4" type="video/mp4" />
                </video>
                <div className="shoes-homepage-banner-video-textbox">
                    <h3 className="text-center h1 mb-4">
                        <span className="elegance">Step Into Elegance</span><br />
                        <span className="comfort">and Comfort</span>
                    </h3>
                    <div className="justify-content-center d-flex">
                        <a href="shoes-collection.html" className="btn btn-primary">SHOP LUXURY SHOES</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomepageVideoBannerShoes