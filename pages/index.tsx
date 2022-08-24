import { NextPage } from 'next';
import Layout from '../components/layout';

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
        <section className="flex flex-col items-center space-y-5">
          {/* Image */}
          <div className="h-[120px] w-[120px] bg-gray-400 rounded-full" />

          <h1 className="font-bold text-5xl sm:text-6xl text-center">
            <span className="inline-block mb-4 sm:inline sm:mb-0">Rahim</span>{' '}
            Ratnani
          </h1>
        </section>
      </div>
    </Layout>
  );
};

export default Home;
