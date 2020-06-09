(function() {
    document.querySelector('#userForm').addEventListener('submit', function (e) {
        e.preventDefault();
        if (window.location.pathname === '/register') {
            axios.post(this.action, {
                'name': document.querySelector('#name').value,
                'email': document.querySelector('#email').value,
                'password': document.querySelector('#password').value,
                'password_confirmation': document.querySelector('#password-confirm').value
            })
                .then((response) => {
                    clearErrors();
                    window.location.href = '/';
                })
                .catch((error) => {
                    const errors = error.response.data.errors;
                    const firstItem = Object.keys(errors)[0];
                    const firstItemDOM = document.getElementById(firstItem);
                    const firstErrorMessage = errors[firstItem][0];
                    // scroll to the error message
                    firstItemDOM.scrollIntoView();
                    clearErrors();
                    // show the error message
                    firstItemDOM.insertAdjacentHTML('afterend', `<div class="text-danger">${firstErrorMessage}</div>`);
                    // highlight the form control with the error
                    firstItemDOM.classList.add('border', 'border-danger')
                });
        } else if (window.location.pathname === '/login') {
            axios.post(this.action, {
                'email': document.querySelector('#email').value,
                'password': document.querySelector('#password').value,
            })
                .then((response) => {
                    clearErrors();
                    window.location.href = '/';
                })
                .catch((error) => {
                    const errors = error.response.data.errors;
                    const firstItem = Object.keys(errors)[0];
                    const firstItemDOM = document.getElementById(firstItem);
                    const firstErrorMessage = errors[firstItem][0];
                    // scroll to the error message
                    firstItemDOM.scrollIntoView();
                    clearErrors();
                    // show the error message
                    firstItemDOM.insertAdjacentHTML('afterend', `<div class="text-danger">${firstErrorMessage}</div>`);
                    // highlight the form control with the error
                    firstItemDOM.classList.add('border', 'border-danger')
                });
        } else if (window.location.pathname === '/password/reset') {
            axios.post(this.action, {
                'email': document.querySelector('#email').value,
                'password': document.querySelector('#password').value,
                'password_confirmation': document.querySelector('#password-confirm').value
            })
                .then((response) => {
                    clearErrors();
                    window.location.href = '/';
                })
                .catch((error) => {
                    const errors = error.response.data.errors;
                    const firstItem = Object.keys(errors)[0];
                    const firstItemDOM = document.getElementById(firstItem);
                    const firstErrorMessage = errors[firstItem][0];
                    // scroll to the error message
                    firstItemDOM.scrollIntoView();
                    clearErrors();
                    // show the error message
                    firstItemDOM.insertAdjacentHTML('afterend', `<div class="text-danger">${firstErrorMessage}</div>`);
                    // highlight the form control with the error
                    firstItemDOM.classList.add('border', 'border-danger')
                });
        }
    });
    function clearErrors() {
        // remove all error messages
        const errorMessages = document.querySelectorAll('.text-danger');
        errorMessages.forEach((element) => element.textContent = '');
        // remove all form controls with highlighted error text box
        const formControls = document.querySelectorAll('.form-control');
        formControls.forEach((element) => element.classList.remove('border', 'border-danger'))
    }
})();
