// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbP01KMbNPgtGSfW6mtEdmXRCjCNyFezQ",
  authDomain: "lab-six-firebase-project.firebaseapp.com",
  projectId: "lab-six-firebase-project",
  storageBucket: "lab-six-firebase-project.appspot.com",
  messagingSenderId: "101171317188",
  appId: "1:101171317188:web:5d42e9d8e866eeb8447c91"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//
const dbRef = firebase.database().ref();
const usersRef = dbRef.child('users');
//
const userListUI = document.getElementById("userList");
usersRef.on("child_added", snap => {
    let user = snap.val();
    let $li = document.createElement("li");
    $li.innerHTML = user.name;
    $li.setAttribute("child-key", snap.key);
    $li.addEventListener("click", userClicked) userListUI.append($li);
});

function userClicked(e) {
    var userID = e.target.getAttribute("child-key");
    const userRef = dbRef.child('users/' + userID);
    const userDetailUI = document.getElementById("userDetail");
    userDetailUI.innerHTML = ""
    userRef.on("child_added", snap => {
        var $p = document.createElement("p");
        $p.innerHTML = snap.key + " - " + snap.val() userDetailUI.append($p);
    });
}