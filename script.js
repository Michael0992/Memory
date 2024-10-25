let imgs = ["battleship","building", "car", "Cavalerie", "deserter", "industry", "locomotive", "robot", "submarine","war" ];
let openCards = [];
const cards = document.getElementsByClassName("cardImg");
let card1 = "";
let card2 = "";

function shuffleImgs(imgs){
    imgs = imgs.concat(imgs);
    for(let i = imgs.length - 1  ; i > 0 ; i-- ){
        let randomIndex = Math.floor(Math.random() * (i+1));
        [imgs[i], imgs[randomIndex]] = [imgs[randomIndex], imgs[i]];
    }
    return imgs;
}



function addCards(myImgs , cards){
    for (let i = 0; i < cards.length; i++) {
         cards[i].src = "rsc/"+ myImgs[i] + ".png";         
    }
    imgs = myImgs;
}

function activate(element){
    let selectedCard = element.parentElement
    if(!openCards.includes(selectedCard.id)){
        if(card1 == ""){
            card1 = selectedCard;
             
            flip(card1);          
            }
        
        else if(card2 == "" && selectedCard != card1){
            card2 = selectedCard;
            flip(card2)
            console.log(imgs[card1.id-1], imgs[card2.id-1]);
            if(imgs[card1.id-1] == imgs[card2.id-1]){
                openCards.push(card1.id);
                openCards.push(card2.id);   
                card1 = "";
                card2 = "";

            }
            else{
                setTimeout(() => {  
                    flipback(card1, card2);
                    card1 = "";
                    card2 = "";
                }, 2000);
            
            }
            
        }
    }
}


function flip(currentCard){
    currentCard.classList.remove('cardflipback');
    currentCard.classList.add('cardflip');
    setTimeout(() =>{
        
        currentCard.children[1].style.display = "block";  
        currentCard.classList.remove('cardflip');
        currentCard.classList.add('cardflipback');
        

    },1000);


}

function flipback(firstcard, secondcard){

    firstcard.classList.remove('cardflipback');
    secondcard.classList.remove('cardflipback');

    firstcard.classList.add('cardflip');
    secondcard.classList.add('cardflip');
    setTimeout(() =>{
        firstcard.children[1].style.display = "none";  
        secondcard.children[1].style.display = "none";  

        firstcard.classList.remove('cardflip');
        secondcard.classList.remove('cardflip');
        
        firstcard.classList.add('cardflipback');
        secondcard.classList.add('cardflipback');

    },1000);


}


addCards(shuffleImgs(imgs), cards);
