const form = document.querySelector("#form");
const emailInput = document.querySelector("#email");
const btnModal = document.querySelector("#btnModal");
let emailDate;
document.addEventListener("DOMContentLoaded", () => {
    emailInput.addEventListener('blur', verify);
    form.addEventListener('submit', e => {
        e.preventDefault();
        submitForm(emailDate);
        resetForm();
    });
    btnModal.addEventListener("click", changeModal);
});
function verify(e) {
    if(e.target.value.trim() === "") {
        createAlert("It cant be empty");
        return;
    }
    if(!validateEmail(e.target.value)) {
        createAlert("Valid email required");
        return;
    }
    cleanAlert();
    return emailDate = e.target.value.trim().toLowerCase();
};
function createAlert(msj) {
    cleanAlert();    
    const p = document.createElement("P");
    p.textContent = msj;
    p.classList.add("form__alert");
    form.children[0].insertBefore(p, form.children[0].children[0]);
    emailInput.style.border = '1px solid hsl(4, 100%, 67%)';
};
function cleanAlert() {
    const exist = document.querySelector(".form__alert");
    if(exist) {
        exist.remove();
        emailInput.style.border = '1px solid hsl(231, 7%, 60%)';
    }
};
function validateEmail(email) {
    const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ 
    const result = regex.test(email);
    return result;
};
function submitForm(email) {
    if(email === "" || email === undefined || !validateEmail(email)) {
        createAlert("Required field");
        return;
    }
    changeModal(email);
    emailDate = '';
};
function resetForm() {
    emailInput.value = '';
    form.reset();
};  
function changeModal(email) {
    const textEmail = document.querySelector(".modal__text span");
    textEmail.textContent = email; 
    const modal = document.querySelector("#modal");
    if(modal.style.display === '' || modal.style.display === 'none') {
        modal.style.display = 'flex';
        return;
    } 
    return modal.style.display = 'none';
};
