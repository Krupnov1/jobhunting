import styles from '../../../styles/Vacancy.module.css';
import Head from 'next/head';
import Link from 'next/link';
import {useState, useEffect} from 'react';
import {useRouter} from 'next/router';
import Load from '../../../components/load';


const VacanciesPage = ({ vacancies: serverVacancies }) => {

    const [vacancies, setVacancies] = useState(serverVacancies);
    const router = useRouter();
    
    useEffect(() => {
        async function load() {
            const response = await fetch(`http://localhost:8000/api/vacancy/category/${router.query.id}`);
            const data = await response.json();
            setVacancies(data);   
        }

        if (!serverVacancies) {
            load();
        }
    }, [])

    if (!vacancies) {
        return <><Load /></>
    }

    let countElementsArr = vacancies.length;
    
    return (
        <>
            <Head>
                <title>Your Job || Vacancies_category</title>
            </Head>
            <div className={styles.container}>
                <p>Total vacancies: { countElementsArr }</p>
            </div>
            
            <section>
            <div className={styles.container}> 
            {vacancies.map((vacancy) =>
              <div key={vacancy.id} className={styles.item}>
                <div className={styles.vacancy_item}>
                    <div className={styles.vacancy_item_body}>
                        <p className={styles.category_heading}>Vacancies categories { vacancy.categories_profession }</p>
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

VacanciesPage.getInitialProps = async({ query, req }) => {

    if (!req) {
        return {vacancies: null}
    }

    const response = await fetch(`http://localhost:8000/api/vacancy/category/${query.id}`);
    const vacancies = await response.json();

    return {
        vacancies
    }
}

export default VacanciesPage;

