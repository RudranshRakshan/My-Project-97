const firebaseConfig = {
    apiKey: "AIzaSyBO1Zmhw16Zj2qvEb88wIUBExESKy9RbCU",
    authDomain: "doctor-42dac.firebaseapp.com",
    databaseURL: "https://doctor-42dac-default-rtdb.firebaseio.com",
    projectId: "doctor-42dac",
    storageBucket: "doctor-42dac.appspot.com",
    messagingSenderId: "1014993678282",
    appId: "1:1014993678282:web:0a0986b2cca776db45e933",
    measurementId: "G-GLFDPYTL36"
  };
  
  firebase.initializeApp(firebaseConfig);

  user = localStorage.getItem("userName");
room = localStorage.getItem("userName");

document.getElementById("Uname").innerHTML = "Welocome " + user + " !";
addRoom();
function addRoom() {
  firebase.database().ref("/").child(room).update({
        purpose: "adding a new room"
  });
}

function getData() {
  firebase.database().ref("/" + room).on('value', function (snapshot) {
        document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
              childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
                    firebase_message_id = childKey;
                    message_data = childData;
                    //Start code
                    Name = message_data["name"];
                    likess = message_data["like"];
                    msg = message_data["message"];
                    name_tag = "<h4>" + Name + "<img class='user_tick' src='tick.png'></h4>";
                    msg_tag = "<h4 class='message_h4'>" + msg + "</h4>";
                    btn_tag = "<button class='btn btn-primary' id=" + firebase_message_id + " value=" + likess + " onclick='updateLikes(this.id)'>";
                    span_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: " + likess + "</span></button><hr>";
                    row = name_tag + msg_tag + btn_tag + span_tag;
                    document.getElementById("output").innerHTML+=row;
                    //End code
              }
        });
  });
}
getData();

function logOut() {
  localStorage.removeItem("UserName");
  localStorage.removeItem("roomName");
  window.location = "index.html";
}

function send() {
  var sendMessage = document.getElementById("chatSend_box").value;
  firebase.database().ref(room).push({
        name: user,
        message: sendMessage,
        like: 0
  });
  document.getElementById("chatSend_box").value = "";
}

function updateLikes(id) {
  buttonId = id;
  likes = document.getElementById(buttonId).value;
  newLikes = Number(likes) + 1
  firebase.database().ref(room).child(id).update({
        like: newLikes
  });
}
