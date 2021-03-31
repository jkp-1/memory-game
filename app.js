document.addEventListener('DOMContentLoaded', () => {

    const cardArray = [
        {
            name: 'cheeseburger',
            img: 'images/cheeseburger.png'
        },
        {
            name: 'cheeseburger',
            img: 'images/cheeseburger.png'
        },
        {
            name: 'pizza',
            img: 'images/pizza.png'
        },
        {
            name: 'hotdog',
            img: 'images/hotdog.png'
        },
        {
            name: 'fries',
            img: 'images/fries.png'
        },
        {
            name: 'ice-cream',
            img: 'images/ice-cream.png'
        },
        {
            name: 'milkshake',
            img: 'images/milkshake.png'
        },
        {
            name: 'hotdog',
            img: 'images/hotdog.png'
        },
        {
            name: 'fries',
            img: 'images/fries.png'
        },
        {
            name: 'pizza',
            img: 'images/pizza.png'
        },
        {
            name: 'ice-cream',
            img: 'images/ice-cream.png'
        },
        {
            name: 'milkshake',
            img: 'images/milkshake.png'
        }

    ];
    cardArray.sort(()=> 0.5 - Math.random())
    const grid = document.querySelector('.grid');

    var cardsChosen = [];
    var cardsChosenId = [];
    var cardsWon = [];

    function checkMatch(){
        var cards = document.querySelectorAll('img')
        const cardIdOne = cardsChosenId[0];
        const cardIdTwo = cardsChosenId[1];
        if(cardsChosen[0]===cardsChosen[1]){
            alert("You have found a match");
            cards[cardIdOne].setAttribute('src', 'images/white.png');
            cards[cardIdTwo].setAttribute('src', 'images/white.png');
        }
        else{
            alert("Sorry try again :(");
            cards[cardIdOne].setAttribute('src', 'images/blank.png');
            cards[cardIdTwo].setAttribute('src', 'images/blank.png');
        }
        cardsChosen = [];
        cardsChosenId = [];

    }

    function flipCard(){
        var cardId = this.getAttribute('data-id');
        cardsChosen.push(cardArray[cardId].name);
        this.setAttribute('src', cardArray[cardId].img);
        // console.log(cardsChosen)
        cardsChosenId.push(cardId);
        if(cardsChosen.length === 2){
        setTimeout(checkMatch, 500);
        }
    }   
    function createBoard(){
        for(let i =0; i<cardArray.length; i++){
            var card = document.createElement('img');
            card.setAttribute('src', 'images/blank.png');
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipCard);
            grid.appendChild(card);
        
    }
   
}
createBoard();

    
});