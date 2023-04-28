import Head from 'next/head';
import ResumeForma from '../../components/registration/applicant/resumeForma';
import InfoUser from '../../components/infoUser';
import Router, { useRouter } from 'next/router';
import { useEffect } from 'react';

const UserApplicantPage = () => {

    useEffect(() => {
        const user = localStorage.getItem('user');
        if (!user) {
            Router.push('/')
        }
    }, []);
            
    return (
        <>
            <Head>
                <title>Your Job || Applicant's personal account</title>
            </Head>
            <ResumeForma />
            <InfoUser />
        </>
        
    )
}

export default UserApplicantPage;