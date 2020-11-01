var firebaseConfig = {
    apiKey: "AIzaSyCyFT-KH3LyaNb75s-KyuXnBrc9oODy0cM",
    authDomain: "contact-form-e4947.firebaseapp.com",
    databaseURL: "https://contact-form-e4947.firebaseio.com",
    projectId: "contact-form-e4947",
    storageBucket: "contact-form-e4947.appspot.com",
    messagingSenderId: "224676267414",
    appId: "1:224676267414:web:c5d9bc83795d1b3d2a09b7",
    measurementId: "G-DGJMQ8L3KC"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


//Refernce message collections
var messagesRef = firebase.database().ref('messages');

//Listens to form submit

document.getElementById("contact-form").addEventListener('submit', submitForm);

//Submit Form
function submitForm(e){
    e.preventDefault();

    //get values
    var name = getInputVal('name');
    var company = getInputVal('company');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var message = getInputVal('message');

    //save message
    saveMessage(name, company, email, phone, message)

    //show alert
    document.querySelector('.alert').style.display = 'block';

    //Remove alert after success
    setTimeout(function(){
        document.querySelector('.alert').style.display = 'none';
    }, 3000);

    //Reset contact form values
    document.getElementById('contact-form').reset();
}

//function to get form values

function getInputVal(id){
    return document.getElementById(id).value;
}

//Function to save the message to firebase

function saveMessage(name,company,email,phone, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        company: company,
        email: email,
        phone: phone,
        message: message
    })
}
