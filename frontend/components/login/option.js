import styles from '../../styles/Login.module.css';
import Link from 'next/link'

const Option = () => {

    function handleClickShow() {
        let list = document.getElementById('banner-option')
        list.classList.remove("Login_show__TjPIQ")
    }

    function handleClickLoginApp() {
        let list = document.getElementById('banner-option')
        list.classList.remove("Login_show__TjPIQ")
        let lists = document.getElementById('banner')
        lists.classList.add("Login_show__TjPIQ")
    }

    function handleClickLoginEmployer() {
        let list = document.getElementById('banner-option')
        list.classList.remove("Login_show__TjPIQ")
        let lists = document.getElementById('banner-format')
        lists.classList.add("Login_show__TjPIQ")
    }

    return (
        <div id='banner-option' className={`${styles.modal} ${styles.fade}`}>
            <div className={styles.modal_dialog}>
                <button className={styles.btn_reset} onClick={handleClickShow} type="button">Exit</button>
                <div className={styles.login_modal_main}>
                    <div>
                        <div>
                            <div>
                                <div className={styles.heading}>
                                    <h3>Login From Here</h3>
                                    <p>Choose the option that suits you.</p>
                                </div>
                                <div className={styles.heading_form}>
                                    <div className={styles.form_group}>
                                        <Link href='' className={styles.label_option} onClick={handleClickLoginApp}>Applicant</Link>
                                    </div>
                                    <div className={styles.form_group}>
                                        <Link href='' className={styles.label_option} onClick={handleClickLoginEmployer}>Employer</Link>
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

export default Option;