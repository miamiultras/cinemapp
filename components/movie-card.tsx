import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Movie } from "../lib/movies";

export const MovieCard: React.FC<Movie> = ({
  id,
  title,
  rating,
  desc,
  imgSrc,
  price,
  year,
}) => (
  <figure className="flex bg-white shadow-lg rounded-xl h-62 p-4">
    <Image
      className="rounded-xl m-5"
      src={imgSrc}
      alt={`${title}-poster`}
      width="200"
      height="260"
    />
    <div className="w-3/4 px-6 pr-0 space-y-4 flex flex-col justify-between">
      <figcaption className="text-sm text-gray-500">
        <div className="flex justify-between items-start">
          <h2 className="text-xl font-semibold capitalize">{title}</h2>
          <div className="bg-purple-600 font-bold text-white rounded p-1 ml-1">
            {rating}
          </div>
        </div>

        <div className="text-sm text-gray-400">Series</div>
        <div className="text-lg text-gray-800">{year}</div>

        <p title={desc} className="text-gray-400 mt-2 line-clamp-3">
          {desc}
        </p>
      </figcaption>
      <div className="flex items-center justify-end mt-6">
        <span className="font-semibold text-xl mr-4">${price}</span>
        <Link href={`/movies/${id}`}>
          <a className="text-md bg-purple-500 hover:bg-purple-700 text-white font-bold py-1 px-2 rounded">
            Buy ticket
          </a>
        </Link>
      </div>
    </div>
  </figure>
);
