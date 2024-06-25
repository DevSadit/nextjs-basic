import React from "react";

const BlogDetails = ({ params }) => {
  const blogs = [
    {
      title: "The Future of Web Development",
      id: 1,
      short_description:
        "Exploring the emerging trends and technologies in web development.",
      long_description:
        "Web development is continuously evolving with new technologies and methodologies. In this blog, we will explore the future of web development, focusing on emerging trends such as progressive web apps (PWAs), serverless architecture, and the increasing importance of performance optimization. We will also discuss the growing role of AI and machine learning in web development, and how developers can stay ahead of the curve in this rapidly changing field.",
    },
    {
      title: "Introduction to Next.js",
      id: 2,
      short_description:
        "A comprehensive guide to getting started with Next.js.",
      long_description:
        "Next.js is a powerful framework for building server-side rendered React applications. This blog provides a comprehensive introduction to Next.js, covering its key features and benefits. We'll start with setting up a Next.js project and then move on to understanding file-based routing, static site generation, and server-side rendering. By the end of this blog, you'll have a solid foundation in Next.js and be ready to build your own applications with it.",
    },
    {
      title: "Understanding React Hooks",
      id: 3,
      short_description:
        "A deep dive into React Hooks and how to use them effectively.",
      long_description:
        "React Hooks have revolutionized the way we write React components by allowing us to use state and other React features without writing a class. In this blog, we will dive deep into the most commonly used hooks like useState, useEffect, and useContext. We will also explore custom hooks and how they can help you encapsulate logic and make your components more reusable and easier to maintain. By understanding and mastering hooks, you can greatly improve the efficiency and readability of your React code.",
    },
    {
      title: "Building Responsive Websites",
      id: 4,
      short_description:
        "Techniques and best practices for creating responsive web designs.",
      long_description:
        "In today's multi-device world, building responsive websites is essential. This blog covers techniques and best practices for creating responsive web designs that work seamlessly across different screen sizes and devices. We will discuss the use of flexible grid layouts, media queries, and responsive images. Additionally, we'll explore tools and frameworks that can help streamline the process of building responsive websites, ensuring that your web applications provide a great user experience on any device.",
    },
    {
      title: "Optimizing Web Performance",
      id: 5,
      short_description:
        "Strategies for improving the performance of your web applications.",
      long_description:
        "Web performance is critical for user experience and search engine ranking. This blog delves into various strategies for optimizing web performance, including minimizing HTTP requests, optimizing images, and using content delivery networks (CDNs). We will also cover performance monitoring tools and techniques for identifying and addressing performance bottlenecks. By implementing these strategies, you can significantly enhance the speed and efficiency of your web applications, providing a better experience for your users.",
    },
  ];
  const {title, short_description, long_description} = blogs.find(
    (blog) => blog.id == params.id
  );
//   console.log(showBlog);
//   console.log(params.id);
  return (
    <div className="p-24">
      <h1 className="text-center font-bold text-3xl">Blog Details</h1>
      <div>
        <h1 className="font-semibold text-2xl">{title}</h1>
        <p className="mb-3">{short_description}</p>
        <p className="">{long_description}</p>
      </div>
    </div>
  );
};

export default BlogDetails;
