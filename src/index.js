import { createHomePage } from './homepage'
import { createContactPage } from './contact'
import { createAboutPage } from "./about";

const links = document.querySelectorAll('.nav.topnav a');
links.forEach(link => link.addEventListener('click', loadPage));

let content = document.querySelector('#content');

function removeAllContent() {
    while (content.firstElementChild) {
        content.firstElementChild.remove()
    }
}

function loadPage(e) {
    // should prob use id but...v
    let link = e.target.hash;
    console.log(link)
    removeAllContent();
    switch (link) {
        case '#contact':
            content.appendChild(createContactPage());
            break;
        case '#about':
            content.append(createAboutPage());
            break;
    }



}

content.appendChild(createHomePage());