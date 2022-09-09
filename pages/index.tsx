import { NextPage } from 'next';
import Image from 'next/image';
import Layout from '../components/layout';
import Link from 'next/link';
import profilePic from './../public/images/me.jpg';

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="flex flex-col justify-center items-start max-w-2xl border-zinc-200 dark:border-zinc-700 mx-auto pb-16">
        <section className="flex flex-col items-center space-y-8 pt-8 sm:pt-12 text-font-dark dark:text-font-light">
          <Image
            src={profilePic}
            alt="Rahim Ratnani"
            height={120}
            width={120}
            className="h-[120px] w-[120px] rounded-full"
            priority
          />

          <div className="space-y-4">
            <h2 className="text-center font-bold text-3xl sm:text-4xl text-primary">
              Hello, I&apos;m
            </h2>

            <h1 className="font-bold text-5xl sm:text-6xl text-center pb-2">
              <span className="block mb-4 sm:inline sm:mb-0">Rahim</span>{' '}
              Ratnani
            </h1>
          </div>

          <div className="">
            <p className="text-center text-base sm:text-lg">
              I&apos;m a full-stack web developer from India. Though keeps
              changing, my current focus is React.js, Node.js, and TypeScript.
            </p>
          </div>

          <div className="pt-6 sm:pt-10">
            <Link href="/about">
              <a className="w-56 h-14 bg-primary rounded-lg flex items-center justify-center text-white text-base font-semibold transition hover:scale-105  duration-300">
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
