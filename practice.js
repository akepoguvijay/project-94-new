
//ADD YOUR FIREBASE LINKS

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBYAwnyez4ulzW6ol_KLJJn3IWNiYLGuYc",
    authDomain: "kwitter-f6204.firebaseapp.com",
    databaseURL: "https://kwitter-f6204-default-rtdb.firebaseio.com",
    projectId: "kwitter-f6204",
    storageBucket: "kwitter-f6204.appspot.com",
    messagingSenderId: "907156220064",
    appId: "1:907156220064:web:53c192b45810baa571c1c5"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  function addUser()
  {
    user_name=document.getElementById("user_name").Value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "addong user"
    });
  }