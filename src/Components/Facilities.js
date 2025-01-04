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
                <img src="./images1/10.jpeg" alt="" />
              </div>
              <div className="facontent">
                <div className="factitle">Computer Lab</div>
                <p>A computer lab is a vital part of school facilities, providing students with access to technology and digital learning resources. Equipped with computers, printers, and internet connectivity, the lab supports a wide range of educational activities, from research and assignments to coding and multimedia projects. It helps students develop essential digital literacy skills, preparing them for future academic and professional challenges.</p>
              </div>
            </div>



            {/* skilled */}

            <div className="facilitCard">
              <div className="facilimages">
                <img src="./images1/13.jpeg" alt="" />
              </div>
              <div className="facontent">
                <div className="factitle">Digital Smart Class</div>
                <p>A Digital Smart Class is an advanced learning environment equipped with interactive technologies like smartboards, projectors, tablets, and online resources to enhance the teaching and learning experience. It allows teachers to present lessons in dynamic ways, integrating multimedia, simulations, and real-time information to engage students more effectively. Smart classes promote interactive learning, making complex concepts easier to understand through visuals and interactivity. This modern approach helps develop critical thinking, collaboration, and digital literacy, preparing students for a tech-driven future.</p>
              </div>
            </div>




            {/* sports */}
            <div className="facilitCard">
              <div className="facilimages">
                <img src="./images1/8.jpeg" alt="" />
              </div>
              <div className="facontent">
                <div className="factitle">Shooting</div>
                <p>Shooting facilities in schools provide students with a safe and structured environment to practice precision and focus through sports like archery or air rifle shooting. These specialized areas are typically equipped with targets, safety gear, and trained instructors to ensure proper technique and safety protocols. Shooting sports in schools help develop concentration, hand-eye coordination, discipline, and mental resilience.</p>
              </div>
            </div>




            {/* nice Infrastructure */}

            <div className="facilitCard">
              <div className="facilimages">
                <img src="./images1/1.jpeg" alt="" />
              </div>
              <div className="facontent">
                <div className="factitle">Safety and Security</div>
                <p>Safety and security are crucial elements of school facilities, ensuring that students, staff, and visitors are protected in a safe learning environment. This includes measures such as secure entry points, surveillance cameras, emergency response systems, and well-trained security personnel. Schools also implement protocols for fire drills, lockdowns, and medical emergencies to prepare for various situations.</p>
              </div>
            </div>




            {/* hygiene washroom */}
            <div className="facilitCard">
              <div className="facilimages">
                <img src="./images1/bus1.webp" alt="" />
              </div>
              <div className="facontent">
                <div className="factitle">Transportation Services</div>
                <p>The school provides transport facility to the students through Buses & Magic for transporting the students from different localities to the school and vice-versa. Students can avail the Transport facility by putting up an application. All the buses have trained driver’s and conductor’s. The school follows all the rules and regulations of M.P. Government for the buses.</p>
              </div>
            </div>


            {/* Good Academic */}

            <div className="facilitCard">
              <div className="facilimages">
                <img src="./images1/12.jpeg" alt="" />
              </div>
              <div className="facontent">
                <div className="factitle">Outdoor and Indoor Playground</div>
                <p>
                  Outdoor and indoor playgrounds are essential components of school facilities, providing students with opportunities for physical activity, social interaction, and creative play. Outdoor playgrounds typically include equipment like swings, slides, and climbing structures, encouraging children to engage in active, imaginative play while developing motor skills and teamwork.</p>
              </div>
            </div>

            {/* transport facility */}

            <div className="facilitCard">
              <div className="facilimages">
                <img src="./images1/12.jpeg" alt="" />
              </div>
              <div className="facontent">
                <div className="factitle">Sports facilities</div>
                <p>Extensive and well maintained play fields of football and cricket and courts for volleyball, basketball, kabaddl, throwball and badminton me available to students. Indoor facilities of chess, caroms, table tennis etc. are also available.</p>
              </div>
            </div>



            {/* smart education fac 

            <div className="facilitCard">
              <div className="facilimages">
                <img src="./images1/3.jpeg" alt="" />
              </div>
              <div className="facontent">
                <div className="factitle">Smart Auditorium Hall</div>
                <p>Lords Convent School have a smart Auditorium hall for meetings or cleberating functions or festival in the school . 60+ students and faculties can appear in this Hall. </p>
              </div>
            </div> */}

          </div>
        </div>
      </div>
    </>
  );
};

export default Facilities;
