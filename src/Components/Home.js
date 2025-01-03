import React, { useEffect, useState } from "react";
import "./css/BannerS.css";
import "./css/LatestNews.css";
import "./css/Admission.css";
import "./css/HlastSection.css";
import { NavLink } from "react-router-dom";


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


      {/* Latest New Section---------------------- */}

      <div className="container-fluid p-0">
        <h1 className="heading1 ada">Facilities</h1>

        <div className="container-fluid px-5 d-flex latest_card_box">
          <div className="lnewsleft p-3">
            <div className="card_img1">
              <img src="./images1/g1.webp" alt="" />
            </div>
            <div className="title">
              <h3 className="my-3 ak">Swimming Pool</h3>
              <p>
                A school swimming pool offers an important added value to an
                educational centre, as it promotes the values of sport among
                pupils. More information here....
              </p>
            </div>
          </div>
          <div className="lnewsmid p-3">
            <div className="card_img1">
              <img src="./images1/slide3_11zon.webp" alt="" />
            </div>
            <div className="title">
              <h3 className="my-3 ak">Skilled Staff</h3>
              <p>
                Skilled Staff is here to teach or guide for your bright carrier
                and and provides Handson in our School.Teachers play a key role
                in identifying and supporting students...
              </p>
            </div>
          </div>
          <div className="lnewsright p-3">
            <div className="card_img1">
              <img src="./images1/g3.webp" alt="" />
            </div>
            <div className="title">
              <h3 className="my-3 ak">Sports</h3>
              <p>
                The Lords Convent School won the Many Award! Remember
                how hard our school worked together on physical activity,
                healthy eating, and mental. Specialy Focus on Education and
                Sports.
              </p>
            </div>
          </div>
        </div>

        <div className="latestbutton p-2">
          <NavLink className="btn btn-lg kop viewbtn" to="/facilities">
            View all Newz
          </NavLink>
        </div>
      </div>

      {/* Admission Section ---------- */}

      <div className="container-fluid mt-3 p-0">
        <div className="container-fluid d-flex latest_card_box_ad p-0">
          <div className="ladmleft p-5 text-center">
            <div className="title">
              <h1 className="my-3 lnns">
                Our <span style={{ color: "yellow" }}>School</span>
              </h1>
              <p>
                Lords Convent School provides an Islamic learning
                environment with a commitment of using modern day teaching
                pedagogy to cultivate an advanced and comprehensive academic
                program; fully compliant with the Lords Convent curriculum of
                studies. We are a K to 8 school with a wide array of resources
                designed to foster student achievement that will prepare our
                pupils to pursue higher education and be competitive in their
                careers.
              </p>
            </div>
            <div className="readbutton p-2">
              <NavLink className="btn btn-lg bg-warning adm" to="/ourschool">
                Read More
              </NavLink>
            </div>
          </div>

          <div className="ladmright p-5 text-center">
            <div className="title">
              <h1 className="my-3 lnns">
                <span style={{ color: "yellow" }}>
                  Lords Convent School{" "}
                </span>
                Admission
              </h1>
              <p className="mt-3">
                The Lords Convent School gives a fair and equal chance
                to all applicants who fulfill the admission requirements;
                dependent upon space availability. To determine admission
                eligibility for students transferring from another school,
                official report cards as well as other supporting documents are
                submitted upon application.
              </p>
            </div>
            <div className="readbutton p-2">
              <NavLink
                className="btn btn-lg bg-warning adm mt-3"
                to="/academicprocedure"
              >
                Read More
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      {/* Home LAst Section ------------ */}

      <div className="container-fluid p-0">
        <div className="container-fluid p-0  d-flex latest_card_box_hls">
          <div className="hlsleft">
            <div className="ccc1_img">
              <img src="./images1/home1.webp" alt="" />
            </div>
            <div className="ccc2_img">
              <img src="./images1/home2.webp" alt="" />
            </div>
          </div>
          <div className="hlsmid text-center p-5">
            <div className="card_imgl my-5">
              <img src="./images1/lords_convent_logo.png" alt="" />
            </div>
            <div className="title1 my-5">
              <div className="hlstbutton1">
                <NavLink
                  className="btn btn-lg kop kophl text-nowrap"
                  to="/gallery"
                  style={{ backgroundColor: "#2E63B1", color: "white" }}
                >
                  Student Life
                </NavLink>
                <NavLink
                  className="btn btn-lg kop  kophl text-nowrap"
                  to="/academicprocedure"
                  style={{ backgroundColor: "#1D4776", color: "white" }}
                >
                  Admission
                </NavLink>
              </div>
            </div>

            <p>
              At the Lords Convent School, we believe in giving our
              students a voice and instilling in them a passion to be involved
              with their school community. It is evident that students are at
              the forefront of understanding the needs of making their school
              into an environment that promotes a safe and healthy learning
              environment. For this reason, Lords Convent School is
              committed in providing a well balanced spiritual, academic and
              social well-being experience for it’s students. Students are
              encouraged to hone their talents in order to serve and participate
              in and beyond our community.
            </p>
            <div className="title1">
              <div className="hlstbutton">
                <NavLink
                  className="btn btn-lg hls px-4 py-3"
                  to="/facilities"
                  style={{ backgroundColor: "#2E63B1", color: "white" }}
                >
                  Learn More
                </NavLink>
              </div>
            </div>
          </div>
          <div className="hlsright">
            <div className="ccc2_img">
              <img src="./images1/home3.webp" alt="" />
            </div>
            <div className="ccc1_img">
              <img src="./images1/yog.jpeg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerSection;
