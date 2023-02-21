const navTog = document.querySelector(".mobile_nav_toggle");
const primnav = document.querySelector(".primary-navigation");
const header = document.querySelector("header")

navTog.addEventListener('click', () =>{
    primnav.hasAttribute('data-visible') ? navTog.setAttribute("aria-expanded", false) : navTog.setAttribute("aria-expanded", true);
    primnav.toggleAttribute('data-visible');
    console.log('hello');
})