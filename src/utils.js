const divFactory = (className) => {
    const div = document.createElement('div')
    if (className) {
        div.classList.add(className)
    }

    return div
}

const createText = (content, type) => {
    const text = document.createElement(type)
    text.innerText = content

    return text
}

export { divFactory, createText }
