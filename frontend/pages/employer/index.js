import styles from '../../styles/Employer.module.css';
import Head from 'next/head';
import Content from '../../components/employer/content';
import Block from '../../components/employer/block';
import Forma from '../../components/employer/forma';
import Register from '../../components/registration/employer/registerFormat';
import { useEffect } from 'react';
import Router, { useRouter } from 'next/router';

const EmployerPage = () => {

    useEffect(() => {
        const user = localStorage.getItem('user');
        if (!user) {
            Router.push('/')
        }
    }, []);

    return (
        <>
            <Head>
                <title>Your Job || Employers</title>
            </Head>
            <Register />
            <Content />
            <Block />
            <Forma />
        </>
        
    )
}

export default EmployerPage;