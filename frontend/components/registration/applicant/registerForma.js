import styles from '../../../styles/Login.module.css';
import { useState } from 'react';
import useRegister from '../../../services/useRegister';
import useForm from '../../../services/useForm';


const RegisterForma = () => {

    const { handleClickShow, showInfoSendingBlockAdd } = useForm();
    const { registerUserApplicants } = useRegister();


    const [name, setName] = useState("");
    const [last_name, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [locality, setLocality] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password_confirmation, setPasswordConfirmation] = useState("")

    
    const submitForm = async e => {
        e.preventDefault();
        showInfoSendingBlockAdd();
        registerUserApplicants(
            { 
                name,
                last_name,
                phone,
                locality,
                email, 
                password,
                password_confirmation 
            }
        );
    }

    return (
        <div id='register-applicant' className={`${styles.modal} ${styles.fade}`}>
            <div className={styles.modal_dialog}>
                <button className={styles.btn_reset} onClick={handleClickShow} type="button">Exit</button>
                <div className={styles.login_modal_main}>
                    <div>
                        <div>
                            <div>
                                <div className={styles.heading}>
                                    <h3>Here is the registration of the applicant</h3>
                                    <p>To continue working, create your account <br/> and view new jobs, as well as create your resume.</p>
                                </div>
                                <form id='reg-app-form' className={styles.heading_form} autoComplete="off" onSubmit={submitForm}>
                                    <div className={styles.form_group}>
                                        <label className={styles.label} htmlFor="name">Name</label>
                                        <input className={styles.form_control} type="name" placeholder="Name" 
                                            onChange={e => setName(e.target.value)} required/>
                                    </div>
                                    <div className={styles.form_group}>
                                        <label className={styles.label} htmlFor="last_name">Last Name</label>
                                        <input className={styles.form_control} type="last_name" placeholder="Last Name" 
                                            onChange={e => setLastName(e.target.value)} required/>
                                    </div>
                                    <div className={styles.form_group}>
                                        <label className={styles.label} htmlFor="phone">Phone</label>
                                        <input className={styles.form_control} type="phone" placeholder="Phone"
                                            onChange={e => setPhone(e.target.value)} required/>
                                    </div>
                                    <div className={styles.form_group}>
                                        <label className={styles.label} htmlFor="locality">Locality</label>
                                        <input className={styles.form_control} type="locality" placeholder="Locality"
                                            onChange={e => setLocality(e.target.value)} required/>
                                    </div>
                                    <div className={styles.form_group}>
                                        <label className={styles.label} htmlFor="email">E-mail</label>
                                        <input className={styles.form_control} type="email" placeholder="example@gmail.com"
                                            onChange={e => setEmail(e.target.value)} required/>
                                    </div>
                                    <div className={styles.form_group}>
                                        <label className={styles.label} htmlFor="password">Password</label>
                                        <input className={styles.form_control} type="password" placeholder="Enter password"
                                            onChange={e => setPassword(e.target.value)} required/>
                                    </div>
                                    <div className={styles.form_group}>
                                        <label className={styles.label} htmlFor="password_confirmation">Password Confirmation</label>
                                        <input className={styles.form_control} type="password_confirmation" placeholder="Password Confirmation"
                                            onChange={e => setPasswordConfirmation(e.target.value)} required/>
                                    </div>
                                    <div className={`${styles.form_group} ${styles.d_width}`}>
                                        <button className={styles.btn_form}>Register</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterForma;