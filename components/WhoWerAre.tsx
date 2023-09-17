import Image from "next/image";
import React from "react";

const WhoWerAre = () => {
  return (
    <section id="whoWeAre" className="mt-11 pt-28 pb-14">
      <div className="container flex items-center justify-center gap-8 max-md:flex-col">
        <div className="h-auto md:w-1/2">
          <Image
            src="/image-05.png"
            alt="phone"
            width={500}
            height={500}
            className="object-contain h-auto max-w-full"
          />
        </div>
        <div className="grid md:w-1/2 gap-[15px] place-items-start">
          <h4 className="uppercase semi-subtitle text-[#7c80c1]">
            beauty of simplicity
          </h4>
          <h2 className="leading-[1.2] header">
            We are making design better for everyone
          </h2>
          <p className="paragraph">
            An enim nullam tempor sapien gravida donec pretium ipsum porta justo
            integer at odio velna vitae auctor integer congue magna purus
            pretium ligula rutrum luctus ultrice aliquam a augue suscipit
          </p>
          <h3 className="semi-subtitle">Features Never Stop</h3>
          <ul>
            {[1, 2, 3].map((item) => (
              <li key={item} className="mb-3 list-disc">
                <p className="paragraph">
                  Fringilla risus nec, luctus mauris orci auctor purus euismod
                  pretium purus pretium ligula rutrum tempor sapien
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhoWerAre;
