import Image from 'next/image';
import styles from '../../styles/Applicant.module.css';
import Link from 'next/link';

const Content = () => {

    return (
      <section>
        <div className={styles.container}>
            <div>
              <Image className={styles.img} src='/banner 2.png' alt='applicant' width={645} height={430} priority={true}/>
            </div>
            <div>
              <p className={styles.txt}>In order for employers to be able to find you,<br/> 
              compose and post your resume on the website.</p>
              <span className={styles.txt}>This will significantly speed up the job search.</span> 
              <span className={styles.txt}>To do this, you need to register on the website.</span>
              <span className={styles.txt}>Fill out the resume form.</span>
              <span className={styles.txt}>Save your resume on the website.</span>
              <div className={styles.content_form}>
                <div className={styles.app_reg}>
                    <Link href='/applicant/user' className={styles.app_link}>
                        <span className={styles.app_span}>Create a resume</span>
                    </Link>
                </div>
              </div> 
            </div>
        </div>
      </section>
    )
}

export default Content;