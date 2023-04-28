import useForm from "./useForm";

const useUser = () => {

    const { showInfoUserBlock, showInfoSendingBlock } = useForm();

    const userResume = ({...props}) => fetch(`http://127.0.0.1:8000/api/applicant/user`, {
        method: 'POST',
        //credentials: 'include',
        credentials: 'omit',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            //'X-XSRF-TOKEN': cookie.parse(document.cookie)['XSRF'] || false,
        },
        body: JSON.stringify({...props})
           
    }).then(data => {
        if (data.status === 201) {
            showInfoSendingBlock();
            showInfoUserBlock();
        }

    }).catch((error) => {
        console.error('Error:', error);
    });


    const userVacancy = ({...props}) => fetch(`http://localhost:8000/api/employer/user`, {
        method: 'POST',
        //credentials: 'include',
        credentials: 'omit',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            //'X-XSRF-TOKEN': cookie.parse(document.cookie)['XSRF'] || false,
        },
        body: JSON.stringify({...props})   
    }).then(data => {
        if (data.status === 201) {
            showInfoSendingBlock();
            showInfoUserBlock();
        }

    }).catch((error) => {
        console.error('Error:', error);
    });

    return {
        userResume,
        userVacancy
    }
}

export default useUser;