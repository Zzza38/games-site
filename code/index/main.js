
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAMOJV2z02dLtMb8X1uWDGkDx6ysrzBcUo",
    authDomain: "webgfa-games.firebaseapp.com",
    databaseURL: "https://webgfa-games-default-rtdb.firebaseio.com",
    projectId: "webgfa-games",
    storageBucket: "webgfa-games.appspot.com",
    messagingSenderId: "553239008504",
    appId: "1:553239008504:web:b91fba77cf0f131849170d",
    measurementId: "G-5W79NYJZ11"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
        const users = [
            { username: 'zion', password: '7979' },
            { username: 'william', password: '11221122' },
            { username: 'james', password: 'james2012' },
            { username: 'sammy', password: 'jaguar1234' },
            { username: 'lerone', password: 'b0ngu$verb' },
            { username: 'gio', password: '1234' },
            { username: 'rebecca', password: '3981' },
            { username: 'nathaniel', password: 'big' },
            { username: 'rafael', password: 'rafaeln1' },
        { username: 'owen', password: '1234' },
        ];

        document.getElementById("loginForm").addEventListener("submit", function(event) {
            event.preventDefault(); // Prevent form submission

            // Get input values
            var username = document.getElementById("username").value;
            var password = document.getElementById("password").value;

            // Check if the entered username and password match any user in the array
            const user = users.find(u => u.username === username && u.password === password);
            if (user) {
                // Set cookies with variable values
                document.cookie = "loggedIn=true; path=/";
                document.cookie = `user=${username}; path=/`;
                document.cookie = `pass=${password}; path=/`;
                // Redirect to the gameselect.html page
                window.location.href = "gameselect.html"; 
            } else {
                alert("Invalid username or password");
            }
        });
