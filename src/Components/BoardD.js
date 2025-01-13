import React, { useState, useEffect } from 'react';
import "./css/board.css";
import NobleSidebar from "./NobleSidebar";

const BoardD = () => {

  const [directorData, setDirectorData] = useState(null);
  console.log("directorData", directorData);

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://cms.maitretech.com/lords-convent-school/items/director_message?fields=*.*");
        const data = await response.json();
        console.log("datadata", data);

        const directorInfo = {
          directorName: data.data[0]?.director_name,
          directorMessage: data.data[0]?.director_message,
          fullUrl: data.data[0]?.director_image?.data?.full_url,
        };
        setDirectorData(directorInfo);
      } catch (error) {
        console.error('Error fetching director message:', error);
        setError('Failed to load data. Please try again later.');
      } finally {
        setIsLoading(false); // Ensure that loading state is disabled after fetch attempt
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures useEffect runs once on component mount

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      <div className="container-fluid p-0">
        <div className="container-fluid d-flex latest_card_box_ad pt-0">
          <div className="ourschoolboardeft px-3 text-left">
            <h4 className="kalurr mt-3" style={{ color: "black", fontWeight: "bold" }}>
              Board Of Director
            </h4>

            <div className="princd">
              <div className="photos">
                {directorData?.fullUrl && (
                  <img
                    src={directorData.fullUrl.replace("http://", "https://")}
                    alt={`${directorData.directorName}`}
                    className="director-image" // Add a class for image styling
                  />
                )}
                <div className="phname">
                  <b>Director</b> {directorData?.directorName || "N/A"}
                </div>
              </div>

              <div className="director_mess">
                <h5>
                  <b>Message from the Board of Directors</b>
                </h5>
                <p
                  dangerouslySetInnerHTML={{
                    __html: directorData?.directorMessage || "No message available."
                  }}
                />
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
            { /*  <p>
              The Lords Convent Board of Directors currently consists of the following
              members:
            </p> */}

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
