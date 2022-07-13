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
  
  firbase.initializeApp(firebaseConfig);



function regis() {
    if (document.getElementById("name").value =="") {
        document.getElementById("error").innerHTML = "#Please type a name!!";
    } else {
        user = document.getElementById("name").value;
        localStorage.setItem("userName", user);
        Name=user;
        window.location = "chat.html";
    }
}

