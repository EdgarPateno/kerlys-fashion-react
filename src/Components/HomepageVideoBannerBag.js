

function HomepageBannerBag() {
    return (
        <div>
            <section className="homepage-video-banner-bag pb-5">
                <div className="container-liquid">
                    <video width="100%" noControls autoPlay loop muted>
                        <source src="videos/homepage-banner-2-video-louis-vuitton-bag.mp4" type="video/mp4" />
                    </video>
                    <div className="homepage-video-banner-bag-textbox">
                        <h3 className="h1 mb-4">
                            <span className="unleash-style"> Unleash Your Style</span><br />
                            <span className="confidence">Carry Your Confidence</span>
                        </h3>
                        <a href="lv-bags-collection.html" className="btn btn-primary">SHOP BAGS</a>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default HomepageBannerBag; 