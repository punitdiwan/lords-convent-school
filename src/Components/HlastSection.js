/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./css/HlastSection.css";

const HlastSection = () => {
  return (
    <>
      <div className="container-fluid p-0">
        <div className="container-fluid p-0  d-flex latest_card_box_hls">
          <div className="hlsleft">
            <div className="ccc1_img">
              <img src="./images/home1.jpg" alt="" />
            </div>
            <div className="ccc2_img">
              <img src="./images/home2.jpg" alt="" />
            </div>
          </div>
          <div className="hlsmid text-center p-5">
            <div className="card_img my-5">
              <img src="./images/logo.png" alt="" />
            </div>
            <div className="title1 my-5">
              <div className="hlstbutton">
                <a className="btn btn-lg kop px-3 py-2" href="" style={{ backgroundColor: "#2E63B1" }}>
                  Student Life
                </a>
                <a className="btn btn-lg kop px-3 py-2" href="" style={{ backgroundColor: "#21D4776" }}>
                  Admission
                </a>
              </div>
            </div>

            <p>
              At the Lords Convent School, we believe in giving our students a voice and instilling in them a passion to be involved with their school community. It is evident that students are at the forefront of understanding the needs of making their school into an environment that promotes a safe and healthy learning environment. For this reason, LIS is committed in providing a well balanced spiritual, academic and social well-being experience for it’s students. Students are encouraged to hone their talents in order to serve and participate in and beyond our community.
            </p>
            <div className="title1">

              <div className="hlstbutton">
                <a className="btn btn-lg hls px-4 py-3" href="" style={{ backgroundColor: "#21D4776" }}>
                  Learn More
                </a>
              </div>
            </div>
          </div>
          <div className="hlsright">
            <div className="ccc2_img">
              <img src="./images/home3.jpg" alt="" />
            </div>
            <div className="ccc1_img">
              <img src="./images/home4.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HlastSection;
