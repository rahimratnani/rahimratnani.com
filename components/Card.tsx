import Image from 'next/image';
import Link from 'next/link';

interface Props {
  title: string;
  description: string;
  imgSrc: string;
  href: string;
  techStack: string[];
}

export default function Card({
  title,
  description,
  imgSrc,
  href,
  techStack,
}: Props) {
  return (
    <div className="p-4 md:w-1/2 max-w-[544px]">
      <div className="h-full overflow-hidden rounded-md border-2 border-stone-200 border-opacity-60 dark:border-stone-700">
        <Image
          alt={title}
          src={imgSrc}
          className="object-cover object-center md:h-36 lg:h-48"
          width={544}
          height={306}
        />

        <div className="p-6">
          <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight text-light-theme-1 dark:text-dark-theme-1">
            {title}
          </h2>

          <p className="mb-3 max-w-none text-base text-stone-500 dark:text-stone-400">
            {description}
          </p>

          <ul className="mb-3 flex justify-start flex-wrap max-w-none text-[13px] font-semibold text-stone-500 dark:text-stone-400">
            {techStack.map((str) => (
              <li className="mr-3" key={str}>
                {str}
              </li>
            ))}
          </ul>

          <Link href={href}>
            <a
              className="text-base font-medium leading-6 text-light-theme-1 dark:text-dark-theme-1"
              aria-label={`Link to ${title}`}
            >
              Learn more &rarr;
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
