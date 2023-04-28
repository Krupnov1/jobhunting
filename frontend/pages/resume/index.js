import styles from '../../styles/Vacancy.module.css';
import Head from 'next/head'
import { useState, useEffect } from "react";
import Link from 'next/link';
import Load from '../../components/load';

const ResumeAllPage = ({ resumes: serverResumes }) => {

    const [resumes, setResumes] = useState(serverResumes);
    
    useEffect(() => {
        async function load() {
            const response = await fetch('http://localhost:8000/api/resume');
            const data = await response.json();
            setResumes(data);   
        }

        if (!serverResumes) {
            load();
        }
    }, [])

    if (!resumes) {
        return <><Load /></>
    }

    let countElementsArr = resumes.length;

    return (
        <>
            <Head>
                <title>Your Job || Resumes</title>
            </Head>
            <div className={styles.container}>
                <h3>All resumes of applicants</h3>
                <p>Total resumes: { countElementsArr }</p>
            </div>
            <section>
                <div className={styles.container}> 
                    {resumes.map((resume) =>
                        <div key={resume.id} className={styles.item}>
                            <div className={styles.vacancy_item}>
                                <div className={styles.vacancy_item_body}>
                                    <p className={styles.category_heading}>Resumes categories { resume.profession_categories }</p>
                                    <h3 className={styles.block_item}>
                                        <span className={styles.item_title}>{ resume.profession }</span>
                                    </h3>
                                    <span className={`${styles.block_item} ${styles.resume_span}`}>{ resume.first_name }</span>
                                    <span className={styles.block_item}>{ resume.last_name }</span>
                                </div>
                                <div className={styles.vacancy_company}>
                                    <div className={styles.vacancy_company_info}>
                                        <div className={styles.vacancy_town}>
                                            <span>{ resume.locality }</span>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.vacancy_action}>
                                    <Link href={`/resume/${resume.id}`} className={styles.vacancy_link}>
                                        <span>More detailed</span>
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
                    )}   
                </div>
            </section>
        </>
    )
}

ResumeAllPage.getInitialProps = async({ query, req }) => {

    if (!req) {
        return {resumes: null}
    }

    const response = await fetch('http://localhost:8000/api/resume');
    const resumes = await response.json();

    return {
        resumes
    }
}

export default ResumeAllPage;