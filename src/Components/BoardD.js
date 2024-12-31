import React from "react";
import "./css/board.css";
import NobleSidebar from "./NobleSidebar";

const BoardD = () => {
  return (
    <>
      <div className="container-fluid p-0">


        <div className="container-fluid d-flex latest_card_box_ad pt-0">
          <div className="ourschoolboardeft px-3 text-left">
            <h4 className="kalurr mt-3" style={{ color: "black", fontWeight: "bold" }}>Board Of Director</h4>

            <div className="princd">
              <div className="photos">
                <img src="./images1/dire ctor.webp" alt="" />
                <div className="phname">
                  <b>Director</b> - Director name
                </div>
              </div>

              <div className="director_mess">
                <h5>
                  <b>Director Message -</b>
                </h5>
                <p>
                  Dear Parent & Students, It gives me great pleasure to welcome
                  you to Lords Convent , We follow a rigorous programme that is based
                  upon the best educational practices, highly progressive and
                  recognized world-wide; and one that creates conditions for
                  students to maximize their potential at an internationally
                  competitive level. highly qualified and well-trained teachers.
                  I welcome you to be a part of Lords Convent family!
                </p>
              </div>


            </div>
            <p>
              <b>
                The Board of Directors is the main governing body of the
                Lords Convent school , the school administration, establishes
                strategic direction, financial resources, reviews policies, and
                responds to community needs. The school is committed to
                inculcating in all our students; strong ethical valued of
                integrity, respect and discipline as well as clarity in thought
                and decision-making ability, as a life-long process. In order to
                achieve all this, We follow a rigorous programme that is based
                upon the best educational practices,  Our state-of-the-art infrastructure, coupled
                with highly qualified and well-trained teachers, ensures that
                the students at Lords Convent school should be able to gain an enriching
                experience. Furthermore, it has been one of my quests in life to
                make high quality education available; accessible through the
                latest educational technology. The mission of the school is to
                develop responsible global citizens and leaders through academic
                excellence, We will be the foundation for a new generation of
                leaders and innovators, who will continue to pave the way for a
                better and brighter future for our world. The greatest strength
                of Lords Convent school is the high quality programmes and transparency in
                its system. We are fortunate to have a school community which
                includes talented teachers and supportive parents who work
                together to make Lords Convent school , an ideal place for our motivated
                students to learn and grow. We are always open to new ideas,
                inquiries and feedback, from all.  I welcome you to be a part of Lords Convent school
                family!
              </b>
            </p>
            <p>
              The Lords Convent Board of Directors currently consists of the following
              members:
            </p>
            <table className="table table-bordered">
              <thead style={{ backgroundColor: "#1D4776", color: "white" }}>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Position</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Director name</td>
                  <td>Director</td>
                </tr>
                <tr>
                  <td>Principal name</td>
                  <td>Principal</td>
                </tr>

                {/* <tr>
                  <td>Mr. John Doe</td>
                  <td>Director (LMM Representative)</td>
                </tr>
                <tr>
                  <td>Mr. John Doe</td>
                  <td> Director (Community Representative)</td>
                </tr>
                <tr>
                  <td>Mr. John Doe</td>
                  <td>Director (Community Representative)</td>
                </tr> */}
              </tbody>
            </table>
          </div>

          <div className="ourschoolright p-4">
            <NobleSidebar />
          </div>
        </div>
      </div>
    </>
  );
};

export default BoardD;
