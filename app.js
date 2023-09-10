import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from
 "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";

 
import{getDatabase, set, ref} from
 "https://www.gstatic.com/firebasejs/9.0.0/firebase-database.js";

 const auth = getAuth();
const database = getDatabase();

//sign in starts here
const signup =() => {
    console.log(auth);

    let username = document.getElementById("username");
    let email = document.getElementById("email");
    let password = document.getElementById("password");

createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((resolve) => {
        alert("Successfully Signup" , resolve);
        window.location = "./info.html";


     let userID = auth.currentUser.uid;
       let usersReference =  ref(database,"users/"+ /*username.value*/ userID)
      let usersObj = {
       username:username.value,
        email: email.value,
       password: password.value,
 }
        set(usersReference, usersObj);

    }).catch((reject) => {
        alert("Signup Rejected" , reject);
 })

}

let signin_btn = document.getElementById("btn-signup");
signin_btn.addEventListener("click", signup);







