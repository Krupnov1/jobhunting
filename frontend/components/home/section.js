import styles from '../../styles/Home.module.css';

const Section = () => {
    return (
        <section className={styles.apply_process}>
            <div className={styles.container}>
                <div className={styles.process}>
                    <div>
                        <h4 className={styles.h4}>Register Your Account</h4>
                        <p className={styles.p}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </div>
                <div className={styles.process}>
                    <div>
                        <h4 className={styles.h4}>Upload Your Resume</h4>
                        <p className={styles.p}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </div>
                <div className={styles.process}>
                    <div>
                        <h4 className={styles.h4}>Apply for Dream Job</h4>
                        <p className={styles.p}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section;