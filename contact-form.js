/* Form validation and submission */
document.getElementById("idSubmitButton").addEventListener("click", submitForm);

function submitForm() {
    let form = document.getElementById("idForm");
    if (form.reportValidity()) {
        form.submit();
        form['idName'].value = '';
        form['idLastname'].value = '';
        form['idEmail'].value = '';
        form['idMessage'].value = 'Leave me a message!';
        form['radioYes'].checked = true;
    } else {
        if (form['idName'].value == '') {
            document.getElementById("error-name").innerHTML = "A name is required";
        } else if (form['idLastname'].value == '') {
            document.getElementById("error-lastname").innerHTML = "A last name is required";
        } else if (form['idEmail'].value == '') {
            document.getElementById("error-email").innerHTML = "An email is required";
        } else if (!form['idEmail'].reportValidity()) {
            document.getElementById("error-email").innerHTML = "The email you entered is invalid";
        }
    }
}

document.getElementById("idName").addEventListener('input', emptyNameError);
document.getElementById("idLastname").addEventListener('input', emptyLastnameError);
document.getElementById("idEmail").addEventListener('input', emptyEmailError);

function emptyNameError() {
    document.getElementById("error-name").innerHTML = "";
}

function emptyLastnameError() {
    document.getElementById("error-lastname").innerHTML = "";
}

function emptyEmailError() {
    document.getElementById("error-email").innerHTML = "";
}

document.getElementById("idMessage").addEventListener('click', emptyMessageValue);
function emptyMessageValue() {
    document.getElementById("idMessage").value = "";
}