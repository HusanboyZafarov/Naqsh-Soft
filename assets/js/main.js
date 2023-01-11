let header_btn = document.querySelector(".header_btn"),
    header_form = document.querySelector(".header_form"),
    header_closer = document.querySelector(".header_closer"),
    from_bg_closer = document.querySelector(".from_bg_closer"),
    section_works_item_work_info_closer = document.querySelectorAll(".section_works_item_work_info_closer")

let header_burger = document.querySelector(".header_burger"),
    lines = document.querySelectorAll(".header_line"),
    body = document.querySelector("body"),
    html = document.querySelector("html"),
    header_item = document.querySelector('.header_item:nth-child(2)')
header_burger.addEventListener("click", () => {
    header_item.classList.toggle("open")
    lines.forEach((line) => {
        line.classList.toggle("open")
    });
    body.classList.toggle("opened")
    html.classList.toggle("opened")
})

let section_works_item_work_clicks = document.querySelectorAll(".section_works_item_img")
section_works_item_work_clicks.forEach((el) => {
    el.addEventListener("click", () => {
        div = el.parentElement
        section_works_item_work_clicks.forEach((el) => {
            outer_div = el.parentElement
            outer_div.classList.remove("opened")
            outer_div.classList.remove("none")
        });
        div.classList.add("none")
        let timeID = setTimeout(changed, 500)
        function changed() {
            outer_div = el.parentElement
            outer_div.classList.remove("none")
            outer_div.classList.add("opened")
        }
    })
});

section_works_item_work_info_closer.forEach((element) => {
    element.addEventListener("click", () => {
        div = element.parentElement
        section_works_item_work_clicks.forEach((el) => {
            outer_div = el.parentElement
            outer_div.classList.remove("opened")
        });
        div.classList.add("none")
        let timeID = setTimeout(noned, 1500)
        function noned() {
            div.classList.remove("none")
        }
    })
});

from_bg_closer.addEventListener("click", () => {
    header_form.classList.remove("open")
    body.classList.remove("opened")
    html.classList.remove("opened")
    from_bg_closer.classList.remove("opened")
    section_works_item_work_clicks.forEach((el) => {
        el.classList.remove("opened")
    });
})
header_closer.addEventListener("click", () => {
    header_form.classList.remove("open")
    body.classList.remove("opened")
    html.classList.remove("opened")
    from_bg_closer.classList.remove("opened")
})
let btns = document.querySelectorAll(".btn_form_opener")
btns.forEach((el) => {
    el.addEventListener("click", () => {
        header_form.classList.add("open")
        body.classList.add("opened")
        html.classList.add("opened")
        from_bg_closer.classList.add("opened")
    })
});

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
        body.classList.toggle("opened")
        html.classList.toggle("opened")
    })
})

window.addEventListener("load", () => {
    let loader = document.querySelector(".loader")
    loader.classList.toggle("loaded")
    time = setTimeout(displayNoneLoader, 500)
    function displayNoneLoader() {
        loader.classList.toggle("closed")
        loader.classList.toggle("loaded")
    }
})

let item_works = document.querySelectorAll('.section_works_inner_item'),
    item_works_spans = document.querySelectorAll('.section_work_span'),
    section_work_loader = document.querySelector(".section_work_loader")

let web = document.querySelectorAll(".web")
let mobile = document.querySelectorAll(".mobile")
let desktop = document.querySelectorAll(".desktop")

let section_works_item_work = document.querySelectorAll(".section_works_item_work")

item_works_spans.forEach(el => {
    el.addEventListener("click", () => {
        item_works.forEach((items) => {
            items.classList.remove("choosed")
        });

        section_work_loader.classList.toggle("opened")
        time = setTimeout(displayNoneLoader, Math.round(Math.random() * 1000))
        function displayNoneLoader() {
            section_work_loader.classList.toggle("opened")
        }
        el.parentElement.classList.add("choosed")

        if (el == item_works_spans[1]) {
            web.forEach((element) => {
                element.classList.remove("closed")
            });
            desktop.forEach((element) => {
                element.classList.add("closed")
            });
            mobile.forEach((element) => {
                element.classList.add("closed")
            });
        }

        else if (el == item_works_spans[2]) {
            web.forEach((element) => {
                element.classList.add("closed")
            });
            desktop.forEach((element) => {
                element.classList.add("closed")
            });
            mobile.forEach((element) => {
                element.classList.remove("closed")
            });
        }

        else if (el == item_works_spans[3]) {
            web.forEach((element) => {
                element.classList.add("closed")
            });
            desktop.forEach((element) => {
                element.classList.remove("closed")
            });
            mobile.forEach((element) => {
                element.classList.add("closed")
            });
        }

        else if (el == item_works_spans[0]) {
            web.forEach((element) => {
                element.classList.remove("closed")
            });
            desktop.forEach((element) => {
                element.classList.remove("closed")
            });
            mobile.forEach((element) => {
                element.classList.remove("closed")
            });
        }
    })
});

let btn_up = document.querySelector(".btn-up")
window.addEventListener("scroll", () => {
    btn_up.classList.toggle("opened", window.scrollY > 500)
})


window.addEventListener("scroll", () => {
    success.classList.remove("opened", window.scrollY > 300)
    error.classList.remove("opened", window.scrollY > 300)
})