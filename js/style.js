window.sr = ScrollReveal({ reset: true });
const contentLink = document.querySelector("#contentLink");

document.addEventListener('scroll', () => {
    document.createEvent()
  });


document.getElementById("contentLink").addEventListener("click",() => {
    window.scrollTo(0, document.body.scrollHeight);
    const divFlex = document.querySelector(".tryNow > .flex");
    divFlex.style = "background-color: rgba(122, 122, 122, 0.6);  transition: 1s;"
    setTimeout(() => {
        divFlex.style = "background-color: transparent; transition: 1s;"
    }, 500);
})

const divsForReveal = [tryNowTitle, apresentacaoTitle, apresentacaoP, inputRequire, result] = [
    document.querySelector(".tryNow > .flex > .title"),
    document.querySelector(".aprensentacao > .flex > .texts > .title"),
    document.querySelector(".aprensentacao > .flex > .texts > p"),
    document.querySelector(".inputRequire"),
    document.querySelector(".result")
];

divsForReveal.forEach(div => {
    sr.reveal(div, { duration: 1800 })
})
