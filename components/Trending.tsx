import React from "react";
import MainHeading from "./MainHeading";
import Link from "next/link";
import ItemCard from "./ItemCard";

const Trending = () => {
  return (
    <section className="mt-[60px] p-[20px] sm:p-[40px]">
      <div className="flex flex-col sm:flex-row items-center  justify-center sm:justify-between mb-10">
        <MainHeading
          h1="Trending"
          h2="Now"
          size="heading"
          description="Our most popular items this week"
        />
        <div>
          <Link
            href="/menu"
            className="flex items-center justify-center me-5 gap-2 text-body text-primary  mt-6 leading-7"
          >
            <span>View</span> <span>All →</span>
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
      </div>
    </section>
  );
};

export default Trending;
