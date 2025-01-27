import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // useParams to get the dynamic ID from the URL
import "./css/Blog.css"

const BlogDetails = () => {
    const { id } = useParams(); // Get the blog id from the URL
    const [blogData, setBlogData] = useState(null);

    useEffect(() => {
        getBlogData(id);
    }, [id]); // Re-run the effect if the ID changes

    const getBlogData = async (id) => {
        try {
            const res = await fetch(`https://cms.maitretech.com/lords-convent-school/items/blogs/${id}?fields=*.*`);
            const result = await res.json();
            setBlogData(result.data);
        } catch (error) {
            console.log("Error fetching blog data:", error);
        }
    };

    if (!blogData) return <div>Loading...</div>;

    return (
        <div className="blog-detail-container">
            <div className="blog-details-wrapper">
                {/* Left Side - Blog Image and Title */}
                <div className="blog-detail-image-wrapper">
                    <div className="blog-detail-image">
                        <img
                            src={blogData?.image?.data?.full_url?.replace('http://', 'https://')}
                            alt={blogData.title}
                            className="blog-detail-image-img"
                        />
                    </div>
                    <h2 className="blog-detail-title" dangerouslySetInnerHTML={{
                        __html: blogData?.title || "Default Title"
                    }} />
                </div>

                {/* Right Side - Blog Content (Details) */}
                <div className="blog-detail-content">
                    <p
                        dangerouslySetInnerHTML={{
                            __html: blogData?.detail
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;
