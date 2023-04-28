import Link from 'next/link';
import styles from '../styles/Home.module.css';
import { useRouter } from 'next/router';

const HeaderApplicant = ({ setUserApplicant, userApplicant }) => {

    const router = useRouter();

    const logout = () => {
        localStorage.removeItem('user');
        setUserApplicant(false);
    }

    return (
        <header>
            <div className={styles.navbar}>
                <div className={styles.container}>
                    <div>
                        <Link href='/'><span className={styles.span}>Logo || Your Job</span></Link>
                    </div>
                    <div className={styles.wrapper}>
                        <nav className={styles.nav}>
                            <Link href='/' className={router.pathname == "/" ? styles.a_active : styles.a}>Home</Link>
                            <Link href='/applicant' className={router.pathname == "/applicant" ? styles.a_active : styles.a}>Applicants</Link>
                            <Link href='/vacancy' className={router.pathname == "/vacancy" ? styles.a_active : styles.a}>Vacancy</Link>
                            <Link href='/about' className={router.pathname == "/about" ? styles.a_active : styles.a}>About Us</Link>
                            <Link href='/contact' className={router.pathname == "/contact" ? styles.a_active : styles.a}>Contacts</Link>
                        </nav>
                        <div> 
                            <span className={styles.spanEmail}>User: { userApplicant.email }</span>
                            <Link href='/' className={styles.btn} onClick={logout}>Sign Out</Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>   
    )
}

export default HeaderApplicant;