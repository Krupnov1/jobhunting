import styles from '../../styles/Vacancy.module.css';
import Head from 'next/head'
import { useState, useEffect } from "react";
import Link from 'next/link';
import Load from '../../components/load';

const VacancyAllPage = ({ vacancyAll: serverVacancyAll }) => {

    const [vacancyAll, setVacancyAll] = useState(serverVacancyAll);
    
    useEffect(() => {
        async function load() {
            const response = await fetch('http://localhost:8000/api/vacancy');
            const data = await response.json();
            setVacancyAll(data);   
        }

        if (!serverVacancyAll) {
            load();
        }
    }, [])

    if (!vacancyAll) {
        return <><Load /></>
    }

    let countElementsArr = vacancyAll.length;

    return (
        <>
            <Head>
                <title>Your Job || Applicants</title>
            </Head>
            <div className={styles.container}>
                <h3>Vacancies for the applicant</h3>
                <p>Total vacancies: { countElementsArr }</p>
            </div>
            <section>
                <div className={styles.container}> 
                    {vacancyAll.map((vacancy) =>
                        <div key={vacancy.id} className={styles.item}>
                            <div className={styles.vacancy_item}>
                                <div className={styles.vacancy_item_body}>
                                    <p className={styles.category_heading}>Vacancies categories { vacancy.vacancy_categories }</p>
                                    <h3 className={styles.block_item}>
                                        <Link className={styles.item_title} href={`/vacancy/${vacancy.id}`}>
                                            { vacancy.profession }
                                        </Link>
                                    </h3>
                                    <span className={styles.block_item}>{ vacancy.payment }</span>
                                </div>
                                <div className={styles.vacancy_company}>
                                    <div className={styles.vacancy_company_info}>
                                        <div className={styles.vacancy_company_a}>
                                            <Link href='#'>
                                                <span>{ vacancy.organization }</span>
                                            </Link>
                                        </div>
                                        <div className={styles.vacancy_town}>
                                            <span>{ vacancy.town }</span>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.vacancy_company_desc}>
                                    <div className={styles.vacancy_company_item}>
                                        <span>{ vacancy.vacancy_description } (brief)</span>
                                    </div>
                                    <div className={styles.vacancy_req}>
                                        <span>{ vacancy.requirements } (brief)</span>
                                    </div>
                                </div>
                                <div className={styles.vacancy_action}>
                                    <Link href='' className={styles.vacancy_link}>
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
                    )}   
                </div>
            </section>
        </>
    )
}

VacancyAllPage.getInitialProps = async({ query, req }) => {

    if (!req) {
        return {vacancyAll: null}
    }

    const response = await fetch('http://localhost:8000/api/vacancy');
    const vacancyAll = await response.json();

    return {
        vacancyAll
    }
}

export default VacancyAllPage;