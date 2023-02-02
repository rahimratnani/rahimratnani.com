import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './../styles/mobile-menu.module.css';
import useDelayedRender from '../hooks/useDelayedRender';

export default function MobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { mounted: isMenuMounted, rendered: isMenuRendered } = useDelayedRender(
    isMenuOpen,
    {
      enterDelay: 20,
      exitDelay: 300,
    }
  );

  function toggleMenu() {
    if (isMenuOpen) {
      setIsMenuOpen(false);
      document.body.style.overflow = '';
    } else {
      setIsMenuOpen(true);
      document.body.style.overflow = 'hidden';
    }
  }

  useEffect(() => {
    return function cleanup() {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <>
      <button
        className={`${styles.burger} visible md:hidden`}
        aria-label="Toggle menu"
        type="button"
        onClick={toggleMenu}
      >
        <MenuIcon data-hide={isMenuOpen} />
        <CrossIcon data-hide={!isMenuOpen} />
      </button>

      {isMenuMounted && (
        <ul
          className={`${
            styles.menu
          } flex flex-col absolute bg-theme-light dark:bg-theme-dark ${
            isMenuRendered ? styles.menuRendered : ''
          }`}
        >
          <li
            className="text-font-dark dark:text-font-light text-lg font-semibold"
            style={{ transitionDelay: '150ms' }}
          >
            <Link href="/">
              <a className="flex w-auto pb-4 hover:text-primary max-w-min active:text-primary">
                Home
              </a>
            </Link>
          </li>
          <li
            className="text-font-dark dark:text-font-light text-lg font-semibold"
            style={{ transitionDelay: '175ms' }}
          >
            <Link href="/about">
              <a className="flex w-auto pb-4 hover:text-primary max-w-min">
                About
              </a>
            </Link>
          </li>
          <li
            className="text-font-dark dark:text-font-light text-lg font-semibold"
            style={{ transitionDelay: '200ms' }}
          >
            <Link href="/projects">
              <a className="flex w-auto pb-4 hover:text-primary max-w-min">
                Projects
              </a>
            </Link>
          </li>
          <li
            className="text-font-dark dark:text-font-light text-lg font-semibold"
            style={{ transitionDelay: '250ms' }}
          >
            <Link href="/resume">
              <a
                className="flex w-auto pb-4 hover:text-primary max-w-min"
                href="/RAHIM_RATNANI_Resume.pdf"
                target="_blank"
                rel="noreferrer"
              >
                Resume
              </a>
            </Link>
          </li>
        </ul>
      )}
    </>
  );
}

function MenuIcon(props: JSX.IntrinsicElements['svg']) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-6 w-6 absolute text-zinc-900 dark:text-zinc-100"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function CrossIcon(props: JSX.IntrinsicElements['svg']) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-6 w-6 absolute text-zinc-900 dark:text-zinc-100"
      shapeRendering="geometricPrecision"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
        clipRule="evenodd"
      />
    </svg>
  );
}
