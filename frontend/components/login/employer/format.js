import styles from '../../../styles/Login.module.css';
import Link from 'next/link';
import { useState } from 'react';
import useForm from '../../../services/useForm';

const { infoErrorAdd, showInfoSendingBlock } = useForm();

function loginUser(credentials, setUserEmployer, setUserError) {
    return fetch('http://localhost:8000/api/login/employer', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
    .then(response => { 
        if (response.ok === false) {
            showInfoSendingBlock();
            setUserError(response);
            infoErrorAdd();   
        }
        if (response.ok === true) {
            response.json()
            .then (data => {
                localStorage.setItem('user', JSON.stringify(data));
                setUserEmployer(data);
            });
        }
        
    }).catch((error) => {
        console.error('Error:', error);
    });
}

export default function Format({ setUserEmployer, setUserError }) {

    const { handleClickShowLoginEmployer, showInfoSendingBlockAdd } = useForm();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [organization, setOrganization] = useState("");

    const submitForm = async e => {
        e.preventDefault();
        showInfoSendingBlockAdd();
        handleClickShowLoginEmployer();
        loginUser({ 
            organization,
            email,
            password
        }, setUserEmployer, setUserError);
    }

    return (
        <div id='banner-format' className={`${styles.modal} ${styles.fade}`}>
            <div className={styles.modal_dialog}>
                <button className={styles.btn_reset} onClick={handleClickShowLoginEmployer} type="button">Exit</button>
                <div className={styles.login_modal_main}>
                    <div>
                        <div>
                            <div>
                                <div className={styles.heading}>
                                    <h3>Login From Here</h3>
                                    <p>Login to continue your account</p>
                                </div>
                                <form id='auth-emp-form' className={styles.heading_form} autoComplete="off" autoFocus 
                                      onSubmit={submitForm}>
                                    <div className={styles.form_group}> 
                                        <label className={styles.label} htmlFor="organization">Organization</label>
                                        <input className={styles.form_control} type="organization" placeholder="Organization"
                                        onChange={e => setOrganization(e.target.value)} required/>
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
                                    <div className={`${styles.form_group} ${styles.d_flex}`}> 
                                        <div className={styles.form_check}>
                                            <input className={styles.form_check_input} type="checkbox" value=""/>
                                            <label htmlFor="flexCheckDefault">Remember password</label>
                                        </div>
                                        <Link className={styles.a_pass} href="">Forget Password</Link>
                                    </div>
                                    <div className={`${styles.form_group} ${styles.d_width}`}>
                                        <button className={styles.btn_form} >Login</button>
                                    </div>
                                    <p className={styles.text_form}>Don't have an account? <Link className={styles.a_pass} href="#">Create a free account</Link>
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}