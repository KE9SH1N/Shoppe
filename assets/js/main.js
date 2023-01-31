const activePage = window.location.pathname;

console.log(activePage);

const navLinks = document.querySelector('nav').querySelectorAll("a").

forEach(link=>{
    if(link.href.includes(`${activePage}`)){
        link.classList.add('ct-active');
    }
})



const tabs = document.querySelectorAll(".tab");

const indicator = document.querySelector(".indicator");

const panels = document.querySelectorAll(".tab-panel")
// console.log(panels);

indicator.style.width = tabs[0].getBoundingClientRect().width + 'px'
indicator.style.left = tabs[0].getBoundingClientRect().left - tabs[0].parentElement.getBoundingClientRect().left + 'px'

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        let tabTarget = tab.getAttribute("aria-controls")

        indicator.style.width = tab.getBoundingClientRect().width + 'px'
        indicator.style.left = tab.getBoundingClientRect().left - tab.parentElement.getBoundingClientRect().left + 'px'


        panels.forEach(panel => {
            let panelId = panel.getAttribute("id")
            if (tabTarget === panelId) {
                panel.classList.remove("invisible", "opacity-0")
                panel.classList.add("visible", "opacity-100")
            } else {
                panel.classList.add("invisible", "opacity-0")
            }
        })
    })
})