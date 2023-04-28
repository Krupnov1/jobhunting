import styles from '../../styles/Applicant.module.css';
import Link from 'next/link';

const Forma = () => {
    return (
        <section>
            <div className={styles.container}>
                <div className={styles.app_with}>
                    <h2>There is a job for everyone</h2>
                    <form className={styles.app_form}>       
                        <input className={styles.app_input} type="text" placeholder="Profession, position or company" name="text"/>   
                        <button className={styles.app_button}>
                            <span>Find a job</span>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Forma;