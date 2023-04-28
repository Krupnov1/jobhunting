import Link from 'next/link';
import styles from '../styles/Home.module.css';
import { useRouter } from 'next/router';

const Header = () => {

    const router = useRouter();

    function handleClickLogin() {
        let list = document.getElementById('banner-option')
        list.classList.add("Login_show__TjPIQ")
    }

    function handleClickRegister() {
        let list = document.getElementById('banner-options')
        list.classList.add("Login_show__TjPIQ")
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
                            <Link href='/vacancy' className={router.pathname == "/vacancy" ? styles.a_active : styles.a}>Vacancy</Link>
                            <Link href='/about' className={router.pathname == "/about" ? styles.a_active : styles.a}>About Us</Link>
                            <Link href='/contact' className={router.pathname == "/contact" ? styles.a_active : styles.a}>Contacts</Link>
                        </nav>
                        <div>
                            <Link href='' className={styles.login} onClick={handleClickLogin}>Login</Link>
                            <Link href='' className={styles.btn} onClick={handleClickRegister}>Register</Link>  
                        </div>
                    </div>
                </div>
            </div>
        </header>   
    )
}

export default Header;