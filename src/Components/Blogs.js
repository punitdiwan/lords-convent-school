import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./css/Blog.css"

const Blogs = () => {
    const [blog, setBlog] = useState([]);
    console.log("blog", blog);

    useEffect(() => {
        getdata();
    }, []);

    const getdata = async () => {
        try {
            const res = await fetch('https://cms.maitretech.com/lords-convent-school/items/blogs?fields=*.*');
            const data = await res.json();
            setBlog(data.data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <div className="container-fluid">
                <section className="youtube-main">
                    <div className="product-1">
                        <h1 style={{ color: '#005392' }}>BLOGS</h1>
                    </div>
                </section>

                <section className="blog-card-main">
                    {blog?.map((item) => (
                        <div className="card" key={item.id}>
                            <Link to={`/blog-details/${item.id}`}>
                                <div className="card_image">
                                    <img
                                        src={item?.image?.data?.full_url?.replace('http://', 'https://')}
                                        alt={item.title}
                                        className="card-img"
                                    />
                                </div>
                            </Link>
                            <div className="card_content">
                                <Link to={`/blog-details/${item.id}`}>
                                    <h2
                                        dangerouslySetInnerHTML={{
                                            __html: item?.title
                                        }}
                                    ></h2>
                                </Link>
                                {/* Use Link from react-router-dom to navigate to blog details */}
                                <Link
                                    to={`/blog-details/${item.id}`}
                                    style={{ color: 'black', fontFamily: 'bold', fontSize: 20 }}
                                >
                                    Read More
                                </Link>
                            </div>
                        </div>
                    ))}
                </section>
            </div>
        </>
    );
};

export default Blogs;
