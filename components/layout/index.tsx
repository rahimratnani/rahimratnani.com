import { ReactNode, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import Head from 'next/head';

import MobileMenu from '../MobileMenu';
import Footer from '../Footer';
import Logo from '../Logo';

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

const DarkModeIcon = ({ theme }: { theme: string | undefined }) => {
  return theme === 'dark' ? (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 md:w-6 h-5 md:h-6 text-zinc-800 dark:text-zinc-200 group-hover:text-primary"
    >
      <path fill="none" d="M0 0h24v24H0z"></path>
      <path d="M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79 1.42-1.41zM4 10.5H1v2h3v-2zm9-9.95h-2V3.5h2V.55zm7.45 3.91l-1.41-1.41-1.79 1.79 1.41 1.41 1.79-1.79zm-3.21 13.7l1.79 1.8 1.41-1.41-1.8-1.79-1.4 1.4zM20 10.5v2h3v-2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm-1 16.95h2V19.5h-2v2.95zm-7.45-3.91l1.41 1.41 1.79-1.8-1.41-1.41-1.79 1.8z"></path>
    </svg>
  ) : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-5 md:w-6 h-5 md:h-6 text-zinc-800 dark:text-zinc-200 group-hover:text-primary"
    >
      <path
        fillRule="evenodd"
        d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
        clipRule="evenodd"
      />
    </svg>
  );
};

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
          <Link href="/">
            <a className="ml-[-0.45rem]">
              <Logo />
            </a>
          </Link>
          <div className="">
            {/* <MobileMenu /> */}
            <NavItem href="/" text="Home" />
            <NavItem href="/about" text="About" />
            <NavItem href="/projects" text="Projects" />
            {/* Resume Link */}
            <a
              className="font-normal text-zinc-600 dark:text-zinc-400 hidden md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-zinc-200 hover:text-zinc-800 dark:hover:bg-zinc-800 transition-all cursor-pointer"
              href="/RAHIM_RATNANI_Resume.pdf"
              rel="noreferrer"
              target="_blank"
            >
              <span className="capsize">{'Resume'}</span>
            </a>
          </div>

          <div className="flex gap-2 justify-center items-center">
            <button
              aria-label="Toggle Dark Mode"
              type="button"
              className="w-10 h-10 rounded-lg flex items-center justify-center border border-transparent transition-all group"
              onClick={() => {
                setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
              }}
            >
              {mounted && <DarkModeIcon theme={resolvedTheme} />}
            </button>

            <div className="visible md:hidden">
              <MobileMenu />
            </div>
          </div>
        </nav>
      </div>
      <main className="flex flex-col justify-center px-8 bg-theme-light dark:bg-theme-dark">
        {children}
        <Footer />
      </main>
    </>
  );
}
