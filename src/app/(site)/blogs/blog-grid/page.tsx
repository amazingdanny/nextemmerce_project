import React, { Suspense } from "react";
import BlogGrid from "@/components/BlogGrid";
import BlogData from "../../../api/blogGrid/blogData";
import Breadcrumb from "../../../../components/Common/Breadcrumb";
import BlogItem from "../../../../components/Blog/BlogItem";
import type {Blog } from "@/types/Blog";


import { Metadata } from "next";
;
export const metadata: Metadata = {
  title: "Blog Grid Page | NextCommerce Nextjs E-commerce template",
  description: "This is Blog Grid Page for NextCommerce Template",
  // other metadata
};

const BlogGridPage = async () => {
  const res = await fetch("http://localhost:3000/api/blogGrid"); 
  const blogs = (await res.json()) as Blog[];

  return (
    <main>
    <BlogGrid blogs={blogs} />
    </main>
  );
};

export default BlogGridPage;
