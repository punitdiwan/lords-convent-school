import React from 'react'
import useSWR from "swr";
import axios from "axios";
import "../Components/css/Gallery.css"

const Gallery = () => {
    const fetcher = async (url) => {
        const response = await axios.get(url);
        return response.data;
    };

    // Replace API_ENDPOINT with the actual API endpoint
    const API_ENDPOINT = "https://cms.maitretech.com/lords-convent-school/items/gallery?fields=*.*.*";
    const { data, error } = useSWR(API_ENDPOINT, fetcher);


    if (error) {
        return <div>Error loading data</div>;
    }

    if (!data) {
        return <div>Loading...</div>;
    }

    // Extract the image data from the API response
    const images = data.data;
    console.log("check", images)
    return (
        <>

            <div className="container-fluid">
                <div className="first">
                    {
                        images.map((item, i) => {
                            console.log("check", item)
                            return (
                                <div key={i} className="one">
                                    <img src={item?.photo?.data?.full_url?.replace('http://', 'https://')} className="mt-3 imght" alt={`${i}`} />
                                </div>
                            )
                        })
                    }
                </div>


            </div>

        </>
    )
}

export default Gallery
