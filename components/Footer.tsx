import Link from 'next/link';
import Mail from './icons/Mail';
import GitHub from './icons/GitHub';
import LinkedIn from './icons/LinkedIn';

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-start max-w-2xl mx-auto w-full mb-8">
      <hr className="w-full border-1 border-zinc-200 dark:border-zinc-700 mb-8" />
      <div className="w-full max-w-2xl pb-16 flex flex-col items-center">
        <div className="mb-3 flex space-x-4">
          <a
            className="text-sm text-zinc-500 transition hover:text-zinc-600"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/rahimratnani"
          >
            <span className="sr-only">github</span>
            <GitHub className="fill-current text-zinc-600 hover:text-primary dark:text-zinc-400 dark:hover:text-primary h-6 w-6" />
          </a>

          <a
            className="text-sm text-zinc-500 transition hover:text-zinc-600"
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:rahimratnani4@gmail.com"
          >
            <span className="sr-only">mail</span>
            <Mail className="fill-current text-zinc-600 hover:text-primary dark:text-zinc-400 dark:hover:text-primary h-6 w-6" />
          </a>

          <a
            className="text-sm text-zinc-500 transition hover:text-zinc-600"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/rahim-ratnani"
          >
            <span className="sr-only">linkedin</span>
            <LinkedIn className="fill-current text-zinc-600 hover:text-primary dark:text-zinc-400 dark:hover:text-primary h-6 w-6" />
          </a>
        </div>

        <div className="mb-2 flex flex-wrap justify-center space-x-2 text-sm text-zinc-500 dark:text-zinc-400">
          <div>{`© ${new Date().getFullYear()}`}</div>
          <span>{` • `}</span>
          <Link href="/">Rahim Ratnani. All Rights Reserved.</Link>
        </div>
      </div>
    </footer>
  );
}
