import styles from '../styles/Home.module.css';
import Head from 'next/head';

const AboutPage = () => {

    return (
        <>
            <Head>
                <title>Your Job || About us</title>
            </Head>
            <div className={styles.container}>
                <h1>About us || Page about the service</h1>
            </div>
        </>
    )
}

export default AboutPage;