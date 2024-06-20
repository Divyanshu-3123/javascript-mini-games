const cardArray = [
    {
        name: 'eve',
        img: 'images/eve.jpg'
    },
    {
        name: 'balbasaur',
        img: 'images/balbasaur.jpg'
    },
    {
        name: 'charmendar',
        img: 'images/charmendar.jpg'
    },
    {
        name: 'pikachu',
        img: 'images/pikachu.jpg'
    },
    {
        name: 'jigglypuff',
        img: 'images/jigglypuff.jpg'
    },
    {
        name: 'squirtle',
        img: 'images/squirtle.jpg'
    },
    {
        name: 'eve',
        img: 'images/eve.jpg'
    },
    {
        name: 'balbasaur',
        img: 'images/balbasaur.jpg'
    },
    {
        name: 'charmendar',
        img: 'images/charmendar.jpg'
    },
    {
        name: 'pikachu',
        img: 'images/pikachu.jpg'
    },
    {
        name: 'jigglypuff',
        img: 'images/jigglypuff.jpg'
    },
    {
        name: 'squirtle',
        img: 'images/squirtle.jpg'
    }
]

cardArray.sort(() => 0.5 - Math.random())

const grid = document.querySelector('#grid')
const result = document.querySelector('#result')
let cardsChosen = []
let cardsChosenIds = []
const cardsWon = []


function createBoard() {
    for(let i = 0; i < 12; i++) {
        const card = document.createElement('img')
        card.setAttribute('src','images/blank.jpg')
        card.setAttribute('data-id',i)
        grid.appendChild(card)
        card.addEventListener('click', flipCard)
    }
}

createBoard()

function checkMatch() {
    const cards = document.querySelectorAll('#grid img')
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]
    console.log(cards)
    console.log('check for match!')
    if(optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'images/blank.jpg')
        cards[optionTwoId].setAttribute('src', 'images/blank.jpg')
        alert('You clicked the same Card')
    }

    if(cardsChosen[0] == cardsChosen[1]) {
        //alert('You found a Match!')
        cards[optionOneId].setAttribute('src', 'images/offwhite.jpg')
        cards[optionTwoId].setAttribute('src', 'images/offwhite.jpg')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
    } else {
        cards[optionOneId].setAttribute('src', 'images/blank.jpg')
        cards[optionTwoId].setAttribute('src', 'images/blank.jpg')
        //alert('Sorry! Try Again.')
    }

    result.textContent = cardsWon.length
    cardsChosen = []
    cardsChosenIds = []

    if (cardsWon.length == cardArray.length/2) {
        result.textContent = 'Congratulations you found them all!'
    }
}

function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    console.log(cardsChosen)
    console.log(cardsChosenIds)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2) {
        setTimeout(checkMatch, 500)
    }
}

