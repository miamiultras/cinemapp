import Head from "next/head";
import Link from "next/link";

export const siteTitle = "Cinemapp";

export function Layout({
  children,
  home,
}: {
  children: React.ReactNode;
  home?: boolean;
}) {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-screen-md px-4 mx-auto py-12">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Learn how to build a personal website using Next.js"
          />
          <meta
            property="og:image"
            content={`https://og-image.vercel.app/${encodeURI(
              siteTitle
            )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
          />
          <meta name="og:title" content={siteTitle} />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>
        <header className="flex flex-col items-center">
          <h2 className="text-6xl	mt-2">
            <Link href="/">
              <a className="text-gray-800 font-bold">
                Cinem<span className="text-purple-600">app</span>
              </a>
            </Link>
          </h2>
          <p className="text-xl text-purple-600 font-semibold">
            Buy tickets easier
          </p>
        </header>
        <main>{children}</main>
        {!home && (
          <div className="mt-12 mx-0 mb-0">
            <Link href="/">
              <a>← Back to home</a>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
