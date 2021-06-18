import Head from "next/head";
import { GetStaticProps, GetStaticPaths } from "next";
import { Layout } from "../../components";
import { Movie, getMovieData, getAllMovieIds } from "../../lib/movies";

export default function MoviePage({ movieData }: { movieData: Movie }) {
  return (
    <Layout>
      <Head>
        <title>{movieData.title}</title>
      </Head>
      <article>
        <h1 className="text-3xl text-gray-700 my-8">{movieData.title}</h1>
        <div className="text-gray-800"></div>
      </article>
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
