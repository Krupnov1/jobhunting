import Image from 'next/image';
import styles from '../../styles/Employer.module.css';
import Link from 'next/link';

const Content = () => {
    return (
      <section>
        <div className={styles.container}>
            <div>
              <Image className={styles.img} src='/banner 3.jpg' alt='applicant' width={645} height={430} priority={true}/>
            </div>
            <div className={styles.cont_block}>
              <p className={styles.txt}>As employers, we can help you find the right staff.<br/></p>
              <span className={styles.txt}>This will significantly speed up the search for employees and the employment process.</span> 
              <span className={styles.txt}>To do this, you need to register on the website.</span>
              <span className={styles.txt}>Open a new vacancy by filling out the appropriate form.<br/> 
                                            You can create the number of different vacancies you need.</span>
              <span className={styles.txt}>Save the vacancies on the website.</span>
              <div className={styles.content_form}>
                <div className={styles.app_reg}>
                    <Link href='/employer/user' className={styles.app_link}>
                        <span className={styles.app_span}>Open a vacancy</span>
                    </Link>
                </div>
              </div> 
            </div>
        </div>
      </section>
    )
}

export default Content;