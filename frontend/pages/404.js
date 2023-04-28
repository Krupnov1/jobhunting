import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

const NotFoundPage = () => {

    const router = useRouter();

    useEffect(() => {
        const id = setTimeout(() => {
            router.push('/')
        }, 5000);
        return () => clearTimeout(id);
    }, [])

    return (
        <>
            <Head>
                <title>Your Job || Error 404</title>
            </Head>
            <div className='not-found'>
                <h1>Error 404</h1>
                <h2>No such page was found</h2>
                <p>Go to the <Link href='/'>Home page</Link> or wait for the transition in 5 seconds</p>
            </div>
        </> 
    )
}

export default NotFoundPage;