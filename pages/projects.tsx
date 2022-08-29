import { NextPage } from 'next';
import Layout from '../components/layout';
import Card from '../components/Card';
import projectsData from '../data/projectsData';

const Projects: NextPage = () => {
  return (
    <Layout>
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5 border-b-stone-200 dark:border-b-stone-700 border-b w-full">
          <h1 className="text-3xl font-bold leading-9 tracking-tight text-light-theme-1 dark:text-dark-theme-1 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
            Projects
          </h1>
        </div>

        <div className="container pt-12">
          <div className="-m-4 flex flex-wrap justify-center">
            {projectsData.map((d) => (
              <Card
                key={d.title}
                title={d.title}
                description={d.description}
                imgSrc={d.imgSrc}
                href={d.href}
                techStack={d.tectStack}
              />
            ))}
          </div>
        </div>

        <div className="pt-16 w-full flex justify-center">
          <a
            className="bg-light-theme-3 dark:bg-dark-theme-3 rounded-lg flex items-center justify-center text-light-theme-1 dark:text-dark-theme-1 text-base font-semibold transition hover:scale-105  duration-300 px-12 py-4"
            href="https://github.com/rahimratnani"
            rel="noreferrer"
            target="_blank"
          >
            More On GitHub
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
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
