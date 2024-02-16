
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
            { username: 'jacob', password: '1025' },
                { username: 'logan', password: '1234' },
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
                ga('create', 'UA-XXXX-Y', 'auto');
        
                // Set value for custom dimension at index 1.
                ga('set', 'cd1', username);

                // Send the custom dimension value with a pageview hit.
                ga('send', 'pageview');
                // Redirect to the gameselect.html page
                window.location.href = "gameselect.html"; 
            } else {
                alert("Invalid username or password");
            }
        });
