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

   //End code
   });});}
getData();
