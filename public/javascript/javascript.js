const contactbtn = document.querySelector(".form");
let name = document.getElementById("name");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let subject = document.getElementById("subject");
let message = document.getElementById("message");


contactbtn.addEventListener('submit', (event) => {
    console.log("clicking");
    console.log(name.value)
    event.preventDefault();

    let mesdata = {
        name: name.value,
        email: email.value,
        phone: phone.value,
        subject: subject.value,
        message: message.value
    }

    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/contact');
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.onload = function(){
        console.log("hhh")
        console.log(xhr.responseText);
        if(xhr.responseText == 'success'){
            alert('Email Sent');
            name.value = '';
            email.value = '';
            phone.value = '';
            subject.value = '';
            message.value = '';
        }else{
            alert('Error!!!')
        }
    }
    //JSON object needs to be in string format to send to backend
    xhr.send(JSON.stringify(mesdata));
})