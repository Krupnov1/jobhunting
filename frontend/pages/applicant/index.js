import styles from '../../styles/Applicant.module.css';
import Head from 'next/head'
import Content from '../../components/applicant/content';
import Section from '../../components/home/section';
import Forma from '../../components/applicant/forma';
import { useEffect } from 'react';
import Router, { useRouter } from 'next/router';


const ApplicantPage = () => {

    useEffect(() => {
        const user = localStorage.getItem('user');
        if (!user) {
            Router.push('/')
        }
    }, []);

    return (
        <>
            <Head>
                <title>Your Job || Applicants</title>
            </Head>
            <Content />
            <Section />
            <Forma />
        </> 
    )
}

export default ApplicantPage;