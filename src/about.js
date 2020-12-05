import { divFactory, createText } from "./utils.js";
import { generateFooter } from "./footer";


const generateAboutText = () => {
    const parent = divFactory('text-content');
    const header = createText('About', 'h1');
    const lorem = createText('Lorem ipsum dolor sit amet, consectetur adipiscing elit,\
    sed do eiusmod tempor incididunt ut labore et dolore \
    magna aliqua. Ut enim ad minim veniam, quis nostrud \
    exercitation ullamco laboris nisi ut aliquip ex ea \
    commodo consequat. Duis aute irure dolor in \
    reprehenderit in voluptate velit esse cillum dolore eu\
    fugiat nulla pariatur. Excepteur sint occaecat cupidatat\
    non proident, sunt in culpa qui officia deserunt mollit\
    anim id est laborum.', 'p');

    const story = createText('Our Story', 'h1');
    const ingredients = createText('Ingredients', 'h1');


    parent.appendChild(header);
    parent.appendChild(lorem.cloneNode(true));
    parent.appendChild(story);
    parent.appendChild(lorem.cloneNode(true));
    parent.appendChild(ingredients);
    parent.appendChild(createText('Made with free range cacao', 'p'))

    return parent
}

const createAboutPage = () => {
    const parent = divFactory('image-text');
    parent.appendChild(generateAboutText())
    parent.appendChild(generateFooter())

    return parent
}



export { createAboutPage }