import Link from 'next/link';
import styles from '../styles/Home.module.css';
import { useRouter } from 'next/router';


const Header = ({ setUserEmployer, userEmployer }) => {
    
    const router = useRouter();

    const logout = () => {
        localStorage.removeItem('user');
        setUserEmployer(false);
    }

    return (
        <header>
            <div className={styles.navbar}>
                <div className={styles.divSpanEmail}>
                    <span className={`${styles.spanEmailEmployer} ${styles.spanEmail}`}>Organization: { userEmployer.organization }</span>
                    <span className={styles.spanEmailEmployer}>User: { userEmployer.email }</span> 
                </div> 
                <div className={styles.container}>
                    <div>
                        <Link href='/'><span className={styles.span}>Logo || Your Job</span></Link>
                    </div>
                    <div className={styles.wrapper}>
                        <nav className={styles.nav}>
                            <Link href='/' className={router.pathname == "/" ? styles.a_active : styles.a}>Home</Link>
                            <Link href='/employer' className={router.pathname == "/employer" ? styles.a_active : styles.a}>Employers</Link>
                            <Link href='/resume' className={router.pathname == "/resume" ? styles.a_active : styles.a}>Resumes</Link>
                            <Link href='/vacancy' className={router.pathname == "/vacancy" ? styles.a_active : styles.a}>Vacancy</Link>
                            <Link href='/about' className={router.pathname == "/about" ? styles.a_active : styles.a}>About Us</Link>
                            <Link href='/contact' className={router.pathname == "/contact" ? styles.a_active : styles.a}>Contacts</Link>
                        </nav>
                        <div>
                            <Link href='/' className={styles.btn} onClick={logout}>Sign Out</Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>   
    )
}

export default Header;