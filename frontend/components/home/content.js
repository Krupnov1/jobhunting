import styles from '../../styles/Home.module.css';
import Image from 'next/image'

const Content = () => {
    return (
      <section>
        <div className={styles.container}>
            <div>
              <h1>Find your dream job</h1> 
              <p className={styles.txt}>You can register on the website, <br/>
                compose your resume and find a job that suits you.<br/>
                And if you are an employer, then after registration,<br/> 
                you can fill out a vacancy form.
              </p> 
              <div className={styles.content_form}>
                <form className={styles.form} action="#">
                  <div className={styles.keyword}>
                    <label className={styles.label}>What</label>
                    <input className={styles.input_content} placeholder="What jobs you want?" name="keyword"
                        type="text"/>
                  </div>
                  <div className={styles.keyword}>
                    <label className={styles.label}>Where</label>
                    <input className={styles.input_content} placeholder="Location" name="location" type="text"/>
                  </div>  
                  <div className={styles.submit_btn}>
                    <button className={styles.form_btn} type="submit">Search</button>
                  </div>
                </form>
              </div> 
            </div>
            <div>
              <Image className={styles.img} src='/banner1.jpg' alt='job' width={645} height={430} priority={true}/>
            </div>
        </div>
      </section>
    )
}

export default Content;