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
            className="border-b border-zinc-300 dark:border-zinc-700 text-font-dark dark:text-font-light text-sm font-semibold"
            style={{ transitionDelay: '150ms' }}
          >
            <Link href="/">
              <a className="flex w-auto pb-4 hover:text-primary max-w-min active:text-primary">
                Home
              </a>
            </Link>
          </li>
          <li
            className="border-b border-zinc-300 dark:border-zinc-700 text-font-dark dark:text-font-light text-sm font-semibold"
            style={{ transitionDelay: '175ms' }}
          >
            <Link href="/about">
              <a className="flex w-auto pb-4 hover:text-primary max-w-min">
                About
              </a>
            </Link>
          </li>
          <li
            className="border-b border-zinc-300 dark:border-zinc-700 text-font-dark dark:text-font-light text-sm font-semibold"
            style={{ transitionDelay: '200ms' }}
          >
            <Link href="/projects">
              <a className="flex w-auto pb-4 hover:text-primary max-w-min">
                Projects
              </a>
            </Link>
          </li>
          <li
            className="border-b border-zinc-300 dark:border-zinc-700 text-font-dark dark:text-font-light text-sm font-semibold"
            style={{ transitionDelay: '250ms' }}
          >
            <Link href="/resume">
              <a
                className="flex w-auto pb-4 hover:text-primary max-w-min"
                href="https://drive.google.com/file/d/1aJLItUUP6N5ppNxFqh2ZfvN16mGWZ9h3/view?usp=sharing"
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
      className="h-5 w-5 absolute text-zinc-900 dark:text-zinc-100"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      {...props}
    >
      <path
        d="M2.5 7.5H17.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.5 12.5H17.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CrossIcon(props: JSX.IntrinsicElements['svg']) {
  return (
    <svg
      className="h-5 w-5 absolute text-zinc-900 dark:text-zinc-100"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      shapeRendering="geometricPrecision"
      {...props}
    >
      <path d="M18 6L6 18" />
      <path d="M6 6l12 12" />
    </svg>
  );
}
