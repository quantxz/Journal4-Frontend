const requireButton = document.querySelector(".requireButton");
const copyButton = document.querySelector(".copyRequisition")
const resultDiv = document.querySelector(".result");
const buttonsFunctions = new ButtonFunctions();
let btnMenu = document.querySelector(".btn-abrir-menu")
let menuContent = document.querySelector(".menu-mobile")
let overlayMenu = document.querySelector(".overlay-menu")

requireButton.addEventListener("click", buttonsFunctions.requisitionRender)
copyButton.addEventListener("click", buttonsFunctions.copyText)


btnMenu.addEventListener("click", () => {
    menuContent.classList.add("abrir-menu")
    console.log("clicoou")
})

menuContent.addEventListener("click", () => {
    menuContent.classList.remove("abrir-menu")
})

overlayMenu.addEventListener("click", () => {
    menuContent.classList.remove("abrir-menu")
})