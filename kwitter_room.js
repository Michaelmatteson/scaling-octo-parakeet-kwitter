
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyDeCXY2bN1WYalmJOCymiuqFLzqtZ4_u-Y",
      authDomain: "kwitter-5bfa5.firebaseapp.com",
      databaseURL: "https://kwitter-5bfa5-default-rtdb.firebaseio.com",
      projectId: "kwitter-5bfa5",
      storageBucket: "kwitter-5bfa5.appspot.com",
      messagingSenderId: "570106787163",
      appId: "1:570106787163:web:9eb4a2ad9b8429b57c567e"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig)
    user_name = localStorage.getItem("user_name"); 
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
    function addRoom()
    {
          room_name = document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                purpose : "adding room name"
          });
          localStorage.setItem("room_name", room_name);
          window.location = "kwitter_page.html";
    }




function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name - " + Room_names)
row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML+= row;
//End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name)
      localStorage.setItem("room_name",name);
      window.location = "kwitter_page.html";
}