import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
const Hero = () => {
  return (
    <>
      <section id="home" className="relative pt-36 ">
        <Image
          src="/hero-1.jpg"
          alt="hero background image"
          fill
          className="object-cover -z-10"
          priority
        />
        <div className="container flex items-center justify-center max-md:flex-col">
          <div className="max-md:text-center md:w-1/2">
            <h1 className="mb-5 tracking-tighter text-white title ">
              Solutions Rooted In Code And Design
            </h1>
            <ul className="text-white md:list-disc">
              {[1, 2, 3].map((item) => (
                <li key={item}>
                  <p className="mb-2 paragraph">
                    Ligula risus auctor and egestas mauris donec iaculis
                  </p>
                </li>
              ))}
            </ul>
            <div>
              <Button size="lg" variant="default" className="my-2 capitalize">
                Buy now for - &#36;15
              </Button>
            </div>
          </div>
          <div>
            <Image
              src="/hero-1-img.png"
              alt="hero side image"
              width={400}
              height={400}
              className="object-contain mt-3"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
