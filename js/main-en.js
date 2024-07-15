const nav = document.querySelector('.mobile-li')
const burger = document.querySelector('.burger')
const close = document.querySelector('.close')
const cars = document.querySelector('.mai-multe')
const cars2 = document.querySelector('.mai-multe2')
const cars3 = document.querySelector('.mai-multe3')
const buton = document.querySelector('.more-cars-button')
const buton2 = document.querySelector('.view-less')

function openNav() {
    nav.style.display = 'flex'
    nav.style.position = 'fixed'
    burger.style.display = 'none'
    close.style.display = 'flex'
}
function closeNav() {
    nav.style.display = 'none'
    burger.style.display = 'flex'
    close.style.display = 'none'
}
function moreCars() {
    cars.style.display = 'flex'
    cars2.style.display = 'flex'
        cars3.style.display = 'flex'
    buton.style.display = 'none'
    buton2.style.display = 'flex'
}
function viewLess() {
    cars.style.display = 'none'
    cars2.style.display = 'none'
        cars3.style.display = 'none'
    buton.style.display = 'flex'
    buton2.style.display = 'none'
}
