window.sr = ScrollReveal({ reset: true });

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
