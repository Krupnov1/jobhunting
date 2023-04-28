import styles from '../../styles/Login.module.css';
import Link from 'next/link'

const Options = () => {

    function handleClickShow() {
        let list = document.getElementById('banner-options')
        list.classList.remove("Login_show__TjPIQ")
    }

    function handleClickRegisterApp() {
        let list = document.getElementById('banner-options')
        list.classList.remove("Login_show__TjPIQ")
        let lists = document.getElementById('register-applicant')
        lists.classList.add("Login_show__TjPIQ")
    }

    function handleClickRegisterEmployer() {
        let list = document.getElementById('banner-options')
        list.classList.remove("Login_show__TjPIQ")
        let lists = document.getElementById('register-employer')
        lists.classList.add("Login_show__TjPIQ")
    }

    return (
        <div id='banner-options' className={`${styles.modal} ${styles.fade}`}>
            <div className={styles.modal_dialog}>
                <button className={styles.btn_reset} onClick={handleClickShow} type="button">Exit</button>
                <div className={styles.login_modal_main}>
                    <div>
                        <div>
                            <div>
                                <div className={styles.heading}>
                                    <h3>Register here</h3>
                                    <p>Choose the option that suits you.</p>
                                </div>
                                <div className={styles.heading_form}>
                                    <div className={styles.form_group}>
                                        <Link href='' className={styles.label_option} onClick={handleClickRegisterApp}>Applicant</Link>
                                    </div>
                                    <div className={styles.form_group}>
                                        <Link href='' className={styles.label_option} onClick={handleClickRegisterEmployer}>Employer</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Options;