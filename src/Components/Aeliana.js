import React from 'react'

const Aeliana = () => {
    const showSlides = (n) => {
        let i;
        let slides = document.getElementsByClassName("aeliana-pp-Slides");
        let dots = document.getElementsByClassName("aeliana-pp");
        let captionText = document.getElementById("caption");

        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }

        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }

        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
        captionText.innerHTML = dots[slideIndex - 1].alt;
    }

    const plusSlides = (n) => {
        showSlides(slideIndex += n);
    }

    const currentSlide = (n) => {
        showSlides(slideIndex = n);
    }

    let slideIndex = 1;

    return (
        <section className="aeliana-product-page container-sm">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2 g-4">
                <div className="col">
                    <div className="card my-5">
                        <div className="container">
                            <div className="aeliana-pp-Slides">
                                <img src="/images/lv-bags-collection/aeliana/1.webp" style={{ width: '100%' }} />
                            </div>

                            <div className="aeliana-pp-Slides">
                                <img src="/images/lv-bags-collection/aeliana/2.webp" style={{ width: '100%' }} />
                            </div>

                            <div className="aeliana-pp-Slides">
                                <img src="/images/lv-bags-collection/aeliana/3.webp" style={{ width: '100%' }} />
                            </div>

                            <div className="aeliana-pp-Slides">
                                <img src="/images/lv-bags-collection/aeliana/4.webp" style={{ width: '100%' }} />
                            </div>

                            <div className="aeliana-pp-Slides">
                                <img src="/images/lv-bags-collection/aeliana/5.webp" style={{ width: '100%' }} />
                            </div>

                            <a className="prev" onClick={() => plusSlides(-1)}>❮</a>
                            <a className="next" onClick={() => plusSlides(1)}>❯</a>

                            <p>&nbsp;</p>
                            <div className="row">
                                <div className="column">
                                    <img className="aeliana-pp cursor" src="/images/lv-bags-collection/aeliana/1.webp" style={{ width: '100%' }} onClick={() => currentSlide(1)} alt="aeliana bag" />
                                </div>
                                <div className="column">
                                    <img className="aeliana-pp cursor" src="/images/lv-bags-collection/aeliana/2.webp" style={{ width: '100%' }} onClick={() => currentSlide(2)} alt="aeliana bag" />
                                </div>
                                <div className="column">
                                    <img className="aeliana-pp cursor" src="/images/lv-bags-collection/aeliana/3.webp" style={{ width: '100%' }} onClick={() => currentSlide(3)} alt="aeliana bag" />
                                </div>
                                <div className="column">
                                    <img className="aeliana-pp cursor" src="/images/lv-bags-collection/aeliana/4.webp" style={{ width: '100%' }} onClick={() => currentSlide(4)} alt="aeliana bag" />
                                </div>
                                <div className="column">
                                    <img className="aeliana-pp cursor" src="/images/lv-bags-collection/aeliana/5.webp" style={{ width: '100%' }} onClick={() => currentSlide(5)} alt="aeliana bag" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Aeliana;