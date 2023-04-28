import styles from '../styles/Home.module.css';
import Head from 'next/head';

const ContactPage = () => {
    return (
        <>
            <Head>
                <title>Your Job || Contacts</title>
            </Head>
            <div className={styles.container}>
                <h1>Our contacts || Contact Page</h1>
            </div>
        </> 
    )
}

export default ContactPage;