import styles from '../../../styles/Login.module.css';
import stylesForm from '../../../styles/Applicant.module.css';
import { useState } from 'react';
import useUser from '../../../services/useUser';
import useForm from '../../../services/useForm';


const ResumeForma = () => {

    const [category, setCategory] = useState("");
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [last_name, setLastName] = useState("");
    const [locality, setLocality] = useState("");
    const [education, setEducation] = useState("");
    const [profession, setProfession] = useState("");
    const [professionalExperience, setProfessionalExperience] = useState("");

    const { userResume } = useUser();
    const { showInfoSendingBlockAdd } = useForm();

    const submitForm = async e => {
        e.preventDefault();
        showInfoSendingBlockAdd();
        userResume(
            { 
                category,
                email,
                name,
                last_name,
                locality,
                education, 
                profession,
                professionalExperience 
            }
        );

    }

    return (
        <div className={stylesForm.user_resume}>
            <div>
                <h2>User's personal account: the applicant</h2>
                <span className={stylesForm.user_resume_span}>Make a resume</span>
            </div>
            <div className={stylesForm.user_resume_main}>
                <div>
                    <div className={styles.heading}>
                        <h3>The form for compiling your resume</h3>
                        <p>Enter your details into the form and submit the form</p>
                    </div>
                    <form id='form-user-info' className={styles.heading_form} autoComplete="off" onSubmit={submitForm}>
                        <div className={styles.form_group}>
                            <label className={stylesForm.user_resume_label} htmlFor="category">Select your Category</label>
                            <select className={styles.form_control} type="category" required 
                                onChange={e => setCategory(e.target.value)}>
                                <option>Technical Support</option>
                                <option>Business Development</option>
                                <option>Real Estate Business</option>
                                <option>Share Market Analysis</option>
                                <option>Finance & Banking Service</option>
                                <option>IT & Networking Services</option>
                                <option>Restaurant Services</option>
                                <option>Defense & Fire Service</option>
                            </select>
                        </div>
                        <div className={styles.form_group}>
                            <label className={stylesForm.user_resume_label} htmlFor="email">Enter the Email address you provided during registration</label>
                            <input className={styles.form_control} type="email" placeholder="example@gmail.com"
                                onChange={e => setEmail(e.target.value)} required/>
                        </div>
                        <div className={styles.form_group}>
                            <label className={stylesForm.user_resume_label} htmlFor="name">Enter your Name that you specified during registration</label>
                            <input className={styles.form_control} type="name" placeholder="Name" 
                                onChange={e => setName(e.target.value)} required/>
                        </div>
                        <div className={styles.form_group}>
                            <label className={stylesForm.user_resume_label} htmlFor="last_name">Enter your Last Name, which you specified during registration</label>
                            <input className={styles.form_control} type="last_name" placeholder="Last Name" 
                                onChange={e => setLastName(e.target.value)} required/>
                        </div>
                        <div className={styles.form_group}>
                            <label className={stylesForm.user_resume_label} htmlFor="locality">Locality</label>
                            <input className={styles.form_control} type="locality" placeholder="Locality"
                                onChange={e => setLocality(e.target.value)} required/>
                        </div>
                        <div className={styles.form_group}>
                            <label className={stylesForm.user_resume_label} htmlFor="education">Education</label>
                            <input className={styles.form_control} type="education" placeholder="Education"
                                onChange={e => setEducation(e.target.value)} required/>
                        </div>
                        <div className={styles.form_group}>
                            <label className={stylesForm.user_resume_label} htmlFor="profession">Profession</label>
                            <input className={styles.form_control} type="profession" placeholder="Profession"
                                onChange={e => setProfession(e.target.value)} required/>
                        </div>                       
                        <div className={styles.form_group}>
                            <label className={stylesForm.user_resume_label} htmlFor="professional_experience">Professional Experience</label>
                            <textarea className={stylesForm.form_control} name="professional_experience" cols="138" rows="10"
                                onChange={e => setProfessionalExperience(e.target.value)} required>
                            </textarea>
                        </div>
                        <div className={`${stylesForm.form_group} ${styles.d_width}`}>
                            <button className={styles.btn_form}>Send resume</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ResumeForma;