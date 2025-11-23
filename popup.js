const popup = document.getElementById("popup");
const openBtn = document.getElementById("openPopup");
const closeBtn = document.getElementById("closePopup");
const referPopup = document.getElementById("referPopup");
const referOpenbtn = document.getElementById("refer-openPopup");
const referClosebtn =document.getElementById("refer-closePopup");


openBtn.addEventListener("click",() => {
    popup.classList.remove("hidden");
});

closeBtn.addEventListener("click", () => {
popup.classList.add("hidden");
});


referOpenbtn.addEventListener("click", () => {
referPopup.classList.remove("hidden");
});

referClosebtn.addEventListener("click", () => {
    referPopup.classList.add("hidden");
});
