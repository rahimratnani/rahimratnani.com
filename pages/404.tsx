import Link from 'next/link';
import { NextPage } from 'next';

import Layout from '../components/layout';

const NotFound: NextPage = () => {
  return (
    <Layout title="404 – Rahim Ratnani">
      <div className="flex flex-col justify-center items-center max-w-2xl mx-auto mb-16 w-full pt-24">
        <h1 className="font-bold text-4xl md:text-5xl tracking-tight mb-4 text-font-dark dark:text-font-light">
          404 – Not Found.
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400 mb-14 font-medium">
          Sorry, there is nothing at this URL.
        </p>
        <Link href="/">
          <a className="p-4 w-64 font-bold mx-auto bg-primary rounded-lg text-center text-white">
            Return Home
          </a>
        </Link>
      </div>
    </Layout>
  );
};

export default NotFound;
