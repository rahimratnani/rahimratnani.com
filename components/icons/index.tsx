import Mail from './Mail';
import Github from './GitHub';
import Linkedin from './LinkedIn';

const components: { [key: string]: any } = {
  mail: Mail,
  github: Github,
  linkedin: Linkedin,
};

const SocialIcon = ({
  kind,
  href,
  size = 8,
}: {
  kind: string;
  href: string;
  size: number;
}) => {
  const SocialSvg = components[kind];

  return (
    <a
      className="text-sm text-stone-500 transition hover:text-stone-600"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      <span className="sr-only">{kind}</span>
      <SocialSvg
        // className={`fill-current text-stone-700 hover:text-yellow-600 dark:text-stone-200 dark:hover:text-yellow-700 h-${size} w-${size}`}
        className={`fill-current text-stone-600 hover:text-stone-900 dark:text-stone-200 dark:hover:text-stone-400 h-${size} w-${size}`}
      />
    </a>
  );
};

export default SocialIcon;
