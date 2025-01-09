import React from "react";
import "./css/ourschool.css";
import NobleSidebar from "./NobleSidebar";

const OurSchool = () => {
  return (
    <>
      <div className="container-fluid p-0">




        <div className="container-fluid d-flex latest_card_box_ad p-0">

          <div className="ourschooleft px-5 text-left">
            {/* <h4 className="kalur text-center" style={{color:"black", fontWeight:"bold"}}>Our School</h4> */}
            <b>
              <p>
                <em>Lords Convent School.</em>
              </p>
            </b>
            <b>
              <p>
                <em>
                  Lord’s Convent School was founded by Late Shri K.L.Sahu Double M.A , LLB. Etc. and an
                  Retired A.D.I.S ( Education Department ) . School established in 1996 and it is run by Gyanoday samiti 1973 .
                  We, Lords Convent School, understand
                  that each child is a distinct individual who needs to be
                  nurtured in order to grow into a mature and responsible
                  citizen. Our academic infrastructure along with a wide range
                  of co-curricular activities help our students in the all round
                  personality development. We have a strong team of motivated
                  teachers who are always ready to accept challenges of
                  developing the potential of each and every student. Keeping in
                  view the ideas of democracy and our ancient culture, Lords Convent School
                  strives to provide a system of education most suited to the
                  needs of our society today. Stress on innovative methods of
                  teaching , opportunities for shouldering responsibilities
                  during school life, constant participation in sports and
                  co-curricular activities lend meaning to the school life.
                  Thus, the end product is the harmonious, all round developed
                  personality of our students poised on the threshold of life.
                </em>
              </p>
            </b>
            <h5>Lords Convent School is proud to offer:</h5>
            <ul className="px-3">
              <li>Lords Convent School is proud to offer:</li>
              <li>A great Indian environment for growing and learning</li>
              {/* <li>Indian Studies, CBSC, and programs</li> */}

              <li>and much more…</li>
            </ul>
            <p>
              We encourage all community members to discover the possibilities
              at the Lords Convent School!
            </p>
          </div>

          <div className="ourschoolright p-4">
            <NobleSidebar />
          </div>
        </div>
      </div>
    </>
  );
};

export default OurSchool;
