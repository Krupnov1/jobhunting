import styles from '../styles/Login.module.css';

const InfoUser = () => {

    function handleClickShow() {
        let list = document.getElementById('banner-user-info')
        list.classList.remove("Login_show__TjPIQ")
    }

    return (
        <div id='banner-user-info' className={`${styles.modal} ${styles.fade}`}>
            <div className={styles.modal_dialog}>
                <button className={styles.btn_reset} onClick={handleClickShow} type="button">Exit</button>
                <div className={styles.login_modal_main}>
                    <div>
                        <div>
                            <div>
                                <div className={styles.heading}>
                                    <h3>Your form has been successfully submitted !!!</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoUser;