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

        <div className="w-full pt-8">
          <h2 className="font-bold text-3xl tracking-tight text-light-theme-1 dark:text-dark-theme-1">
            Heading 1
          </h2>
          <h3 className="font-bold text-xl tracking-tight text-light-theme-1 dark:text-dark-theme-1">
            Sub-heading 1
          </h3>

          <p className="mb-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            atque enim corrupti at animi ratione. Eum architecto ad sunt nisi
            cum cupiditate vel rem dolor libero et adipisci, a soluta excepturi
            voluptas fuga. Aperiam delectus sapiente tempore numquam, facere
            quis atque laboriosam, doloremque, ipsam possimus maxime illo modi
            aspernatur hic.
          </p>

          <p className="mb-3">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Accusantium deleniti recusandae quae eaque labore sunt vitae quaerat
            optio obcaecati adipisci?
          </p>

          <p className="mb-3">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium
            repellendus nihil amet quam exercitationem nemo nam earum, eum
            voluptatibus architecto. Vero commodi modi placeat facilis nobis at
            perferendis corporis, expedita molestiae explicabo velit aliquam,
            dolores odit aspernatur? Tempora, quisquam dolore.
          </p>

          <p className="mb-3">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore,
            distinctio exercitationem illum commodi ea ullam. Sunt possimus
            quisquam, ipsam amet ea doloremque eius fugit ab numquam cumque, rem
            dignissimos natus?
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
