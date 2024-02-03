
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
    apiKey: "AIzaSyB3IzhqFKivBmrnM6DXYPgtdcWk7mtmlOY",
    authDomain: "kwitter-5290f.firebaseapp.com",
    databaseURL: "https://kwitter-5290f-default-rtdb.firebaseio.com",
    projectId: "kwitter-5290f",
    storageBucket: "kwitter-5290f.appspot.com",
    messagingSenderId: "332363895899",
    appId: "1:332363895899:web:e559c733993175c7c85b7e"
  };
    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + " ! ";
    function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({ purpose : "ading room name"});
      localStorage.setItem("room_name" , room_name);
      window.location = "kwitter_page.html";
    }

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML +=row;
    //End code
    });});}
getData();
function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}
function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room)_name");
  window.location = "kwitter.html";
}