"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FiCalendar, FiClock } from "react-icons/fi";
import Image from "next/image";

export default function BlogPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch("https://adsgenda.com/wp-json/wp/v2/posts?_embed&status=publish&per_page=3");
        const data = await res.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <section className="relative md:py-24 py-16" id="blog">
      <div className="container relative">
        <div className="grid grid-cols-1 pb-6 text-center">
          <h3 className="font-semibold text-2xl leading-normal mb-4">Blog or News</h3>
          <p className="text-slate-400 max-w-xl mx-auto">This is just a simple text made for this unique and awesome template, you can replace it with any text.</p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-6 gap-6">
          {posts.map((item) => (
            <div className="group relative overflow-hidden" key={item.id}>
              <div className="relative overflow-hidden rounded-md shadow dark:shadow-gray-800">
                {item._embedded?.["wp:featuredmedia"]?.[0]?.source_url && (
                  <Link href={`/blog/${item.id}`}>
                    <Image
                      src={item._embedded["wp:featuredmedia"][0].source_url}
                      alt={item.title.rendered}
                      width={400}
                      height={210}
                      style={{ width: "100%", height: "auto" }}
                      className="group-hover:scale-110 duration-500"
                    />                  
                  </Link>
                )}
              </div>

              <div className="mt-6">
                <div className="flex mb-4">
                  <span className="flex items-center text-slate-400 text-sm">
                    <FiCalendar className="size-4 text-slate-900 dark:text-white me-1.5" />
                    {new Date(item.date).toLocaleDateString()}
                  </span>
                  <span className="flex items-center text-slate-400 text-sm ms-3">
                    <FiClock className="size-4 text-slate-900 dark:text-white me-1.5" />
                    5 min read
                  </span>
                </div>

                {/* ✅ ใส่ลิงก์ไปหน้าโพสต์เดี่ยว */}
                <Link href={`/blog/${item.id}`} className="title text-lg font-semibold hover:text-teal-500 duration-500 ease-in-out">
                  {item.title.rendered}
                </Link>

                <p className="text-slate-400 mt-2 line-clamp-3" dangerouslySetInnerHTML={{ __html: item.excerpt.rendered }} />

                <div className="mt-3">
                  <Link href={`/blog/${item.id}`} className="text-teal-500">
                    Read More <i className="mdi mdi-chevron-right align-middle"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
