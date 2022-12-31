window.addEventListener("scroll", () => {
    let header = document.querySelector('header')
    header.classList.toggle("scrolled", window.scrollY > 0)

})

let header_burger = document.querySelector(".header_burger"),
    lines = document.querySelectorAll(".header_line"),
    header_item = document.querySelector('.header_item:nth-child(2)')
header_burger.addEventListener("click", () => {
    header_item.classList.toggle("open")
    lines.forEach((line) => {
        line.classList.toggle("open")
    });
})
let header_btn = document.querySelector(".header_btn"),
    header_form = document.querySelector(".header_form"),
    header_closer = document.querySelector(".header_closer")
header_closer.addEventListener("click", () => {
    header_form.classList.remove("open")
})
header_btn.addEventListener("click", () => {
    header_form.classList.add("open")
})

let header_message_success_closer = document.querySelector(".header_message_success_closer"),
    header_message_error_closer = document.querySelector(".header_message_error_closer")
success = document.querySelector(".success"),
    error = document.querySelector(".error")
header_message_success_closer.addEventListener("click", () => {
    success.classList.remove("opened")
})
header_message_error_closer.addEventListener("click", () => {
    error.classList.remove("opened")
})

window.addEventListener("DOMContentLoaded", () => {
    success.classList.add("opened")
    error.classList.add("opened")
})

let header_inner_items = document.querySelectorAll('.header_inner_item')
header_inner_items.forEach((elem) => {
    elem.addEventListener('click', () => {
        header_item.classList.toggle("open")
        lines.forEach((line) => {
            line.classList.toggle("open")
        });
    })
})