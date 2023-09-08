import '../CSS/ShopByBrands.css';

function ShopByBrands() {
    return (
        <sections className='shop-by-brands py-5'>
            <div className="container-sm">
                <h3 className="text-center mb-4 h1">SHOP BY BRANDS</h3>
                <div className="row row-cols-2 row-cols-md-4 justify-content-center g-4">
                    <div className="col">
                        <div className="card h-100">
                            <img src="./images/shop-by-brands/louis-vuitton-gold-logo.webp" style={{ width: '150px' }} id="shop-by-brands-image" className="card-img rounded-circle mx-auto" alt="Louis Vuitton logo" />
                            <div className="card-body text-center">
                                <h5 className="card-title">Louis Vuitton Collection</h5>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <p>6100 Trusted Reviews</p>
                                <a className="btn btn-primary form-control collection-list" href="lv-bags-collection.html"
                                    role="button">EXPLORE</a>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card h-100">
                            <img src="./images/shop-by-brands/chanel-logo-64c7de2924d5b.webp" style={{ width: '150px' }} id="shop-by-brands-image" className="card-img rounded-circle mx-auto" alt="Chanel logo" />
                            <div className="card-body text-center">
                                <h5 className="card-title">Chanel Collection</h5>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <p>4580 Trusted Reviews</p>
                                <a className="btn btn-primary form-control collection-list" href="chanel-bags-collection.html"
                                    role="button">EXPLORE</a>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card h-100">
                            <img src="./images/shop-by-brands/gucci-logo-64c7de2949aee.webp" style={{ width: '150px' }} id="shop-by-brands-image" className="card-img rounded-circle mx-auto" alt="Gucci logo" />
                            <div className="card-body text-center">
                                <h5 className="card-title">Gucci Collection</h5>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <p>4200 Trusted Reviews</p>
                                <a className="btn btn-primary form-control collection-list" href="chanel-bags-collection.html"
                                    role="button">EXPLORE</a>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card h-100">
                            <img src="./images/shop-by-brands/prada-64c7de2a03fa1.webp" style={{ width: '150px' }} id="shop-by-brands-image"
                                className="card-img rounded-circle mx-auto" alt="Prada logo" />
                            <div className="card-body text-center">
                                <h5 className="card-title">Prada Collection</h5>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <p>5350 Trusted Reviews</p>
                                <a className="btn btn-primary form-control collection-list" href="lv-bags-collection.html"
                                    role="button">EXPLORE</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </sections>
    );
}

export default ShopByBrands;


