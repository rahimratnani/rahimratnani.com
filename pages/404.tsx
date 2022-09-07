import Link from 'next/link';
import { NextPage } from 'next';

import Layout from '../components/layout';

const NotFound: NextPage = () => {
  return (
    <Layout title="404 – Rahim Ratnani">
      <div className="flex flex-col justify-center items-center max-w-2xl mx-auto mb-16 w-full pt-24">
        <h1 className="font-bold text-4xl md:text-5xl tracking-tight mb-4 text-light-theme-1 dark:text-dark-theme-1">
          404 – Not Found.
        </h1>
        <p className="text-stone-600 dark:text-stone-400 mb-14 font-medium">
          Sorry, there is nothing at this URL.
        </p>
        <Link href="/">
          <a className="p-4 w-64 font-bold mx-auto bg-light-theme-3 dark:bg-dark-theme-3 rounded-lg text-center text-light-theme-1 dark:text-dark-theme-1">
            Return Home
          </a>
        </Link>
      </div>
    </Layout>
  );
};

export default NotFound;
