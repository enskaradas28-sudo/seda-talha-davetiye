const envelope = document.getElementById("envelope");
const invitation = document.getElementById("invitation");

envelope.addEventListener("click", () => {

    envelope.classList.add("open");

    setTimeout(() => {
        envelope.style.display = "none";
        invitation.classList.remove("hidden");
    }, 900);

});