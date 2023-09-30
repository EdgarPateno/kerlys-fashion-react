import '../CSS/JewelryVideoBanner.css';
import { Link } from 'react-router-dom';
import React, { useRef } from 'react';

function JewelryVideoBanner() {

    const headerRef = useRef(null);

    return (
        <section className="jewelry-video-banner-homepage">
            <div className="container-liquid">
                <video width="100%" nocontrols="true" autoPlay loop muted>
                    <source src="./videos/jewellery-video-banner-homepage.mp4" type="video/mp4" />
                </video>
                <div className="jewelry-video-banner-homepage-textbox">
                    <h3 className="h1 mb-4">
                        <span className="unveil-radiance">Unveil Your Radiance</span>< br />
                        <span className="jewelry-obsession">#JewelryObsession</span>
                    </h3>
                    <Link to="/jewelry" onClick={() => headerRef.current.scrollIntoView({ behavior: 'smooth' })} className="btn btn-primary">SHOP JEWELRY</Link>
                </div>
            </div>
        </section>
    )
}

export default JewelryVideoBanner