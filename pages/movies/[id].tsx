import Head from "next/head";
import { GetStaticProps, GetStaticPaths } from "next";
import { Layout, MovieDetails } from "../../components";
import { Movie, getMovieData, getAllMovieIds } from "../../lib/movies";

export default function MoviePage({ movieData }: { movieData: Movie }) {
  return (
    <Layout>
      <Head>
        <title>{movieData.title}</title>
      </Head>
      <section className="text-xl text-gray-800 pt-10">
        <MovieDetails {...movieData} />
      </section>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllMovieIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const movieData = await getMovieData(params?.id as string);
  return {
    props: {
      movieData,
    },
  };
};
