import styles from '../styles/Home.module.css';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer>
            <div className={styles.footer_container}>
                <div className={styles.footer_wrapper}>
                    <div className={styles.left_div}>
                        <Link href='/'><span className={styles.span}>Logo || Your Job</span></Link>
                        <p className={styles.footer_p}>
                            Start building your creative website with our awesome template Massive.
                        </p>
                        <ul className={styles.footer_ul}>
                            <li className={styles.footer_li}>
                                <span className={styles.footer_span}>Address:</span> XXXXXXXXXXXX</li>
                            <li className={styles.footer_li}>
                                <span className={styles.footer_span}>Email:</span> example@abc.com</li>
                            <li className={styles.footer_li}>
                                <span className={styles.footer_span}>Call:</span> (000) 555-44-34</li>
                        </ul>
                    </div>
                    
                    <div>
                        <h3 className={styles.footer_h3}>For Candidates</h3>
                        <ul className={styles.footer_ul}>
                            <li><Link href="#">User Dashboard</Link></li>
                            <li><Link href="#">CV Packages</Link></li>
                            <li><Link href="#">Jobs Featured</Link></li>
                            <li><Link href="#">Jobs Urgent</Link></li>
                            <li><Link href="#">Candidate List</Link></li>
                            <li><Link href="#">Candidates Grid</Link></li>
                        </ul>
                    </div>

                    <div>
                    <h3 className={styles.footer_h3}>For Employers</h3>
                    <ul className={styles.footer_ul}>
                        <li><Link href="#">Post New</Link></li>
                        <li><Link href="#">Employer List</Link></li>
                        <li><Link href="#">Employers Grid</Link></li>
                        <li><Link href="#">Job Packages</Link></li>
                        <li><Link href="#">Jobs Listing</Link></li>
                        <li><Link href="#">Jobs Featured</Link></li>
                    </ul>
                    </div>

                    <div className={styles.right_form}>
                        <h3 className={styles.footer_h3}>Join Our Newsletter</h3>
                        <p>Subscribe to get the latest jobs posted, candidates...</p>
                        <form action="#" method="" target="_blank" className={styles.footer_form}>
                            <input className={styles.footer_input} name="EMAIL" placeholder="Location" type="text"/>
                            <div>
                                <button className={styles.footer_btn}>Subscribe Now! <span></span></button>
                            </div>
                        </form>
                    </div>  
                </div>
            </div> 
        </footer>
    )
}

export default Footer;