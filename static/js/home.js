// Menu-button for nav bar
var menuBtn = document.getElementById("menu-btn");
var sideNav = document.getElementById("sideNav");
var delay = 800; // Delay in milliseconds

sideNav.style.right = "-500px";

menuBtn.onclick = function(event) {
    event.stopPropagation(); // Prevent the click event from bubbling up to the body
    if (sideNav.style.right === "-500px") {
        sideNav.style.transitionDuration = "0.8s"; // Transition duration in seconds
        sideNav.style.right = "0";
    } else {
        sideNav.style.transitionDuration = "0.8s"; // Transition duration in seconds
        sideNav.style.right = "-500px";

        setTimeout(function() {
            sideNav.style.transitionDuration = "0s"; // Reset transition duration
        }, delay);
    }
};

// Event listener for body click
document.body.addEventListener("click", function() {
    if (sideNav.style.right === "0") {
        sideNav.style.transitionDuration = "0.8s"; // Transition duration in seconds
        sideNav.style.right = "-500px";

        setTimeout(function() {
            sideNav.style.transitionDuration = "0s"; // Reset transition duration
        }, delay);
    }
});
