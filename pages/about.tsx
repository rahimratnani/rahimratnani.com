import { NextPage } from 'next';
import Layout from '../components/layout';

const About: NextPage = () => {
  return (
    <Layout>
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5 border-b-stone-200 dark:border-b-stone-700 border-b w-full">
          <h1 className="text-3xl font-bold leading-9 tracking-tight text-light-theme-1 dark:text-dark-theme-1 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
            About Me
          </h1>
        </div>

        <div className="w-full max-w-none pt-8 prose prose-headings:text-light-theme-1 prose-p:text-light-theme-1 prose-a:text-light-theme-1 prose-strong:text-light-theme-1  dark:prose-invert dark:prose-headings:text-dark-theme-1 dark:prose-p:text-dark-theme-1 dark:prose-a:text-dark-theme-1 dark:prose-strong:text-dark-theme-1">
          <p className="lead">Hey, I&apos;m Rahim Ratnani.</p>

          <p>
            I&apos;m a full-stack web developer from India. It was back in late
            2019 when I came across{' '}
            <a
              href="https://www.freecodecamp.org"
              target="_blank"
              rel="noreferrer"
            >
              freeCodeCamp
            </a>
            . I got really intrigued by the idea that I can learn to code on my
            own. As someone, who was always interested in computers, I realized{' '}
            <strong>This is what I want to do for my career</strong> and
            embarked upon the long journey to learn programming.
          </p>

          <p>
            I believe that programming is a never-ending pursuit and that&apos;s
            why I&apos;m in love with web development and programming in
            general. I love to explore and learn new things. Currently, most of
            my endeavors revolve around Node.js, React.js and TypeScript.
          </p>

          <p>
            Aside from that, I&apos;m also an{' '}
            <a
              href="https://www.goodreads.com/rahim_ratnani"
              target="_blank"
              rel="noreferrer"
            >
              avid reader
            </a>
            . My favorite genres are sci-fi and fantasy. When I&apos;m not
            coding, you&apos;ll probably find me reading something on my Kindle
            or tinkering with my computer.
          </p>

          <p>
            Feel free to write me at:{' '}
            <a href="mailto:rahimratnani4@gmail.com">rahimratnani4@gmail.com</a>
          </p>

          <h2>Technical Knowledge</h2>

          <h3>Front-End</h3>

          <ul>
            <li>HTML & CSS</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>React.js</li>
            <li>Next.js</li>
            <li>GraphQL</li>
            <li>Apollo Client</li>
            <li>Tailwind CSS</li>
            <li>Chakra UI</li>
          </ul>

          <h3>Back-End</h3>

          <ul>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>PostgreSQL</li>
            <li>MongoDB</li>
          </ul>

          <h3>Other</h3>

          <ul>
            <li>Docker</li>
            <li>Linux CLI</li>
            <li>Git</li>
            <li>Webpack</li>
            <li>Heroku</li>
            <li>Netlify</li>
            <li>Vercel</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default About;
