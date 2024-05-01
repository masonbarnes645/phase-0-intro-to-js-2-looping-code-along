

const names = ["Guadalupe", "Ollie", "Aki"]


function writeCards(names){
    
    let cards = [];
    for (let i = 0; i < names.length; i++){
        cards.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
    
    }
    return cards

}

writeCards(["Guadalupe", "Ollie", "Aki"]);


function countDown(number){
    let count = number
    while(count >= 0){
        console.log(count)
       count = (count - 1);


    }
}

countDown(11)