let header_message_success_closer = document.querySelector(".header_message_success_closer"),
    header_message_error_closer = document.querySelector(".header_message_error_closer")
success = document.querySelector(".success"),
    error = document.querySelector(".error")
header_message_success_closer.addEventListener("click", () => {
    success.classList.remove("opened")
})

window.addEventListener("DOMContentLoaded", () => {
    success.classList.add("opened")
    error.classList.add("opened")
})

header_message_error_closer.addEventListener("click", () => {
    error.classList.remove("opened")
})

window.addEventListener("scroll", () => {
    success.classList.remove("opened", window.scrollY > 300)
    error.classList.remove("opened", window.scrollY > 300)
})