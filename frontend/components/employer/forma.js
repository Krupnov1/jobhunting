import styles from '../../styles/Applicant.module.css';

const Forma = () => {
    return (
        <section>
            <div className={styles.container}>
                <div className={styles.app_with}>
                    <h2>Here are the resumes of applicants</h2>
                    <form className={styles.app_form}>       
                        <input className={styles.app_input} type="text" placeholder="Profession" name="text"/>   
                        <button className={styles.app_button}>
                            <span>Find a resume</span>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Forma;