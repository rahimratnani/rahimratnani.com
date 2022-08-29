import { NextPage } from 'next';
import Layout from '../components/layout';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="flex flex-col justify-center items-start max-w-2xl border-stone-200 dark:border-stone-700 mx-auto pb-16">
        <section className="flex flex-col items-center space-y-5 pt-8 sm:pt-12 text-light-theme-1 dark:text-dark-theme-1">
          <div className="h-[120px] w-[120px] bg-gray-400 rounded-full" />

          <h1 className="font-bold text-5xl sm:text-6xl text-center py-2">
            <span className="block mb-4 sm:inline sm:mb-0">Rahim</span> Ratnani
          </h1>

          <h2 className="text-center font-medium text-3xl text-stone-600 dark:text-stone-400">
            I build things that live on the web.
          </h2>

          <div className="pt-14 sm:px-4">
            <p className="text-center text-base sm:text-lg">
              I&apos;m a full-stack web developer from India. Though keeps
              shifting, my current focus is React.js, Node.js, and TypeScript.
            </p>
          </div>

          <div className="pt-6 sm:pt-10">
            <Link href="/about">
              <a className="w-56 h-14 bg-light-theme-3 dark:bg-dark-theme-3 rounded-lg flex items-center justify-center text-light-theme-1 dark:text-dark-theme-1 text-base font-semibold transition hover:scale-105  duration-300">
                More About Me
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="h-6 w-6 ml-1"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
                  ></path>
                </svg>
              </a>
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Home;
