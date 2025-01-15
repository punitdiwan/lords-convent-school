import React, { useState, useEffect } from 'react';
import BannerSection from "./BannerSection";
import "./css/Academisp.css";

const AcademicPRocedure = () => {

  const [directorData, setDirectorData] = useState(null);
  console.log("directorData", directorData);

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://cms.maitretech.com/lords-convent-school/items/academic_procedure?fields=*.*");
        const data = await response.json();
        console.log("datadata", data);

        const directorInfo = {
          directorName: data.data[0]?.title,
          directorMessage: data.data[0]?.academic_content,
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
      <BannerSection />

      <div className="container-fluid p-0">
        <div className="container-fluid d-flex latest_card_box_add p-0">
          <div className="admssionleft text-left">

            <div className="title">
              <h3 className="text-center" style={{ color: "black", fontWeight: "bold" }}>{directorData?.directorName || "N/A"}</h3>


              <h6
                dangerouslySetInnerHTML={{
                  __html: directorData?.directorMessage
                }}
              />


            </div>
          </div>


        </div>
      </div>
    </>
  );
};

export default AcademicPRocedure;
