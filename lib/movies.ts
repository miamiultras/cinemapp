import faker from "faker";
import movies from "../movies.json";

export type Movie = {
  id: string;
  name: string;
  desc: string;
  rating: string;
  rank: string;
  link: string;
  year: string;
  imgSrc: string;
};

const mapMoviesData = (movies: Omit<Movie, "id" | "desc" | "imgSrc">[]) =>
  movies.map((movie) => ({
    ...movie,
    id: faker.random.alphaNumeric(),
    desc: faker.lorem.paragraph(),
    imgSrc: `/images/${Math.floor(Math.random() * 6) + 1}.jpg`,
  }));

export async function getMoviesData(delay = 1000): Promise<Movie[]> {
  return new Promise((res) => {
    setTimeout(() => {
      res(mapMoviesData(movies));
    }, delay + 500 * Math.random());
  });
}
