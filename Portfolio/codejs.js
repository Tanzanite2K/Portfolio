let menuicon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let secions = document.querySelector('section');
let navlinks = document.querySelector('header nava');
let contactForm = document.querySelector("form");

const handleFormData = (e) => {
    const fullNameInp = document.getElementById("fullName");
    const emailInp = document.getElementById("email");
    const phoneNumberInp = document.getElementById("phoneNumber");
    const subjectInp = document.getElementById("subject");

    const fullName = fullNameInp.value.trim();
    const email = emailInp.value.trim();
    const phoneNumber = phoneNumberInp.value;
    const subject = emailInp.value;

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    let flag = true;

    if(fullName === "") {
        fullNameInp.classList.add("error");
        fullNameInp.placeholder = "Enter your full name";
        flag = false;
    } else {
        fullNameInp.classList.remove("error");
    }
    if(!emailPattern.test(email)) {
        emailInp.classList.add("error");
        emailInp.placeholder = "Enter your valid email addrerss";
        flag = false;
    } else {
        emailInp.classList.remove("error");
    }
    if(phoneNumber === "") {
        phoneNumberInp.classList.add("error");
        phoneNumberInp.placeholder = "Enter your phone number";
        flag = false;
    } else {
        phoneNumberInp.classList.remove("error");
    }
    if(subject === "") {
        subjectInp.classList.add("error");
        subjectInp.placeholder = "Enter your subject";
        flag = false;
    } else {
        subjectInp.classList.remove("error");
    }

    if(flag) {
        document.getElementById("contact-Form").reset();
        alert("Contact Details Submitted!");
    }
}