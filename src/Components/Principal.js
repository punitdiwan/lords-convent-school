import React from "react";
import NobleSidebar from "./NobleSidebar";

const Principal = () => {
  return (
    <>
      <div className="container-fluid p-0">


        <div className="container-fluid latest_card_box_ad p-5">

          <div className="ourschoolboardeft px-0 text-left">

            <div className="princd">
              <div className="photos">
                <img src="./images1/pri nc.jpeg.webp" alt="" />
                <div className="phname">
                  <b>Principal</b> - Principal name
                </div>
              </div>

              <div className="director_mess">
                <h5>
                  <b>Principal Message -</b>
                </h5>
                <p>
                  Warm Greeting from Lords Convent school family, we firmly believed
                  that school education lays the foundation for the future of
                  the students and ensure a stable. According to the words of Swami Vivekanand "Arise, awake
                  and stop not till the goal is reached" echo in my mind. The
                  School activities are planned and prepared meticulously,
                  Our mission is to produce educated smart and confident
                  citizens of India.
                </p>
              </div>
            </div>
            {/* <h4 className="kalurr" style={{color:"black", fontWeight:"bold"}}>Our Principal</h4> */}

            <p>
              <b>Dear Parents, Students, and Visitors:</b>
            </p>
            <p>
              <i>Lords Convent School</i>
            </p>
            <p>
              Welcome to the Lords Convent School. As we embark into a
              new journey of growth and learning, we will
              be able to take our school to the next level. At our end, we shall
              continue working with you for the best interests of our beloved
              students and our community at large.
            </p>

            <p>
              Nothing can be more effective in motivating the students and
              sustaining success in the school than celebrating the students’
              accomplishments. Celebrating success in the school system
              regularly breeds more success. It invites every student, teacher,
              and parent to join the team to celebrate improvements in
              academics, character, and leadership.
            </p>
            {/* <p>
              Nothing can be more effective in motivating the students and
              sustaining success in the school than celebrating the students’
              accomplishments. Celebrating success in the school system
              regularly breeds more success. It invites every student, teacher,
              and parent to join the team to celebrate improvements in
              academics, character, and leadership.
            </p> */}
            <p>
              As the Lords Convent School principal, I am more than
              willing to do all it takes to make our school an outstanding
              institution, where our students are nurtured through mind, body,
              and soul. Such a mission will not be possible to accomplish
              without the full support and cooperation of our parent body and
              community at large. Hence, should you have any suggestions or
              constructive feedback, do not hesitate to contact me by email or
              phone.
            </p>
            <p>We look forward to serving you and your children.</p>
            <p>
            </p>
            <p>
              <b>principal name, Principal -</b>
            </p>
            {/* <p>Lords Convent School</p> */}
            <p>
              Vallabh Nagar, Lalghati, Bhopal - 462030 (Near Vijay Nagar)
              <p>School Phone: +91 92022 01174 </p>
              <p>Fax: +91 92022 01174</p>
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

export default Principal;
