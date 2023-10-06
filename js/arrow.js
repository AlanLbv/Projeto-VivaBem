let btnMore = document.querySelector("#btn-saiba-mais")
let arrowDown = document.querySelector('#arrow-down')
let sectionShowing = document.querySelector('#sectionShowing')
let focusArrow = document.querySelector('#focus-arrow')
let focusNav = document.querySelector('#focus-nav')


btnMore.addEventListener('click', () => {
    if (sectionShowing.classList.contains("notShowing")) {
        sectionShowing.classList.remove("notShowing")
        arrowDown.style.transform = "rotate(180deg)"
        focusArrow.focus();
    } else {
        sectionShowing.classList.add("notShowing")
        arrowDown.style.transform = "rotate(0deg)"
        focusNav.focus()
    }
})