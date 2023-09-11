import '../CSS/JewelryVideoBanner.css';

function JewelryVideoBanner() {
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
                    <a href="jewelry-collection.html" className="btn btn-primary">SHOP JEWELRY</a>
                </div>
            </div>
        </section>
    )
}

export default JewelryVideoBanner