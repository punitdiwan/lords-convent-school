import React, { useState, useEffect } from "react";
import "./css/board.css";
import NobleSidebar from "./NobleSidebar";

const Principal = () => {
  const [principleData, setPrincipleData] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // State for loading
  const [error, setError] = useState(null); // State for error handling

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://cms.maitretech.com/lords-convent-school/items/principle_message?fields=*.*"
        );
        const data = await response.json();
        if (data?.data?.length > 0) {
          setPrincipleData(data.data[0]); // Assuming you're fetching just the first item
        } else {
          setError("No data found");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("An error occurred while fetching the data.");
      } finally {
        setIsLoading(false); // Set loading to false after fetching
      }
    };

    fetchData();
  }, []); // Empty dependency array to run useEffect only once on component mount

  // Render loading or error states
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="container-fluid p-0">
      <div className="container-fluid d-flex latest_card_box_ad pt-0">
        <div className="ourschoolboardeft px-3 text-left">
          <h4 className="kalurr mt-3" style={{ color: "black", fontWeight: "bold" }}>
            Principle
          </h4>
          <div className="princd">
            <div className="photos">
              {principleData?.principle_image?.data?.full_url && (
                <img
                  src={principleData.principle_image.data.full_url.replace(
                    "http://",
                    "https://"
                  )}
                  alt="Principal"
                />
              )}
              <div className="phname">
                <b>Principal</b> {principleData?.principle_name || "N/A"}
              </div>
            </div>

            <div className="director_mess">
              <h5>
                <b>Principal Message -</b>
              </h5>
              <p
                dangerouslySetInnerHTML={{
                  __html: principleData?.principle_message || "No message available."
                }}
              />
            </div>
          </div>

          <p>
            <b>Dear Parents, Students, and Visitors:</b>
          </p>
          <p>
            Welcome to the Lords Convent School. As we embark on a new journey of growth and learning, we aim to take our school to the next level. At our end, we shall continue working with you for the best interests of our beloved students and our community at large.
          </p>

          <p>
            Nothing can be more effective in motivating students and sustaining success in the school than celebrating the students' accomplishments. Regularly celebrating success breeds more success. It invites every student, teacher, and parent to join the team in celebrating improvements in academics, character, and leadership.
          </p>

          <p>
            As the Lords Convent School Principal, I am more than willing to do all it takes to make our school an outstanding institution, where our students are nurtured through mind, body, and soul. Such a mission cannot be accomplished without the full support and cooperation of our parent body and community at large. Hence, should you have any suggestions or constructive feedback, do not hesitate to contact me by email or phone.
          </p>
          <p>We look forward to serving you and your children.</p>
          <p>
            <b>{principleData?.principle_name || "Principal"}</b> - Principal
          </p>
          <p>
            Vallabh Nagar, Lalghati, Bhopal - 462030 (Near Vijay Nagar)
            <br />
            School Phone: +91 92022 01174
            <br />
            Fax: +91 92022 01174
          </p>
        </div>

        <div className="ourschoolright p-4">
          <NobleSidebar />
        </div>
      </div>
    </div>
  );
};

export default Principal;
