

import React, { FC } from "react";
import Breadcrumb from "../Common/Breadcrumb";
import BlogItem from "../Blog/BlogItem";
import type { Blog } from "@/types/Blog";

interface BlogGridProps{
  blogs: Blog[];
}

const BlogGrid : FC<BlogGridProps> = ({blogs}) => {
  return (
    <>
      <Breadcrumb title={"Blog Grid"} pages={["blog grid"]} />
      <section className="overflow-hidden py-20 bg-gray-2">
        <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-7.5">
            {blogs.map((blog) => (
              <BlogItem blog={blog} key={blog.id} />
            ))}
          </div>

          {/* Pagination UI can go here */}

        </div>
      </section>
    </>
  );
};

export default BlogGrid;