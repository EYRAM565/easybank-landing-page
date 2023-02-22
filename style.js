const navTog = document.querySelector(".mobile_nav_toggle");
const primnav = document.querySelector(".primary-navigation");
const header = document.querySelector(".header")

navTog.addEventListener('click', () =>{
    const visibility = primnav.getAttribute('data-visible');
    if(visibility === 'false'){
        header.classList.add('wrapper-bgColor');
        primnav.setAttribute('data-visible', true);
        navTog.setAttribute('aria-expanded', true)
    } else {
        header.classList.remove('wrapper-bgColor');
        primnav.setAttribute('data-visible', false);
        navTog.setAttribute('aria-expanded', false);
    }
    console.log('hello');
})