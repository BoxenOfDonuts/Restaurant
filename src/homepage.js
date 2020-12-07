import { divFactory, createText } from './utils.js'
import { generateFooter } from './footer'

const logo = () => {
    const logoDiv = divFactory('logo')
    logoDiv.innerHTML = '<i class="las la-mug-hot"></i>'

    return logoDiv
}

const generateHomepageText = () => {
    const parent = divFactory('text-content')
    const header = createText('Coco Cabana', 'h1')
    const para = createText(
        'Chocolate and passion are always in fashion at the coco cabana',
        'p'
    )
    const lorem = createText(
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit,\
    sed do eiusmod tempor incididunt ut labore et dolore \
    magna aliqua. Ut enim ad minim veniam, quis nostrud \
    exercitation ullamco laboris nisi ut aliquip ex ea \
    commodo consequat. Duis aute irure dolor in \
    reprehenderit in voluptate velit esse cillum dolore eu\
    fugiat nulla pariatur. Excepteur sint occaecat cupidatat\
    non proident, sunt in culpa qui officia deserunt mollit\
    anim id est laborum.`,
        'p'
    )

    const header2 = createText('Lorem Ipusum', 'h1')

    parent.appendChild(header)
    parent.appendChild(para)
    parent.appendChild(lorem.cloneNode(true))
    parent.appendChild(header2)
    parent.appendChild(lorem)

    return parent
}

const createHomePage = () => {
    const parent = divFactory('image-text')
    const logoDiv = logo()
    const text = generateHomepageText()
    const footer = generateFooter()

    parent.appendChild(logoDiv)
    parent.appendChild(text)
    parent.appendChild(footer)

    return parent
}

export { createHomePage }
