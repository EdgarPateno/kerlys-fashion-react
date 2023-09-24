import '../CSS/HomepageVideoBannerBag.css';
import { Link } from 'react-router-dom';
import React, { useRef } from 'react';

function HomepageVideoBannerBag() {

    const headerRef = useRef(null);

    return (
        <section className="homepage-video-banner-bag">
            <div className="container-liquid">
                <video width="100%" nocontrols="true" autoPlay loop muted>
                    <source src="videos/homepage-banner-2-video-louis-vuitton-bag.mp4" type="video/mp4" />
                </video>
                <div className="homepage-video-banner-bag-textbox">
                    <h3 className="h1 mb-4">
                        <span className="unleash-style"> Unleash Your Style</span><br />
                        <span className="confidence">Carry Your Confidence</span>
                    </h3>
                    <Link to="lv-bags" onClick={() => headerRef.current.scrollIntoView({ behavior: 'smooth' })} className="btn btn-primary">SHOP BAGS</Link>
                </div>
            </div>
        </section>
    );
}

export default HomepageVideoBannerBag; 