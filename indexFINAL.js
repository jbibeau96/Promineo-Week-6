class Player {
    constructor(name) {
        this.name = name;
        this.points = 0
        this.cards = []
    }
}

let playerOne = new Player("1");

let playerTwo = new Player("2");

class Deck {
    constructor() {
        this.values = [2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King", "Ace"];
        this.pointValues = [2, 3 ,4 ,5 ,6 ,7 ,8, 9, 10, 11, 12, 13, 14];
        this.suits = ["Hearts", "Spades", "Clubs", "Diamonds"];
        this.deck = []
    }

    formDeck(){
        for(let s = 0; s < this.suits.length; s++) {
            for(let v = 0; v < this.values.length; v++) {
                const suit2 = this.suits[s]
                const values2 = this.values[v]
                const pointValues2 = this.pointValues[v]

                this.deck.push ({suit2, values2, pointValues2})
            }   
        }
    }   
    shuffleDeck() {
        for(let i = this.deck.length - 1; i > 0; i--) {
           let j = Math.floor(Math.random() * i);
           let temp = this.deck[i];
           this.deck[i] = this.deck[j];
           this.deck[j] = temp;
        }
    }
    dealDeck() {
        for(let d = 0; d < 26; d++){
            playerOne.cards.push(this.deck[d])
        };
        for(let dd = 26; dd < 52; dd++){
            playerTwo.cards.push(this.deck[dd]);
        } //console.log(playerOne.cards.length)
        //console.log(playerTwo.cards.length)
       //console.log(playerOne.cards.length)
        //console.log(playerTwo.cards.length)
    } 



    compareCards() {
        for(let cc = 0; cc < 26; cc++) {
    
            if (playerOne.cards[cc].pointValues2 > playerTwo.cards[cc].pointValues2) {
                playerOne.points += 1;
            }   
    
            else if (playerOne.cards[cc].pointValues2 < playerTwo.cards[cc].pointValues2) {
                playerTwo.points += 1;
            }

            else playerOne.points += 0
    
        }
    
    }



}

function declareWinner() {
    if (playerOne.points > playerTwo.points) {
            return console.log("Player One wins the game with: " + playerOne.points)
        }
    
        else if (playerOne.points < playerTwo.points) {
            return console.log("Player Two wins the game with: " + playerTwo.points)
        }
    
        else (playerOne.points == playerTwo.points); {
            return console.log("It was a tie.")
        }
}




let makeDeck = new Deck();
makeDeck.formDeck();
makeDeck.shuffleDeck()
makeDeck.dealDeck()
makeDeck.compareCards()
declareWinner()
console.log("Player 1 points: " + playerOne.points)
console.log("Player 2 points: " + playerTwo.points)
//console.log(playerOne.cards)
//console.log(playerTwo.cards)
//console.log(playerOne.cards[25])
//console.log(playerTwo.cards[25])
