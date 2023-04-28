const useForm = () => {

    function handleClickShow() {
        let list = document.getElementById('register-applicant');
        let form = document.getElementById('reg-app-form');
        form.reset();
        list.classList.remove("Login_show__TjPIQ");
    }

    function handleClickShowLogin() {
        let list = document.getElementById('banner')
        list.classList.remove("Login_show__TjPIQ")
    }

    function handleClickShowEmployer() {
        let list = document.getElementById('register-employer');
        let form = document.getElementById('reg-emp-form');
        form.reset();
        list.classList.remove("Login_show__TjPIQ")
    }

    function handleClickShowLoginEmployer() {
        let list = document.getElementById('banner-format')
        list.classList.remove("Login_show__TjPIQ")
    }

    function showInfoBlock() {
        let list = document.getElementById('banner-info');
        list.classList.add("Login_show__TjPIQ")
    }

    function showInfoUserBlock() {
        let list = document.getElementById('banner-user-info');
        list.classList.add("Login_show__TjPIQ");
        let form = document.getElementById('form-user-info');
        form.reset();
    }

    function showInfoSendingBlockAdd() {
        let list = document.getElementById('banner-user-sending');
        list.classList.add("Login_show__TjPIQ");
    }

    function showInfoSendingBlock() {
        let list = document.getElementById('banner-user-sending');
        list.classList.remove("Login_show__TjPIQ");
    }

    function infoErrorAdd() {
        let list = document.getElementById('banner-error');
        list.classList.add("Login_show__TjPIQ");
    }

    return {
        handleClickShow,
        handleClickShowLogin,
        handleClickShowEmployer,
        handleClickShowLoginEmployer,
        showInfoBlock,
        showInfoUserBlock,
        showInfoSendingBlockAdd,
        showInfoSendingBlock,
        infoErrorAdd
    }
}

export default useForm;