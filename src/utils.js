const divFactory = (className) => {
    let div = document.createElement('div');
    if (className) {
        div.classList.add(className)
    }

    return div;
}

const createText = (content, type) => {
    let text = document.createElement(type);
    text.innerText = content;

    return text;
}

export { divFactory, createText }