import styles from '../../../styles/Login.module.css';
import stylesForm from '../../../styles/Applicant.module.css';
import { useState } from 'react';
import useUser from '../../../services/useUser';
import useForm from '../../../services/useForm';


const VacancyForma = () => {

    const [category, setCategory] = useState("");
    const [email, setEmail] = useState("");
    const [locality, setLocality] = useState("");
    const [organization, setOrganization] = useState("");
    const [profession, setProfession] = useState("");
    const [payment, setPayment] = useState("");
    const [description, setDescription] = useState("");
    const [requirements, setRequirements] = useState("");

    const { userVacancy } = useUser();
    const { showInfoSendingBlockAdd } = useForm();

    const submitForm = async e => {
        e.preventDefault();
        showInfoSendingBlockAdd();
        userVacancy(
            { 
                category,
                email,
                locality,
                organization,
                profession,
                payment,
                description, 
                requirements 
            }
        );

    }

    return (
        <div className={stylesForm.user_resume}>
            <div>
                <h2>User's personal account: employer</h2>
                <span className={stylesForm.user_resume_span}>Make a vacancy</span>
            </div>
            <div className={stylesForm.user_resume_main}>
                <div>
                    <div className={styles.heading}>
                        <h3>Form for opening a vacancy</h3>
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
                            <label className={stylesForm.user_resume_label} htmlFor="locality">Locality</label>
                            <input className={styles.form_control} type="locality" placeholder="Locality"
                                onChange={e => setLocality(e.target.value)} required/>
                        </div>
                        <div className={styles.form_group}>
                            <label className={stylesForm.user_resume_label} htmlFor="organization">Enter your Organization that you specified during registration</label>
                            <input className={styles.form_control} type="organization" placeholder="Organization" 
                                onChange={e => setOrganization(e.target.value)} required/>
                        </div>
                        <div className={styles.form_group}>
                            <label className={stylesForm.user_resume_label} htmlFor="profession">Profession</label>
                            <input className={styles.form_control} type="profession" placeholder="Profession"
                                onChange={e => setProfession(e.target.value)} required/>
                        </div>                       
                        <div className={styles.form_group}>
                            <label className={stylesForm.user_resume_label} htmlFor="payment">Payment</label>
                            <input className={styles.form_control} type="payment" placeholder="Payment" 
                                onChange={e => setPayment(e.target.value)} required/>
                        </div>

                        
                        <div className={styles.form_group}>
                            <label className={stylesForm.user_resume_label} htmlFor="description">Vacancy description</label>
                            <textarea className={styles.form_control} name="description" cols="138" rows="10"
                                onChange={e => setDescription(e.target.value)} required>
                            </textarea>
                        </div> 
                        <div className={styles.form_group}>
                            <label className={stylesForm.user_resume_label} htmlFor="requirements">Requirements</label>
                            <textarea className={stylesForm.form_control} name="requirements" cols="138" rows="10"
                                onChange={e => setRequirements(e.target.value)} required>
                            </textarea>
                        </div>
                        <div className={`${stylesForm.form_group} ${styles.d_width}`}>
                            <button className={styles.btn_form}>Send vacancy</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default VacancyForma;