"use client";
import Image from "next/image";
import React, { useState } from "react";

const Statistic = () => {
  interface Statistic {
    label: string;
    data: number;
  }
  const [statistic] = useState<Statistic[]>([
    { data: 38, label: "Fast Load Time" },
    { data: 47, label: "More Productivity" },
    { data: 43, label: "Less RAM Loading" },
  ]);

  return (
    <section id="statistic" className="relative mt-11 pt-28 pb-14">
      <Image
        src="/hero-1.jpg"
        alt="background image"
        fill
        className="object-cover -z-10"
      />
      <div className="container m-auto text-center text-white">
        <div className="max-w-[800px] m-auto">
          <h2 className="header">With Knowledge, Skills & Hard Work</h2>
          <p className="paragraph">
            Aliquam a augue suscipit, luctus neque purus ipsum neque dolor
            primis libero at tempus, blandit posuere ligula varius congue cursus
            porta feugiat
          </p>
        </div>
        <div className="flex items-center justify-center gap-12 my-5 max-md:flex-col">
          {statistic.map((item) => (
            <div key={item.data}>
              <span className="leading-[1.3] title">{item.data}%</span>
              <h4 className="font-light semi-subtitle">{item.label}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistic;
