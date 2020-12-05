import { divFactory, createText } from "./utils.js";
import { generateFooter } from "./footer";


const generateContactText = () => {
    const parent = divFactory('text-content');
    const header = createText('Contact Us', 'h1');
    const lorem = createText('Lorem ipsum dolor sit amet, consectetur adipiscing elit,\
    sed do eiusmod tempor incididunt ut labore et dolore \
    magna aliqua. Ut enim ad minim veniam, quis nostrud \
    exercitation ullamco laboris nisi ut aliquip ex ea \
    commodo consequat. Duis aute irure dolor in \
    reprehenderit in voluptate velit esse cillum dolore eu\
    fugiat nulla pariatur. Excepteur sint occaecat cupidatat\
    non proident, sunt in culpa qui officia deserunt mollit\
    anim id est laborum.', 'p');

    parent.appendChild(header);
    parent.appendChild(lorem);

    return parent
}

const createContactPage = () => {
    const parent = divFactory('image-text');
    parent.appendChild(generateContactText())
    parent.appendChild(generateFooter())

    return parent
}



export { createContactPage }