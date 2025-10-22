const loginPage = document.getElementById("login-page");
const resetAnchor = document.getElementById("reset-anchor");
const forgotPage = document.getElementById("forgot-page");
const resetBtn = document.getElementById("reset-btn");
const emailPage = document.getElementById("email-page");
const homeBtn = document.getElementById("home-btn");
const resetPage = document.getElementById("reset-page");
const loginBtn = document.getElementById("login-btn");


//when user clicks reset anchor?
resetAnchor.addEventListener("click", () => {
    loginPage.classList.add("hidden"); //hide login page
    forgotPage.classList.remove("hidden"); //show forgot
});

//when user clicks reset-btn?
resetBtn.addEventListener("click",() => {
    forgotPage.classList.add("hidden");
    emailPage.classList.remove("hidden");
});

//when user clicks the home-btn?
homeBtn.addEventListener("click", () => {
    emailPage.classList.add("hidden");
    resetPage.classList.remove("hidden");
});

//when user clicks the login-btn?
loginBtn.addEventListener("click", () => {
resetPage.classList.add("hidden");
loginPage.classList.remove("hidden");
});