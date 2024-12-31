import React from "react";
import BannerSection from "./BannerSection";
import "./css/Facility.css";

const Facilities = () => {
  return (
    <>
      <div className="container-fluid p-0">
        {/* <BannerSection /> */}

        <div className="container liscontainer">

          <div className="facilitycontent">


            {/* swimming */}
            <div className="facilitCard">
              <div className="facilimages">
                <img src="./images1/swim.webp" alt="" />
              </div>
              <div className="facontent">
                <div className="factitle">Swimming Pool</div>
                <p>A school swimming pool offers an important added value to an educational centre, as it promotes the values of sport among pupils. More information here.</p>
              </div>
            </div>



            {/* skilled */}

            <div className="facilitCard">
              <div className="facilimages">
                <img src="./images1/slide3_11zon.webp" alt="" />
              </div>
              <div className="facontent">
                <div className="factitle">Skilled Staff</div>
                <p>Skilled Staff is here to teach or guide for your bright carrier and and provides Handson in our School.Teachers play a key role in identifying and supporting students who are at risk of dropping out, especially students from vulnerable populations, such as girls ...</p>
              </div>
            </div>




            {/* sports */}
            <div className="facilitCard">
              <div className="facilimages">
                <img src="./images1/g2.webp" alt="" />
              </div>
              <div className="facontent">
                <div className="factitle">Sports</div>
                <p>Extensive and well maintained play fields of football and cricket and courts for volleyball, basketball, kabaddl, throwball and badminton me available to students. Indoor facilities of chess, caroms, table tennis etc. are also available.</p>
              </div>
            </div>




            {/* nice Infrastructure */}

            <div className="facilitCard">
              <div className="facilimages">
                <img src="./images1/DSC_2126.JPG" alt="" />
              </div>
              <div className="facontent">
                <div className="factitle">Nice Infrastructure</div>
                <p>The fact is that a good school infrastructure, with renewed spaces, makes it possible for children and youths that live in remote areas to study .A good school infrastructure makes it a good place for the children to study, which is important as the student spends maximum time in school.</p>
              </div>
            </div>




            {/* hygiene washroom */}
            <div className="facilitCard">
              <div className="facilimages">
                <img src="./images1/a2.jpeg" alt="" />
              </div>
              <div className="facontent">
                <div className="factitle">Medical Camp</div>
                <p>The medical camps are conducted by qualified doctors and nurses either employed by Hand in Hand or from reputed hospitals. Patients with mild disorders are prescribed medication during the camp and those with serious disorders are referred to the nearest primary healthcare centre.</p>
              </div>
            </div>


            {/* Good Academic */}

            <div className="facilitCard">
              <div className="facilimages">
                <img src="./images1/goda.jpeg" alt="" />
              </div>
              <div className="facontent">
                <div className="factitle">Good Academic</div>
                <p>We provide our student with good encyclopedia to reduce their encumbrance regarding any subject academically or globally. A well equipped laboratories of physics, chemistry, biology and computers for practical learning .We teach students by smart classes for active participation and deep knowledge. A good psychiatrist and counselor for students and Parents is available during school timings.</p>
              </div>
            </div>

            {/* transport facility */}

            <div className="facilitCard">
              <div className="facilimages">
                <img src="./images1/bus1.webp" alt="" />
              </div>
              <div className="facontent">
                <div className="factitle">Transport Facility</div>
                <p>The school provides transport facility to the students through Buses & Magic for transporting the students from different localities to the school and vice-versa. Students can avail the Transport facility by putting up an application. All the buses have trained driver’s and conductor’s. The school follows all the rules and regulations of M.P. Government for the buses.</p>
              </div>
            </div>



            {/* smart education fac */}

            <div className="facilitCard">
              <div className="facilimages">
                <img src="./images1/a3.jpeg" alt="" />
              </div>
              <div className="facontent">
                <div className="factitle">Smart Auditorium Hall</div>
                <p>Lords Convent School have a smart Auditorium hall for meetings or cleberating functions or festival in the school . 60+ students and faculties can appear in this Hall. </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Facilities;
