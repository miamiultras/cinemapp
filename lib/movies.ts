import faker from "faker";

export type Movie = {
  id: string;
  title: string;
  desc: string;
  rating: string;
  year: string;
  imgSrc: string;
  price: string;
};

const generateFakeMovie: (id: string) => Movie = (id: string) => ({
  id,
  title: faker.lorem.words(),
  desc: faker.lorem.paragraph(),
  rating: faker.finance.amount(1, 10, 1).toString(),
  year: faker.date.past().getFullYear().toString(),
  imgSrc: `/images/${Math.floor(Math.random() * 6) + 1}.jpg`,
  price: faker.finance.amount(1, 10, 2).toString(),
});

const generateFakeMovieData = (length: number = 10) => {
  let movies = [];
  for (let index = 0; index < length; index++) {
    movies.push(generateFakeMovie(index.toString()));
  }
  return movies;
};

const movies = generateFakeMovieData();

export async function getMoviesData(delay = 1000): Promise<Movie[]> {
  return new Promise((res) => {
    setTimeout(() => {
      res(movies);
    }, delay + 500 * Math.random());
  });
}

export function getAllMovieIds() {
  return movies.map(({ id }: Movie) => ({
    params: {
      id,
    },
  }));
}

export function getMovieData(id: string): Movie {
  return movies.find((movie: Movie) => movie.id === id)!;
}
