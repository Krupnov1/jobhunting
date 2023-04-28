import useForm from "./useForm";

const useRegister = () => {

    const { handleClickShow, handleClickShowEmployer, showInfoBlock, showInfoSendingBlock} = useForm();


    const registerUserApplicants = ({...props}) => fetch(`http://localhost:8000/api/register`, {
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
            handleClickShow();
            showInfoSendingBlock();
            showInfoBlock();
        }

    }).catch((error) => {
        console.error('Error:', error);
    });


    const registerUserEmployer = ({...props}) => fetch(`http://localhost:8000/api/register/employer`, {
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
            handleClickShowEmployer();
            showInfoSendingBlock()
            showInfoBlock();
        }

    }).catch((error) => {
        console.error('Error:', error);
    });

    return {
        registerUserApplicants,
        registerUserEmployer
    }
}

export default useRegister;