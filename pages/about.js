import React from "react";
import Image from "next/image";

const about = () => {
  return (
    <div
      style={{ marginTop: "3em" }}
      className="w-11/12 m-auto flex flex-col gap-4 max-sm:gap-16"
    >
      <h1 className="text-4xl max-sm:text-2xl">About E-Commerce</h1>
      <h3 className="text-lg max-sm:text-sm">
        Computer store
        <span className="text-3xl max-sm:text-xl">&#9786;</span>
      </h3>
      <h3 className="text-lg max-sm:text-sm">
        Open Hour: 9:00am to 7:00pm
      </h3>
      <h3 className="text-lg max-sm:text-sm">Founder : Alibaba since 2022</h3>
    </div>
  );
};

export default about;
