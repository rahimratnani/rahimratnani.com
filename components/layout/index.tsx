import { ReactElement, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useTheme } from 'next-themes';

import MobileMenu from '../MobileMenu';

function NavItem({ href, text }: { href: string; text: string }) {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <Link href={href}>
      <a
        className={`${
          isActive
            ? 'font-semibold text-light-theme-1 dark:text-dark-theme-1'
            : 'font-normal text-light-theme-1 dark:text-stone-400'
        } hidden md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-stone-200 dark:hover:bg-stone-700 hover:dark:text-dark-theme-1 transition-all`}
      >
        <span className="capsize">{text}</span>
      </a>
    </Link>
  );
}

export default function Layout(props: { children: ReactElement }) {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), []);

  return (
    <>
      <div className="flex flex-col justify-center px-8">
        <nav className="flex items-center justify-between w-full relative max-w-2xl border-stone-200 dark:border-stone-700 mx-auto pt-8 pb-8 sm:pb-16  text-light-theme-1 dark:text-dark-theme-1 bg-light-theme-0  dark:bg-dark-theme-0 bg-opacity-60">
          <div className="ml-[-0.60rem]">
            <MobileMenu />
            <NavItem href="/" text="Home" />
            <NavItem href="/about" text="About" />
            <NavItem href="/projects" text="Projects" />
            <NavItem href="/resume" text="Resume" />
          </div>
          {/* Dark mode button */}
          <button
            aria-label="Toggle Dark Mode"
            type="button"
            className="w-9 h-9 bg-stone-200 rounded-lg dark:bg-stone-600 flex items-center justify-center  hover:ring-2 ring-stone-300 transition-all"
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
                className="w-5 h-5 text-stone-800 dark:text-stone-200"
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
      <main className="flex flex-col justify-center px-8 bg-light-theme-0 dark:bg-dark-theme-0">
        {props.children}
        {/* <Footer /> */}
      </main>
    </>
  );
}
