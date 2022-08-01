// console.log('This is tut 50');


let name = document.getElementById('name');
let email = document.getElementById('email');
let phone = document.getElementById('phone');
console.log(name, email, phone);
let validUser = false;
let validEmail = false;
let validPhone = false;
$('#failure').hide();
$('#success').hide();

name.addEventListener('blur', () => {
    // console.log('name is blurred');
    // Validate name here
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}/;
    let str = name.value;
    console.log(regex, str);
    if (regex.test(str)) {
        // console.log('Your name is valid');
        name.classList.remove('is-invalid');
        validUser = true;
    } else {
        console.log('Your name is not valid');
        name.classList.add('is-invalid');
    }
})

email.addEventListener('blur', () => {
    // console.log('email is blurred');
    // Validate email here
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str = email.value;
    // console.log(regex, str);
    if (regex.test(str)) {
        console.log('Your email is valid');
        email.classList.remove('is-invalid');
        validEmail = true;

    } else {
        console.log('Your email is not valid');
        email.classList.add('is-invalid');
    }
})

phone.addEventListener('blur', () => {
    // console.log('phone is blurred');
    // Validate name here
    let regex = /^([0-9]){10}/;
    let str = phone.value;
    // console.log(regex, str);
    if (regex.test(str)) {
        console.log('Your phone is valid');
        phone.classList.remove('is-invalid');
        validPhone = true;
    } else {
        console.log('Your phone is not valid');
        phone.classList.add('is-invalid');
    }
})

let submit = document.getElementById('submit');
submit.addEventListener('click', (e) => {
    e.preventDefault();
    // console.log('You clicked on submit');
    // Submit your form here
    if (validUser && validEmail && validPhone) {
        console.log('User, email and phone are valid.Submitting the form.');
        let success = document.getElementById('success');
        success.classList.add('show');                
        $('#success').show();
        $('#failure').hide();
    }
    else {
        let failure = document.getElementById('failure');
        console.log('User, email and phone are not valid.Hence not Submitting the form. Please correct the error and try again');
        failure.classList.add('show');
        $('#success').hide();
        $('#failure').show();

    }

})
