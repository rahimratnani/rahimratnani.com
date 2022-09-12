import Image from 'next/image';
import Link from 'next/link';

interface Props {
  title: string;
  description: string;
  imgSrc: string;
  live: string;
  github: string;
  techStack: string[];
}

export default function Card({
  title,
  description,
  imgSrc,
  live,
  github,
  techStack,
}: Props) {
  return (
    <div className="p-4 md:w-1/2 max-w-[544px]">
      <div className="h-full overflow-hidden rounded-md border-2 border-zinc-200 border-opacity-60 dark:border-zinc-700">
        <Image
          alt={title}
          src={imgSrc}
          className="object-cover object-center md:h-36 lg:h-48"
          width={544}
          height={306}
        />

        <div className="p-6">
          <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight text-font-dark dark:text-font-light">
            {title}
          </h2>

          <p className="mb-3 max-w-none text-base text-zinc-500 dark:text-zinc-400">
            {description}
          </p>

          <ul className="mb-3 flex justify-start flex-wrap max-w-none text-[13px] font-semibold text-zinc-500 dark:text-zinc-400">
            {techStack.map((str) => (
              <li className="mr-3" key={str}>
                {str}
              </li>
            ))}
          </ul>

          <div className="w-full flex flex-col space-y-2">
            <Link href={live}>
              <a
                className="text-base font-medium leading-6 text-primary group"
                aria-label={`Link to ${title}`}
                target="_blank"
              >
                Live{' '}
                <span className="group-hover:pl-1 transition-all duration-300">
                  &rarr;
                </span>
              </a>
            </Link>
            <Link href={github}>
              <a
                className="text-base font-medium leading-6 text-primary group"
                aria-label={`Link to ${title}`}
                target="_blank"
              >
                GitHub{' '}
                <span className="group-hover:pl-1 transition-all duration-300">
                  &rarr;
                </span>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
