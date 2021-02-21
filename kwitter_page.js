var firebaseConfig = {
    apiKey: "AIzaSyCYJspkhuzIK8FBln3b7RxLLGEpILvKsew",
    authDomain: "let-s-chat-8c83f.firebaseapp.com",
    databaseURL:"https://let-s-chat-8c83f-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-8c83f",
    storageBucket: "let-s-chat-8c83f.appspot.com",
    messagingSenderId: "1011867035454",
    appId: "1:1011867035454:web:06f5fa59d501dd59d96e6f",
    measurementId: "G-YT91YVWE9H"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("username");
room_name = localStorage.getItem("room_name");

function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name, 
            message: msg,
            like: 0
      });
      document.getElementById("msg").value = "";
}

function logout(){
      localStorage.removeItem("username");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
