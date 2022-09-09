import { ReactNode, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import Head from 'next/head';

import MobileMenu from '../MobileMenu';
import Footer from '../Footer';

function NavItem({ href, text }: { href: string; text: string }) {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <Link href={href}>
      <a
        className={`${
          isActive
            ? 'font-semibold text-primary hover:text-primary'
            : 'font-normal text-zinc-600 dark:text-zinc-400 hover:text-zinc-800 '
        } hidden md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-all`}
      >
        <span className="capsize">{text}</span>
      </a>
    </Link>
  );
}

interface LayoutProps {
  children: ReactNode | ReactNode[];
  title?: string;
  description?: string;
}

export default function Layout(props: LayoutProps) {
  const { children, ...customMeta } = props;
  const router = useRouter();

  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), []);

  const meta = {
    title: 'Rahim Ratnani – Full-Stack Web Developer.',
    description: 'Full-Stack Web Developer and JavaScript enthusiast.',
    type: 'website',
    ...customMeta,
  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta name="description" content={meta.description} />
        <meta
          property="og:url"
          content={`https://rahimratnani.com${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://rahimratnani.com${router.asPath}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Rahim Ratnani" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
      </Head>
      <div className="flex flex-col justify-center px-8 bg-theme-light dark:bg-theme-dark">
        <nav className="flex items-center justify-between w-full relative max-w-2xl border-zinc-200 dark:border-zinc-700 mx-auto pt-8 pb-8 sm:pb-16  text-font-dark dark:text-font-light bg-theme-light  dark:bg-theme-dark bg-opacity-60">
          <div className="ml-[-0.60rem]">
            <MobileMenu />
            <NavItem href="/" text="Home" />
            <NavItem href="/about" text="About" />
            <NavItem href="/projects" text="Projects" />
            {/* Resume Link */}
            <a
              className="font-normal text-zinc-600 dark:text-zinc-400 hidden md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-zinc-200 hover:text-zinc-800 dark:hover:bg-zinc-800 transition-all cursor-pointer"
              href="https://drive.google.com/file/d/1aJLItUUP6N5ppNxFqh2ZfvN16mGWZ9h3/view?usp=sharing"
              rel="noreferrer"
              target="_blank"
            >
              <span className="capsize">{'Resume'}</span>
            </a>
          </div>
          {/* Dark mode button */}
          <button
            aria-label="Toggle Dark Mode"
            type="button"
            className="w-9 h-9 bg-zinc-200 rounded-lg dark:bg-zinc-600 flex items-center justify-center  hover:ring-2 ring-zinc-400 transition-all"
            onClick={() => {
              setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
            }}
          >
            {mounted && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="w-5 h-5 text-zinc-800 dark:text-zinc-200"
              >
                {resolvedTheme === 'dark' ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                )}
              </svg>
            )}
          </button>
        </nav>
      </div>
      <main className="flex flex-col justify-center px-8 bg-theme-light dark:bg-theme-dark">
        {children}
        <Footer />
      </main>
    </>
  );
}
