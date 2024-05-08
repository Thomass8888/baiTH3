function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var cookies = document.cookie.split(';');
    for(var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        while (cookie.charAt(0) === ' ') {
            cookie = cookie.substring(1, cookie.length);
        }
        if (cookie.indexOf(nameEQ) === 0) {
            return cookie.substring(nameEQ.length, cookie.length);
        }
    }
    return null;
}

function deleteCookie(name) {
    document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

var userName = getCookie("username");
if (userName) {
    document.getElementById("greeting").innerText = "Xin chào " + userName + "!";
}

document.getElementById("nameForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var name = document.getElementById("nameInput").value;
    setCookie("username", name, 30);
    document.getElementById("greeting").innerText = "Xin chào " + name + "!";
});

document.getElementById("clearCookie").addEventListener("click", function() {
    deleteCookie("username");
    document.getElementById("greeting").innerText = "";
});