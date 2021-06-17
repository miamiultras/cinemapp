import faker from "faker";

export type Movie = {
  id: string;
  title: string;
  desc: string;
  rating: string;
  year: string;
  imgSrc: string;
};

const generateFakeMovie: () => Movie = () => ({
  id: faker.datatype.uuid(),
  title: faker.lorem.words(),
  desc: faker.lorem.paragraph(),
  rating: faker.datatype
    .number({
      min: 1,
      max: 10,
    })
    .toString(),
  year: faker.date.past().getFullYear().toString(),
  imgSrc: `/images/${Math.floor(Math.random() * 6) + 1}.jpg`,
});

const generateFakeMovieData = (length: number = 50) => {
  let movies = [];
  for (let index = 0; index < length; index++) {
    movies.push(generateFakeMovie());
  }
  return movies;
};

export async function getMoviesData(delay = 1000): Promise<Movie[]> {
  return new Promise((res) => {
    const movies = generateFakeMovieData();
    setTimeout(() => {
      res(movies);
    }, delay + 500 * Math.random());
  });
}
