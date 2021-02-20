var firebaseConfig = {
    apiKey: "AIzaSyCYJspkhuzIK8FBln3b7RxLLGEpILvKsew",
    authDomain: "let-s-chat-8c83f.firebaseapp.com",
    projectId: "let-s-chat-8c83f",
    storageBucket: "let-s-chat-8c83f.appspot.com",
    messagingSenderId: "1011867035454",
    appId: "1:1011867035454:web:06f5fa59d501dd59d96e6f",
    measurementId: "G-YT91YVWE9H"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
   console.log("room name -" + Room_names);
   row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoom(this.id)'>" + Room_names + "</div> <hr>";
   document.getElementById("output").innerHTML += row;
   //End code
   });});}
getData();
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "welcome " + user_name + "!";

function addRoom(){
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose: "adding room name"
});
localStorage.setItem("room_name", room_name);
window.location="kwitter_page.html";
}  

function redirectToRoom(name){
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}