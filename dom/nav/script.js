let icon = document.querySelector(".icon");
let mobileLinks = document.querySelector(".mobile-links");


let toggle = true; // true -> close; false -> open 
icon.addEventListener("click", () => {
    if (toggle == true) {
        mobileLinks.style.display = "block"
    } else {
        mobileLinks.style.display = "none"

    }

    toggle = !toggle;
})