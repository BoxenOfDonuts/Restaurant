import { createHomePage } from './homepage'
import { createContactPage } from './contact'
import { createAboutPage } from './about'
import { Menu } from './menu'

const links = document.querySelectorAll('.nav.topnav a')
links.forEach((link) => link.addEventListener('click', loadPage))

let content = document.querySelector('#content')

function removeAllContent() {
    while (content.firstElementChild) {
        content.firstElementChild.remove()
    }
}

const updateActive = (e) => {
    const elems = document.querySelectorAll('.active')
    elems.forEach((el) => {
        el.classList.remove('active')
    })
    e.target.className = 'active'
}

function loadPage(e) {
    // should prob use id but...v
    updateActive(e)

    const link = e.target.hash
    const active = document.querySelector('.active').hash

    //if (link === active) {console.log('on the same page bro'); return};

    removeAllContent()
    switch (link) {
        case '#home':
            content.appendChild(createHomePage())
            break
        case '#contact':
            content.appendChild(createContactPage())
            break
        case '#about':
            content.appendChild(createAboutPage())
            break
        case '#menu':
            content.appendChild(Menu.createMenu())

            //content.appendChild();
            break
    }
}

content.appendChild(createHomePage())
