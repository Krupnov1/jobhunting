import styles from '../styles/Login.module.css';

const InfoError = ({ userError }) => {

    const data = userError;
    
    function handleClickShow() {
        let list = document.getElementById('banner-error')
        list.classList.remove("Login_show__TjPIQ")
    }

    return (
        <div id='banner-error' className={`${styles.modal} ${styles.fade}`}>
            <div className={styles.modal_dialog}>
                <button className={styles.btn_reset} onClick={handleClickShow} type="button">Exit</button>
                <div className={styles.login_modal_main}>
                    <div>
                        <div>
                            <div>
                                <div className={styles.heading}>

                                    {userError ?
                                        <h3>Error: { data.status } <br/>{ data.statusText }</h3>
                                        :
                                        <h3>There are no errors</h3>
                                    }
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoError;