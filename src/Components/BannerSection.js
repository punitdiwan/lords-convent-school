import React, { useEffect, useState } from "react";
import "./css/BannerS.css";
import "./css/LatestNews.css";
import "./css/Admission.css";
import "./css/HlastSection.css";

const BannerSection = () => {
  const [slides, setSlides] = useState([]);
  const [selectedSlide, setSelectedSlide] = useState(0);
  const slideIntervalDuration = 4000; // 5 seconds

  useEffect(() => {
    // Fetch the slides data
    fetch('https://cms.maitretech.com/lords-convent-school/items/slider?fields=*.*.*')
      .then(response => response.json())
      .then(data => {
        // Assuming the slides array is in the data property
        const apiSlides = data.data || [];
        setSlides(apiSlides);
      })
      .catch(error => console.error('Error:', error));

    // Set an interval to automatically change the slide
    const slideInterval = setInterval(() => {
      setSelectedSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, slideIntervalDuration);

    // Clean up the interval on component unmount
    return () => clearInterval(slideInterval);
  }, [slides.length]);

  return (
    <>
      <div className="container-fluid p-0">
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
          <ol className="carousel-indicators">
            {slides.map((_, index) => (
              <li key={index} data-target="#carouselExampleIndicators" data-slide-to={index} className={index === selectedSlide ? 'active' : ''}></li>
            ))}
          </ol>

          <div className="carousel-inner jaimataran">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`carousel-item ${index === selectedSlide ? 'active' : ''}`}
                data-bs-interval="5000"
              >
                <img
                  src={slide.image.data.full_url?.replace('http://', 'https://')}
                  className="d-block w-100"
                  alt={`Slide ${index}`}
                />
              </div>
            ))}
          </div>

          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon jj" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon jj" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default BannerSection;
