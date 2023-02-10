const activePage = window.location.pathname;
// console.log(activePage);

const navLinks = document.querySelector('nav').querySelectorAll("a").

forEach(link=>{
    if(link.href.includes(`${activePage}`)){
        link.classList.add('ct-active');
    }
})