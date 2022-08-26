import { NextPage } from 'next';
import Layout from '../components/layout';

const About: NextPage = () => {
  return (
    <Layout>
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5 border-b-stone-200 dark:border-b-stone-700 border-b w-full">
          <h1 className="text-3xl font-bold leading-9 tracking-tight text-light-theme-1 dark:text-dark-theme-1 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
            About Me
          </h1>
        </div>
      </div>
    </Layout>
  );
};

export default About;
