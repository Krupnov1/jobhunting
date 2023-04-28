import Head from 'next/head';
import {useState, useEffect} from 'react';
import {useRouter} from 'next/router';
import Link from 'next/link';
import styles from '../../styles/Vacancy.module.css';
import Load from '../../components/load';


const VacancyPage = ({ vacancy: serverVacancy }) => {
    
    const [vacancy, setVacancy] = useState(serverVacancy);
    const router = useRouter();
    
    useEffect(() => {
        async function load() {
            const response = await fetch(`http://localhost:8000/api/vacancy/${router.query.id}`);
            const data = await response.json();
            setVacancy(data);   
        }

        if (!serverVacancy) {
            load();
        }
    }, [])

    if (!vacancy) {
        return <><Load /></>
    }

    return (
        <>
            <Head>
                <title>Your Job || Vacancy</title>
            </Head>
            <div className={styles.container}>
                <p>Detailed job description</p>
                <section>
                    <div>
                        {vacancy.map((data) =>
                            <div key={data.id}>
                                <div className={styles.block_wrapper}>
                                    <div>
                                        <h2>{ data.profession }</h2>
                                    </div>
                                    <div>
                                        <span className={styles.block_span}>{ data.payment }</span>
                                    </div>
                                    <p>Required work experience: <span>...</span></p>
                                    <p>Type of employment: <span>...</span></p>
                                    <div>
                                        <div className={styles.block_action}>
                                            <Link href='#' className={styles.vacancy_link}>
                                                <span>Respond</span>
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
                                    <h3>{data.vacancy_description} (in detail)</h3>
                                    <h3>{data.requirements} (in detail)</h3>
                                </div> 
                            </div> 
                        )}
                    </div>
                </section>
            </div>
        </>
    )
}

VacancyPage.getInitialProps = async({ query, req }) => {

    if (!req) {
        return {vacancy: null}
    }

    const response = await fetch(`http://localhost:8000/api/vacancy/${query.id}`);
    const vacancy = await response.json();

    return {
        vacancy
    }
}

export default VacancyPage;

