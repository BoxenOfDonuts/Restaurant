import { divFactory, createText } from './utils'

const generateHours = () => {
    const parent = document.createElement('p')
    parent.innerHTML = `<strong>Monday</strong><br>Closed<br>\
                        <strong>Tuesday - Thursday</strong><br>7a - 11p<br>\
                        <strong>Friday - Sunday</strong><br>6a - 1a<br>`

    return parent
}

const generateFooter = () => {
    const address = divFactory('address')
    const parent = divFactory('text-footer')
    const hours = divFactory('hours')
    const addressText = '9944 Sherman Street\n\
    Ridgewood, NY 11385'

    address.appendChild(createText('- Address -', 'h2'))
    address.appendChild(createText(addressText, 'p'))
    parent.appendChild(address)

    hours.appendChild(createText('- Hours -', 'h2'))
    // hours.appendChild(createText(hoursText, 'p'));
    // parent.appendChild(hours);
    hours.appendChild(generateHours())
    parent.appendChild(hours)

    return parent
}

export { generateFooter }
