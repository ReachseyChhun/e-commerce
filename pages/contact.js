import React from "react";
import Image from "next/image";

const contact = () => {
  return (
    <div
      style={{ marginTop: "3em" }}
      className="w-11/12 m-auto flex flex-col gap-4 max-sm:gap-16"
    >
      <h1 className="text-4xl max-sm:text-2xl">Contact us</h1>
      <h3 className="text-lg max-sm:text-sm">
        <span className="font-bold text-blue-400">Location : </span>Boueng Snor,
        Chbar Ampov, Phnom Penh City, Cambodia
      </h3>
      <h3 className="text-lg max-sm:text-sm">
        <span className="font-bold text-blue-400">Phone Number : </span>
        (+855) 12 456 789
      </h3>
      <h3 className="text-lg max-sm:text-sm">
        <span className="font-bold text-blue-400">Facebook : </span>
        Kon Khmer
      </h3>
    </div>
  );
};

export default contact;
