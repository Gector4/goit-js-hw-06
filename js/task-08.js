const formEl = document.querySelector('.login-form');

const checkSubmit = (event) => {
    event.preventDefault();
    const {
        elements: { email, password }
    } = event.target;

    if (email.value === "" || password.value === "") {
        return alert("Please fill in all fields");
    }

    const objForm = {
        email: email.value,
        password: password.value
    };
    console.log(objForm);

    event.target.reset();
}

formEl.addEventListener("submit", checkSubmit);


