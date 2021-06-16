import React from "react";
import Image from "next/image";
import { Movie } from "../lib/movies";

export const Card: React.FC<Movie> = ({ name, rating, desc, imgSrc }) => {
  return (
    <figure className="flex bg-gray-100 rounded-xl h-44">
      <Image src={imgSrc} alt={`${name}-poster`} width="160" height="200" />
      <div className="w-full pt-6 p-8 space-y-4">
        <figcaption className="text-sm text-gray-500">
          <span className="font-semibold text-base">{name}</span>
          <div className="text-gray-500">
            <span className="font-semibold">Rating: </span>
            <span className="text-purple-600 font-semibold">{rating}</span>
          </div>
          <p title={desc} className="mt-2 line-clamp-3">
            {desc}
          </p>
        </figcaption>
      </div>
    </figure>
  );
};
