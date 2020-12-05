const divFactory = (className) => {
    let div = document.createElement('div');
    if (className) {
        div.classList.add(className)
    }

    return div;
}

const logo = () => {
    let logoDiv = divFactory('logo')
    logoDiv.innerHTML = '<i class="las la-mug-hot"></i>'

    return logoDiv;
}

const createText = (content, type) => {
    let text = document.createElement(type);
    text.innerText = content;

    return text;
}

const generateHomepageText = () => {
    const parent = divFactory();
    const header = createText('Coco Cabana', 'h1');
    const para = createText('Music and passion are always in fashion at the coco cabana', 'p');
    const lorem = createText('    Lorem ipsum dolor sit amet, consectetur adipiscing elit,\
    sed do eiusmod tempor incididunt ut labore et dolore \
    magna aliqua. Ut enim ad minim veniam, quis nostrud \
    exercitation ullamco laboris nisi ut aliquip ex ea \
    commodo consequat. Duis aute irure dolor in \
    reprehenderit in voluptate velit esse cillum dolore eu\
    fugiat nulla pariatur. Excepteur sint occaecat cupidatat\
    non proident, sunt in culpa qui officia deserunt mollit\
    anim id est laborum.', 'p')

    parent.appendChild(header);
    parent.appendChild(para);
    parent.appendChild(lorem);
    
    return parent;

}

const createHomePage = () => {
    const parent = divFactory('image-text');
    const logoDiv = logo();
    const text = generateHomepageText();

    parent.appendChild(logoDiv);
    parent.appendChild(text)

    return parent;

}

export { createHomePage }