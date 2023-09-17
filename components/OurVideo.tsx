"use client";
import Image from "next/image";
import React, { useState } from "react";
import { HiPlay } from "react-icons/hi";
import { RxCrossCircled } from "react-icons/rx";
import YoutubePlayer from "./YoutubePlayer";

const OurVideo = () => {
  const [playVideo, setPlayVideo] = useState<boolean>(false);
  const handelplay = () => {
    setPlayVideo(!playVideo);
  };
  return (
    <>
      <section className="relative mt-20 pt-28 pb-14" id="contactUs">
        <div
          className={`fixed top-0 z-10 grid w-full h-screen place-items-center ${
            playVideo ? "block" : "hidden"
          }`}
          id="videoPlayer"
        >
          <div>
            <YoutubePlayer videoId="dQw4w9WgXcQ" setplayVideo={setPlayVideo} />
          </div>
        </div>
        <Image
          src="/video-3.jpg"
          alt="video-3"
          fill
          className="object-cover object-center -z-10"
        />
        <div className="container grid p-20 cursor-pointer place-items-center">
          <span className="text-white text-8xl" onClick={handelplay}>
            <HiPlay />
          </span>
        </div>
      </section>
    </>
  );
};

export default OurVideo;
