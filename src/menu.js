import { divFactory, createText } from './utils.js'
import { generateFooter } from './footer'

// const generateContactText = () => {
//     const parent = divFactory('text-content');
//     const header = createText('Contact Us', 'h1');
//     const lorem = createText('Lorem ipsum dolor sit amet, consectetur adipiscing elit,\
//     sed do eiusmod tempor incididunt ut labore et dolore \
//     magna aliqua. Ut enim ad minim veniam, quis nostrud \
//     exercitation ullamco laboris nisi ut aliquip ex ea \
//     commodo consequat. Duis aute irure dolor in \
//     reprehenderit in voluptate velit esse cillum dolore eu\
//     fugiat nulla pariatur. Excepteur sint occaecat cupidatat\
//     non proident, sunt in culpa qui officia deserunt mollit\
//     anim id est laborum.', 'p');

//     parent.appendChild(header);
//     parent.appendChild(lorem);

//     return parent
// }

const menuItem = (name, desc, pic, price) => {
    return { name, desc, pic, price }
}

const pictureUrl = '../dist/resources/images/mug-large.jpg'

const Menu = (() => {
    let menuItems = []

    const printItems = () => {
        items().forEach((item) => console.log(item))
    }

    /* just to have a menu */
    const _fillMenu = () => {
        menuItems.push(
            menuItem(
                'Regular',
                'milk, cacoa powder, in a mug. Pretty Regualar.',
                pictureUrl,
                4.0
            )
        )
        menuItems.push(
            menuItem(
                'Marshmellow Haven',
                'milk, cacoa powder. Topped with a mountain of marshmellows.',
                pictureUrl,
                5.0
            )
        )
        menuItems.push(
            menuItem(
                'Dark Chocolate',
                'milk, dark cacoa powder, and a mug.',
                pictureUrl,
                4.0
            )
        )
        menuItems.push(
            menuItem(
                'Deluxe',
                'milk, cacoa powder. Topped with whipped cream or marshmellows. Smothered in chocolate syrup and more chocoalte powder',
                pictureUrl,
                6
            )
        )
    }

    _fillMenu()

    const _createMenuItemCard = (item) => {
        const gridItem = divFactory('grid-item')
        // gridItem.classList.add('text-content')
        const text = divFactory('item-info')
        const picture = divFactory('item-picture')

        console.log(item)
        for (let key in item) {
            let stuff = item[key]
            if (key === 'pic') {
                const pic = document.createElement('img')
                pic.alt = item.name
                pic.src = item[key]
                picture.appendChild(pic)
                continue
            } else if (key === 'price') {
                stuff = `$${item[key]}`
            }
            // switch(key) {
            //     case "pic":
            //         const pic = document.createElement('img');
            //         pic.alt = item.name;
            //         pic.src = item[key];
            //         picture.appendChild(pic);
            //         continue;
            //     case "price":
            //         const price = `$${item[key]}`
            //         break;
            //         // element = createText(`${item[key]}`)
            // }

            const div = divFactory(key)
            const content = createText(stuff, 'p')
            div.appendChild(content)
            text.appendChild(div)
        }

        gridItem.appendChild(text)
        gridItem.appendChild(picture)

        console.log(gridItem)
        return gridItem
    }

    const createMenu = () => {
        const grid = divFactory('grid-wrapper')
        menuItems.forEach((item) => {
            grid.appendChild(_createMenuItemCard(item))
        })

        console.log(grid)
        return grid
    }

    return { createMenu }
})()

const createMenuPage = () => {
    const parent = divFactory('image-text')
    //parent.appendChild(generateContactText())
    parent.appendChild(generateFooter())

    return parent
}

export { createMenuPage, Menu }
