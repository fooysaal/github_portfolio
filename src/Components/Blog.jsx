import React from 'react';

import image from "../images/home-banner-bg.jpg";
const imageAltText = "Be your own hero";

const blogList = [
    {
      title: "My First Touch with Laravel",
      description:
        "I have started learning Laravel and this is my first touch with Laravel. I have created a simple CRUD application with Laravel.",
      url: "https://github.com/fooysaal/lv_mobile_serviceshop",
    },
    {
      title: "Journey as a Web Developer",
      description:
        "I have started my journey as a web developer. I have started learning HTML, CSS, JavaScript, PHP, Laravel, React, Node.js, Express.js, MongoDB, MySQL, etc.",
      url: "https://github.com/microsoft/web-dev-for-beginners",
    },
    {
      title: "Learning hacks",
      description:
        "To learn a new thing, you have to follow some learning hacks. I have shared some learning hacks that I follow to learn new things.",
      url: "https://github.com/fooysaal/github_portfolio",
    },
    {
      title: "Problem Solving",
      description:
        "Problem solving is a very important skill for a programmer. I have shared some tips and tricks to improve your problem solving skill.",
      url: "https://github.com/fooysaal?tab=repositories",
    },
  ];
//crate a section for blog with slider
const Blog = () => {
    return (
        <section className="padding" id="blog">
            <h2 style={{ textAlign: "center" }}>My Blog</h2>
            <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
                <div style={{ maxWidth: "40%", alignSelf: "center" }}>
                    <img
                        src={image}
                        style={{ height: "80%", width: "100%", objectFit: "cover", animation: "1s ease-out 0s 1 slideIn" }}
                        alt={imageAltText}
                    />
                </div>
                <div className="container">
                    {blogList.map((blog) => (
                <div className="box" key={blog.title}>
                    <a href={blog.url} target="_blank" rel="noopener noreferrer">
                        <h3 style={{ flexBasis: "40px" }}>{blog.title}</h3>
                     </a>
                        <p className="small">{blog.description}</p>
                    </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default Blog;