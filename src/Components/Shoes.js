import '../CSS/Shoes.css'

function Shoes() {
    return (
        <section className="shoes-collection-image-banner">
            <div className="container-liquid">
                <img src="/images/image-banners/shoes-collection-image-banner.webp" width="auto" height="auto"
                    alt="Shoes" />
                <div className="shoes-collection-image-banner-title">
                    <h2>Shoes Collection</h2>
                </div>
            </div>

            <div className="shoes-collection my-5">
                <div className="container">
                    <div className="row row-cols-2 row-cols-md-4 g-4">
                        <div className="col">
                            <a href="/sections/melisandre-product-page.html">
                                <div className="card">
                                    <img src="/images/shoes-collection/shoes-1.webp" className="card-img-top" alt="shoes" />
                                    <div className="card-body">
                                        <h3 className="card-title text-center">Melisandre</h3>
                                        <p className="card-text text-center">
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <br />
                                            <span>600 Trusted Reviews</span>
                                        </p>
                                        <h5 className="regular-price text-center">$600</h5>
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div className="col">
                            <a href="/sections/greyjoy-product-page.html">
                                <div className="card">
                                    <img src="/images/shoes-collection/shoes-2.webp" className="card-img-top" alt="shoes" />
                                    <div className="card-body">
                                        <h3 className="card-title text-center">Greyjoy</h3>
                                        <p className="card-text text-center">
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <br />
                                            <span>650 Trusted Reviews</span>
                                        </p>
                                        <h5 className="regular-price text-center">$650</h5>
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div className="col">
                            <a href="/sections/missandei-product-page.html">
                                <div className="card">
                                    <img src="/images/shoes-collection/shoes-3.webp" className="card-img-top" alt="shoes" />
                                    <div className="card-body">
                                        <h3 className="card-title text-center">Missandei</h3>
                                        <p className="card-text text-center">
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <br />
                                            <span>700 Trusted Reviews</span>
                                        </p>
                                        <h5 className="regular-price text-center">$700</h5>
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div className="col">
                            <a href="/sections/olenna-product-page.html">
                                <div className="card">
                                    <img src="/images/shoes-collection/shoes-4.webp" className="card-img-top" alt="shoes" />
                                    <div className="card-body">
                                        <h3 className="card-title text-center">Olenna</h3>
                                        <p className="card-text text-center">
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <br />
                                            <span>600 Trusted Reviews</span>
                                        </p>
                                        <h5 className="regular-price text-center">$800</h5>
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div className="col">
                            <a href="/sections/myrcella-product-page.html">
                                <div className="card">
                                    <img src="/images/shoes-collection/shoes-5.webp" className="card-img-top" alt="shoes" />
                                    <div className="card-body">
                                        <h3 className="card-title text-center">Myrcella</h3>
                                        <p className="card-text text-center">
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <br />
                                            <span>800 Trusted Reviews</span>
                                        </p>
                                        <h5 className="regular-price text-center">$800</h5>
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div className="col">
                            <a href="/sections/tyene-product-page.html">
                                <div className="card">
                                    <img src="/images/shoes-collection/shoes-6.webp" className="card-img-top" alt="shoes" />
                                    <div className="card-body">
                                        <h3 className="card-title text-center">Tyene</h3>
                                        <p className="card-text text-center">
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <br />
                                            <span>500 Trusted Reviews</span>
                                        </p>
                                        <h5 className="regular-price text-center">$600</h5>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Shoes;