import Header from "./header";
import HeaderApplicant from "./headerApplicant";
import HeaderEmployer from "./headerEmployer";
import Footer from "./footer";
import Option from '../components/login/option';
import Forma from '../components/login/applicant/forma';
import Format from '../components/login/employer/format';
import Options from '../components/registration/options';
import RegisterForma from '../components/registration/applicant/registerForma';
import RegisterFormat from '../components/registration/employer/registerFormat';
import Info from '../components/login/info';
import { useState, useEffect } from "react";
import InfoSending from "./infoSending";
import InfoError from "./infoError";


const Layout = ({ children }) => {


    const [userApplicant, setUserApplicant] = useState();
    const [userEmployer, setUserEmployer] = useState();
    const [userError, setUserError] = useState();
    

    useEffect(() => {
        const userToken = localStorage.getItem('user');
        const user = JSON.parse(userToken);

        if (user) {
            if (user.name === "userApplicant") {
                const userApplicant = user;
                setUserApplicant(userApplicant);
            }
            if (user.name === "userEmployer") {
                const userEmployer = user;
                setUserEmployer(userEmployer);  
            }
        }
    }, []);

   
    if(!userApplicant && !userEmployer){
        return (
            <div>
                <Header />
                <Forma setUserApplicant={setUserApplicant} setUserError={setUserError}/>
                <Format setUserEmployer={setUserEmployer} setUserError={setUserError}/>
                <Option />
                <Options />
                <RegisterForma />
                <RegisterFormat />
                <Info />
                <InfoSending />
                <InfoError userError={userError}/>
                    {children}
                <Footer />
            </div>
        )
    };
    
    if (userApplicant) {
        return (
            <div>
                <HeaderApplicant setUserApplicant={setUserApplicant} userApplicant={userApplicant}/>
                    {children}
                <Footer />
            </div>
        )
    };

    if (userEmployer) {
        return (
            <div>
                <HeaderEmployer setUserEmployer={setUserEmployer} userEmployer={userEmployer}/>
                    {children}
                <Footer />
            </div>
        )
    };
    
}

export default Layout;