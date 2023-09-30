import '../CSS/HomepageVideoBannerShoes.css';
import { Link } from 'react-router-dom';
import { useRef } from 'react';

function HomepageVideoBannerShoes() {

    const headerRef = useRef(null);

    return (
        <section className="shoes-homepage-banner-video">
            <div className="container-liquid">
                <video width="100%" nocontrols="true" autoPlay loop muted>
                    <source src="videos/homepage-video-banner-shoes.mp4" type="video/mp4" />
                </video>
                <div className="shoes-homepage-banner-video-textbox">
                    <h3 className="text-center h1 mb-4">
                        <span className="elegance">Step Into Elegance</span><br />
                        <span className="comfort">and Comfort</span>
                    </h3>
                    <div className="justify-content-center d-flex">
                        <Link to="/shoes" onClick={() => headerRef.current.scrollIntoView({ behavior: 'smooth' })} className="btn btn-primary">SHOP LUXURY SHOES</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomepageVideoBannerShoes