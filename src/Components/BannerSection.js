import React from 'react'
import "./css/BannerS.css"
import "./css/LatestNews.css";
import "./css/Admission.css"
import "./css/HlastSection.css";




const BannerSection = () => {
  return (
    <>
      <div className="container-fluid p-0">
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>

          </ol>
          <div className="carousel-inner" role="listbox">
            <div className="carousel-item active">
              <img className="d-block slideimage" src="./images1/slide1.webp" alt="First slide" />
              <div className="carousel-caption d-none d-md-block">
                <h1><b>Lords Convent School</b></h1>
                <p><b>Lords Convent School to facilitate 21st century teaching and learning for its teachers and students.</b></p>
              </div>
            </div>
            <div className="carousel-item">
              <img className="d-block slideimage" src="./images1/slide2_11zon.webp" alt="Second slide" />
              <div className="carousel-caption d-none d-md-block">
                <h1 style={{ color: "#262624" }}><b>Dynamic Educators</b></h1>
                <p><b>Since its inception, Lords Convent School has consistently grown year after year</b></p>
              </div>
            </div>
            <div className="carousel-item">
              <img className="d-block slideimage" src="./images1/slide3_11zon.webp" alt="Third slide" />
              <div className="carousel-caption d-none d-md-block">
                <h1><b>Hands-on learning</b></h1>
                <p><b>Since its inception, Lords Convent School has consistently grown year after year and has gained a reputation of becoming a leading Muslim educational institute.</b></p>
              </div>
            </div>
            <div className="carousel-item">
              <img className="d-block slideimage" src="./images1/slide4_11zon.webp" alt="Fourt slide" />
              <div className="carousel-caption d-none d-md-block">
                <h1><b>Safe and Caring Environment</b></h1>
                <p><b>Feeling safe and cared for is what makes our school community a complete family!</b></p>
              </div>
            </div>
            <div className="carousel-item">
              <img className="d-block slideimage" src="./images1/slide5_11zon.webp" alt="Fifth slide" />
              <div className="carousel-caption d-none d-md-block">
                <h1><b>21st Century Education</b></h1>
                <p><b>Embracing state-of-the-art technology in our classrooms allows Lords Convent School to facilitate 21st century teaching and learning for its teachers and students.</b></p>
              </div>
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon jj" aria-hidden="true"></span>
            <span className="sr-only"></span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon jj" aria-hidden="true"></span>
            <span className="sr-only"></span>
          </a>
        </div>




      </div>







    </>
  )
}

export default BannerSection