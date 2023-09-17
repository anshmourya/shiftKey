import Image from "next/image";
import React from "react";

export const Service = () => {
  return (
    <>
      <section
        id="service"
        className="mt-11 pt-28 pb-14 bg-[#f8f9fb] "
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
      >
        <div className="container m-auto text-center">
          <div className="max-w-[700px] m-auto">
            <h2 className="mb-5 header">What Makes ShiftKey Different</h2>
            <p className="text-gray-500 paragraph">
              Aliquam a augue suscipit, luctus neque purus ipsum neque dolor
              primis libero at tempus, blandit posuere ligula varius congue
              cursus porta feugiat
            </p>
          </div>
          <div>
            <div id="serviceWrapper">
              {[1, 2, 3].map((service, index) => (
                <div
                  key={index}
                  className="grid gap-5 text-center place-items-center"
                >
                  <Image
                    src="/service.svg"
                    alt="service"
                    width={100}
                    height={100}
                    className="object-contain h-auto max-w-[100px] m-auto"
                  />
                  <h4 className="semi-subtitle">Based on Bootstrap 4.3</h4>
                  <p className="text-gray-500 paragraph">
                    Lorem ipsum dolor sit amet consectet adipis sed do eiusmod
                    tempor inc ididunt utid labore.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
