import Summary from '@/components/Summary';
import Intro from '@/components/intro';

export default function Home() {

  return (
    <main>

      {/* Intro With Picture */}
      <Intro />

      {/* Summary */}
      <Summary />


      <section>
        <div>
          <h3 className='text-3xl py-1'>Portfolio</h3>
          <p className=' text-md py-5 leading-8 text-gray-800 dark:text-slate-300'>
            👋 Hi, I'm the creator of Cuboost. I work alone to create simple things that can help us in our everyday life. My initial <a className=' text-teal-500' href="https://cuboost-website.web.app/">website</a> with my first creations.
          </p>
        </div>
      </section>
    </main>
  );
}
