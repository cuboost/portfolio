import Tools from '@/components/Tools';
import Head from 'next/head';

export default function Home() {

    return (
        <div>
            <Head>
                {/* Title */}
                <title>Cuboost | About</title>
                {/* Description */}
                <meta name="description" content="Cuboost is a web and game developer working alone to create simple things that could help us in our everyday life." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                {/* Color */}
                <meta name="theme-color" content="#38b2ac"></meta>
                {/* Favicon */}
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className='text-center'>
                <h1 className=' text-5xl p-6'>About</h1>
                <Tools />
            </main>
        </div>
    );
}