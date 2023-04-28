import styles from '../../styles/Employer.module.css';

const Block = () => {
    return (
        <section className={`${styles.blk_sec} ${styles.overlay}`}>
            <div className={styles.container}>
                <div className={styles.process}>
                    <div>
                        <h4 className={styles.h4}>Register your employer's personal account</h4>
                        <p className={styles.p}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </div>
                <div className={styles.process}>
                    <div>
                        <h4 className={styles.h4}>Create ads for free vacancies</h4>
                        <p className={styles.p}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </div>
                <div className={styles.process}>
                    <div>
                        <h4 className={styles.h4}>Select the most suitable staff for you</h4>
                        <p className={styles.p}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Block;