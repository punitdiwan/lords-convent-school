import React, { useState, useEffect } from 'react';
import "./css/Facility.css";

const Facilities = () => {
  const [facilities, setFacilities] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
      const baseUrl = process.env.REACT_APP_BASE_URL;
    const school = process.env.REACT_APP_SCHOOL;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${baseUrl}/${school}/items/facilities?fields=*.*`);
        const data = await response.json();
        console.log("data", data);

        // Check if data contains facilities and set state with it
        const facilitiesData = data.data.map(item => ({
          facilitiesTitle: item?.facilities_title,
          facilitiesContent: item?.facilities_content,
          fullUrl: item?.facilities_image?.data?.full_url,
        }));

        setFacilities(facilitiesData);
      } catch (error) {
        console.error('Error fetching facilities:', error);
        setError('Failed to load data. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [school,baseUrl]); // Empty dependency array ensures useEffect runs once on component mount

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="container-fluid p-0">
      <div className="container liscontainer">
        <div className="facilitycontent">
          {/* Loop over all facilities and display each one */}
          {facilities.length > 0 ? (
            facilities.map((facility, index) => (
              <div className="facilitCard" key={index}>
                <div className="facilimages">
                  {facility.fullUrl && (
                    <img
                      src={facility.fullUrl.replace("http://", "https://")}
                      alt={facility.facilitiesTitle}
                      className="director-image"
                    />
                  )}
                </div>
                <div className="facontent">
                  <div className="factitle">{facility.facilitiesTitle || "N/A"}</div>
                  <h6
                    dangerouslySetInnerHTML={{
                      __html: facility.facilitiesContent
                    }}
                  />
                </div>
              </div>
            ))
          ) : (
            <p>No facilities available.</p>
          )}



          {/* skilled 

          <div className="facilitCard">
            <div className="facilimages">
              <img src="./images1/27.jpeg" alt="" />
            </div>
            <div className="facontent">
              <div className="factitle">Shooting Range</div>
              <p>Shooting facilities in schools provide students with a safe and structured environment to practice precision and focus through sports like archery or air rifle shooting. These specialized areas are typically equipped with targets, safety gear, and trained instructors to ensure proper technique and safety protocols. Shooting sports in schools help develop concentration, hand-eye coordination, discipline, and mental resilience.</p>
            </div>
          </div>




          <div className="facilitCard">
            <div className="facilimages">
              <img src="./images1/8.jpeg" alt="" />
            </div>
            <div className="facontent">
              <div className="factitle">Digital Classroom</div>
              <p>A Digital Classroom is an advanced educational facility that integrates technology to enhance teaching and learning. It features interactive smartboards, computers, tablets, and high-speed internet, creating a dynamic and engaging environment for students and teachers. This modern setup not only provides students with access to vast educational content but also helps in developing crucial digital literacy skills. </p>
            </div>
          </div>





          <div className="facilitCard">
            <div className="facilimages">
              <img src="./images1/bus1.webp" alt="" />
            </div>
            <div className="facontent">
              <div className="factitle">Transportation Facilities</div>
              <p>The school provides transport facility to the students through Buses & Magic for transporting the students from different localities to the school and vice-versa. Students can avail the Transport facility by putting up an application. All the buses have trained driver’s and conductor’s. The school follows all the rules and regulations of M.P. Government for the buses.</p>
            </div>
          </div>




          <div className="facilitCard">
            <div className="facilimages">
              <img src="./images1/29.jpeg" alt="" />
            </div>
            <div className="facontent">
              <div className="factitle">Playroom</div>
              <p> Equipped with age-appropriate toys, games, and activity materials, the playroom encourages creativity, problem-solving, and teamwork among young children. It provides a safe, supportive environment where students can engage in imaginative play, develop motor skills, and improve coordination. Activities in the playroom often include building blocks, puzzles, arts and crafts, and role-playing games, all of which contribute to emotional and social growth.</p>
            </div>
          </div>



          <div className="facilitCard">
            <div className="facilimages">
              <img src="./images1/12.jpeg" alt="" />
            </div>
            <div className="facontent">
              <div className="factitle">Big Playground</div>
              <p> A Big Playground of 78,000 square feet is an exceptional facility that provides students with ample space for physical activities, sports, and outdoor recreation. This expansive area allows for a variety of activities such as football, basketball, cricket, athletics, and other team sports, promoting physical fitness, teamwork, and a healthy lifestyle. Additionally, the playground serves as a space for outdoor events, sports meets, and school functions, fostering school spirit and a sense of community. </p>
            </div>
          </div>


          <div className="facilitCard">
            <div className="facilimages">
              <img src="./images1/28.jpeg" alt="" />
            </div>
            <div className="facontent">
              <div className="factitle">Indoor Playground</div>
              <p> The Indoor Playground is equipped with various age-appropriate play structures, such as climbing walls, slides, ball pits, and interactive games, designed to encourage physical activity, motor skill development, and social interaction. It serves as an ideal environment for younger children to explore and engage in imaginative play, while also offering a controlled, supervised space for physical exercise and fun. The indoor playground allows students to burn off energy and develop important skills like coordination, balance, and teamwork, even when outdoor play is not possible. </p>
            </div>
          </div>


          <div className="facilitCard">
            <div className="facilimages">
              <img src="./images1/12.jpeg" alt="" />
            </div>
            <div className="facontent">
              <div className="factitle">Extracurricular Activity</div>
              <p>Extracurricular Activities  are essential for the holistic development of students, offering opportunities beyond the standard curriculum to explore personal interests, talents, and passions. By participating in extracurriculars, students can develop key life skills such as teamwork, creativity, and communication. These activities also  allowing students to build relationships,  and engage with peers outside of the classroom. Extracurricular activities help students discover and refine their abilities, boosting self-confidence and preparing them for future academic and career challenges. </p>
            </div>
          </div>




          <div className="facilitCard">
            <div className="facilimages">
              <img src="./images1/30.jpeg" alt="" />
            </div>
            <div className="facontent">
              <div className="factitle">Sports And Game</div>
              <p>Extensive and well maintained play fields of football and cricket and courts for volleyball, basketball, kabaddl, throwball and badminton me available to students. Indoor facilities of chess, caroms, table tennis etc. are also available.</p>
            </div>
          </div>


          <div className="facilitCard">
            <div className="facilimages">
              <img src="./images1/10.jpeg" alt="" />
            </div>
            <div className="facontent">
              <div className="factitle">Computer Lab</div>
              <p>A computer lab is a vital part of school facilities, providing students with access to technology and digital learning resources. Equipped with computers, printers, and internet connectivity, the lab supports a wide range of educational activities, from research and assignments to coding and multimedia projects. It helps students develop essential digital literacy skills, preparing them for future academic and professional challenges.</p>
            </div>
          </div>

          <div className="facilitCard">
            <div className="facilimages">
              <img src="./images1/2.jpeg" alt="" />
            </div>
            <div className="facontent">
              <div className="factitle">Experienced Faculty</div>
              <p>Our Experienced Faculty is cornerstone of our school, as they play a crucial role in shaping students' academic and personal development. Our Teachers with years of experience bring a wealth of knowledge, expertise, and a deep understanding of diverse learning styles. Their ability to design effective lesson plans, provide individualized attention, and create an engaging classroom environment enhances the overall learning experience.</p>
            </div>
          </div>


          <div className="facilitCard">
            <div className="facilimages">
              <img src="./images1/3.jpeg" alt="" />
            </div>
            <div className="facontent">
              <div className="factitle">Interactive Learning</div>
              <p>Interactive Learning in our school involves the use of innovative teaching methods and technology to actively engage students in the learning process. This approach encourages students to participate directly through discussions, hands-on activities, multimedia tools, and digital platforms. Instead of passively receiving information, students are encouraged to explore, collaborate, and problem-solve, which fosters critical thinking and a deeper understanding of the subject matter. </p>
            </div>
          </div>

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
  );
};

export default Facilities;
