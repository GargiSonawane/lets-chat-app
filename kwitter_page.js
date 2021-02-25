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
name=message_data['name'];
message=message_data['message'];
like = message_data['like'];
name_with_tag = "<h4> " + name + "<img class='user_tick' src='m2.png'><h4>"
message_with_tag="<h4 class='message_h4'>"+ message + "</h4>";
like_button="<button class='btn btn-warning' id=" + firebase_message_id + " value="+like+ " onclick='updateLike(this.id)'>";
span_with_tag="<span class='glyphicon glyphicon-thumbs-up'>like: "+like+"</span></button><hr>";
row= name_with_tag + message_with_tag + like_button + span_with_tag;
document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();
function updatelike(id_message){
      button_id = id_message;
      like = document.getElementById(button_id).value;
      update_likes = Number(like)+1;
      firebase.database().ref(room_name).child(id_message).update({
            like:update_likes
      });
}
function logout(){
      localStorage.removeItem("username");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}