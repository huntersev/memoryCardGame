document.addEventListener('DOMContentLoaded', function() {
  const cardList = [
    { name: 'human',
      image: 'images/human.jpg',
    },
    { name: 'human',
      image: 'images/human.jpg',
    },
    { name: 'nightelf',
      image: 'images/nightelf.jpg',
    },
    { name: 'nightelf',
      image: 'images/nightelf.jpg',
    },
    { name: 'orc',
      image: 'images/orc.jpg',
    },
    { name: 'orc',
      image: 'images/orc.jpg',
    },
    { name: 'undead',
      image: 'images/undead.png',
    },
    { name: 'undead',
      image: 'images/undead.png',
    },
    { name: 'yogg',
      image: 'images/yogg.jpg',
    },
    { name: 'yogg',
      image: 'images/yogg.jpg',
    },
  ]
  cardList.sort( () => 0.5 - Math.random() );

  const cards = document.querySelector('.cards');

  const attemptsHolder = document.querySelector('.attemptsHolder');
  const matchHolder = document.querySelector('.matchHolder');
  var attempts = 0;
  var matches = 0;
  attemptsHolder.textContent = attempts;
  matchHolder.textContent = matches;

  var chosenCards = [];
  var chosenCardsId = [];
  var allCards = 5;

  function initiateGame(){
    for (var i = 0; i < cardList.length; i++) {
      var card = document.createElement('img');
      card.setAttribute('src', 'images/placeholder.png');
      card.setAttribute('data-id',i);
      card.addEventListener('click', flipCard);
      cards.appendChild(card);
    }
  }


  function flipCard(){
    if(chosenCards.length != 2){
      var cardId = this.getAttribute('data-id');
      if(this.getAttribute('src') != 'images/blank.png'){
        chosenCards.push(cardList[cardId].name);
        chosenCardsId.push(cardId);
        this.setAttribute('src', cardList[cardId].image);
        if(chosenCards.length == 2){
          setTimeout(checkForMatch, 600);
        }
      }
    }    
  }

  function checkForMatch(){
    attempts++;
    var imgs = document.querySelectorAll('img');
    var firstImg = chosenCardsId[0];
    var secondImg = chosenCardsId[1];
    if(chosenCards[0] == chosenCards[1]){
      matches++;
      imgs[firstImg].setAttribute('src', 'images/blank.png');
      imgs[secondImg].setAttribute('src', 'images/blank.png');
    }else{
      imgs[firstImg].setAttribute('src', 'images/placeholder.png');
      imgs[secondImg].setAttribute('src', 'images/placeholder.png');
    }
    chosenCards = [];
    chosenCardsId = [];
    attemptsHolder.textContent = attempts;
    matchHolder.textContent = matches;


    if(matches == allCards){
      alert('You did it !')
    }
  }

    initiateGame();
})