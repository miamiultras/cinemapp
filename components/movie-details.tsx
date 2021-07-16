import React from "react";
import Image from "next/image";
import { Movie } from "../lib/movies";

export const MovieDetails: React.FC<Movie> = ({
  title,
  rating,
  desc,
  imgSrc,
  year,
  type,
  subtitles,
  roomNumber,
}) => (
  <div className="flex flex-col bg-white shadow-lg rounded-xl h-100 p-4">
    <figure className="flex">
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

          <div className="text-sm text-gray-400">
            {type} {subtitles ? "(subtitles)" : "(dubbing)"}
          </div>
          <div className="text-lg text-gray-800">{year}</div>

          <p title={desc} className="text-gray-400 mt-2">
            {desc}
          </p>
        </figcaption>
      </div>
    </figure>
    <div className="mt-10">
      <h3 className="text-gray-600 font-semibold">
        Projection room: <span className="text-purple-600">{roomNumber}</span>
      </h3>
      <h4 className="text-gray-600">Numbered tickets</h4>
      <div className="flex flex-col items-center justify-center mt-10">
        <div className="flex justify-center items-center bg-gray-600 w-56 h-12 text-white mb-8">
          SCENE
        </div>
        <ul className="text-gray-600">
          {["I", "II", "III", "IV", "V", "VI"].map((row) => (
            <li key={row}>
              <ul className="flex items-center justify-center mr-6 mb-2">
                <div className="w-8">{row}</div>
                {[1, 2, 3, 4, 5, 6].map((seat) => (
                  <li
                    className="flex items-center justify-center rounded-full w-6 h-6 bg-purple-600 text-white text-sm m-0.5 cursor-pointer"
                    key={seat}
                  >
                    <div>{seat}</div>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);
