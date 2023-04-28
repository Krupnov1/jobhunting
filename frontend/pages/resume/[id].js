import Head from 'next/head';
import {useState, useEffect} from 'react';
import {useRouter} from 'next/router';
import Link from 'next/link';
import styles from '../../styles/Vacancy.module.css';
import Load from '../../components/load';

const ResumePage = ({ resume: serverResume }) => {
    
    const [resume, setResume] = useState(serverResume);
    const router = useRouter();
    
    useEffect(() => {
        async function load() {
            const response = await fetch(`http://localhost:8000/api/resume/${router.query.id}`);
            const data = await response.json();
            setResume(data);   
        }

        if (!serverResume) {
            load();
        }
    }, [])

    if (!resume) {
        return <><Load /></>
    }

    return (
        <>
            <Head>
                <title>Your Job || Resume</title>
            </Head>
            <div className={styles.container}>
                <p>Detailed description of the applicant</p>
                <section>
                    <div>
                        {resume.map((data) =>
                            <div key={data.id}>
                                <div className={styles.block_wrapper}>
                                    <div>
                                        <h2>{ data.profession }</h2>
                                    </div>
                                    <div>
                                        <span className={styles.block_span}>{ data.education }</span>
                                    </div>
                                    <p>Work experience: <span>...</span></p>
                                    <div>
                                        <div className={styles.block_action}>
                                            <Link href='' className={styles.vacancy_link}>
                                                <span>Send Email</span>
                                            </Link>
                                            <button className={styles.vacancy_button} type='button'>
                                                <span>
                                                    <span>Show contacts</span>
                                                    <span className={styles.vacancy_button_span}>Contacts</span>
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.block_desc}>
                                    <h3>{data.professional_experience} (in detail)</h3>
                                </div> 
                            </div> 
                        )}
                    </div>
                </section>
            </div>
        </>
    )
}

ResumePage.getInitialProps = async({ query, req }) => {

    if (!req) {
        return {resume: null}
    }

    const response = await fetch(`http://localhost:8000/api/resume/${query.id}`);
    const resume = await response.json();

    return {
        resume
    }
}

export default ResumePage;