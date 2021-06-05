// Initialize Firebase (ADD YOUR OWN DATA)
var firebaseConfig = {
  apiKey: "AIzaSyDmogF4z0Yl-ys66PRaOb-068cloeCuLVA",
  authDomain: "contact-form-7d1fb.firebaseapp.com",
  databaseURL: "https://contact-form-7d1fb-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "contact-form-7d1fb",
  storageBucket: "contact-form-7d1fb.appspot.com",
  messagingSenderId: "583257690848",
  appId: "1:583257690848:web:d05167e844d349485f7685",
  measurementId: "G-KLDYEW0JH0"
};
firebase.initializeApp(config);
firebase.analytics();

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var company = getInputVal('company');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  // Save message
   saveMessage(name, company, email, phone, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company:company,
    email:email,
    phone:phone,
    message:message,
  });
}