import { createHomePage } from './homepage.js'

let content = document.querySelector('#content');

function removeAllContent() {
    while (content.firstElementChild) {
        content.firstElementChild.remove()
    }
}


content.appendChild(createHomePage());