import BlogDetails from "@/components/BlogDetails";
import { blogs } from "@/datas/blog";
import React from "react";

export default function BlogPost({ params }) {
  const { id } = params;

  // Find the blog by id
  const blog = blogs.find((blog) => blog.id === id);

  // If the blog doesn't exist, show a message
  if (!blog) {
    return <p>Blog not found</p>;
  }

  return (
    <div>
      <BlogDetails
        blogTitle={blog.title}
        image={blog?.image}
        contents={blog.contents}
      />
      {/* <h1>{blog.title}</h1> */}
      {/* <p>{blog.content}</p> */}
    </div>
  );
}

// Generate the paths for static generation
export async function generateStaticParams() {
  // Return the list of all blog ids
  return blogs.map((blog) => ({
    id: blog.id,
  }));
}
