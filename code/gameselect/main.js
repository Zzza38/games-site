 // Function to check if the user is logged in
    function checkLoggedIn() {
        // Get the value of the loggedIn cookie
        var loggedIn = document.cookie.replace(/(?:(?:^|.*;\s*)loggedIn\s*\=\s*([^;]*).*$)|^.*$/, "$1");

        // If the loggedIn cookie is not set to "true", redirect to webgfa.com
        if (loggedIn !== "true") {
            window.location.href = "https://webgfa.com";
        }
    }

    // Call the function to check if the user is logged in when the page loads
    checkLoggedIn();
document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.shiftKey && event.key === 'C') {
        const cookies = document.cookie.split(';');
        const cookieText = cookies.map(cookie => cookie.trim()).join('\n');
        document.body.innerHTML = '<pre>' + cookieText + '</pre>';
    }
});
