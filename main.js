function CustomGrid(gridSize,colorList) {
    let colors = colorList;
    let deck = [];

    const getDeck = () => {
        let deck = [];
        for(let i = 0; i < gridSize; i++){
            let card = {value: (i+1), shade: ("c"+i)};
           deck.push(card);
        }
        return deck;
    }
    const sort = () => {
      deck.sort(function(a, b) {
         return parseFloat(a.value) - parseFloat(b.value);
      });
      renderDeck();
    }
    const shuffle = () => {
        for (let i = 0; i < 1000; i++){
            const location1 = Math.floor((Math.random() * deck.length));
            const location2 = Math.floor((Math.random() * deck.length));
            const tmp = deck[location1];
            deck[location1] = deck[location2];
            deck[location2] = tmp;
        }
        renderDeck();
    }
    const renderDeck = () => {
         this.document.getElementById('deck').innerHTML = '';
         const container = this.document.getElementById("deck");
        for (let i = 0; i < deck.length; i++) {
           container.innerHTML += '<div class="card" style = "background-color:'+colors[i]+'">'+(deck[i].value)+ '</div>';
        }
    }
    const init = () => {
        deck = getDeck();
        shuffle();
        sort();
        renderDeck();
    }
    return {
        init: init,
        shuffle: shuffle,
        sort: sort
    }
}

let customGrid = CustomGrid(
    9,
    [ "#6F98A8","#2B8EAD","#2F454E","#2B8EAD" ,"#2F454E","#EFEFEF","#EFEFEF","#6F98A8","#2F454E"]
);

window.onload = customGrid.init;