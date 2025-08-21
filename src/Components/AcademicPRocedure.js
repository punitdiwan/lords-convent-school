import React, { useState, useEffect } from 'react';
import BannerSection from "./BannerSection";
import "./css/Academisp.css";

const AcademicPRocedure = () => {

  const [AcademicPRocedure, setAcademicPRocedure] = useState(null);
  console.log("AcademicPRocedure", AcademicPRocedure);

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
      const baseUrl = process.env.REACT_APP_BASE_URL;
    const school = process.env.REACT_APP_SCHOOL;
  
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${baseUrl}/${school}/items/academic_procedure?fields=*.*`);
        const data = await response.json();
        console.log("datadata", data);

        const academicProcedureInfo = {
          AcademicPRocedureTitle: data.data[0]?.title,
          AcademicPRocedureContent: data.data[0]?.academic_content,
        };
        setAcademicPRocedure(academicProcedureInfo);
      } catch (error) {
        console.error('Error fetching director message:', error);
        setError('Failed to load data. Please try again later.');
      } finally {
        setIsLoading(false); // Ensure that loading state is disabled after fetch attempt
      }
    };

    fetchData();
  }, [baseUrl,school]); // Empty dependency array ensures useEffect runs once on component mount

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
              <h3 className="text-center" style={{ color: "black", fontWeight: "bold" }}>{AcademicPRocedure?.AcademicPRocedureTitle || "N/A"}</h3>


              <h6
                dangerouslySetInnerHTML={{
                  __html: AcademicPRocedure?.AcademicPRocedureContent
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
