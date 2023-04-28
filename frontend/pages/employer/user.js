import Head from 'next/head';
import InfoUser from '../../components/infoUser';
import VacancyForma from '../../components/registration/employer/vacancyForma';
import styles from '../../styles/Home.module.css';
import { useEffect } from 'react';
import Router, { useRouter } from 'next/router';

const UserEmployerPage = () => {

    useEffect(() => {
        const user = localStorage.getItem('user');
        if (!user) {
            Router.push('/')
        }
    }, []);

    return (
        <>
            <Head>
                <title>Your Job || Employer's personal account</title>
            </Head>
            <VacancyForma />
            <InfoUser />
        </>
        
    )
}

export default UserEmployerPage;