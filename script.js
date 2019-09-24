class Character{
    constructor(name,energy,id){
        this.name = name;
        this.energy = energy;
        this.id = id;
    }

    display = function(){
        document.getElementById(this.id).innerHTML = `Name: ${this.name} <br> Energy: ${this.energy}`;
    }

    attack = function(opponent, item){
        let newEnergy = opponent.energy - item.iHitPoints;
        opponent.energy = newEnergy;
        opponent.display();
        document.getElementById('console').innerHTML = `${this.name} is attacking ${opponent.name} with a ${item.img}`;
            if (opponent.energy <= 0) {
            document.getElementById(opponent.id).innerHTML = 'You Lose'
            document.getElementById(this.id).innerHTML = 'You Win'
            document.getElementById('console').innerHTML = 'Game Over'
            }
    }
}
//object
const c1 = new Character("Mario", 100, "c1"); 
const c2 = new Character("Yoshi", 100, "c2");

c1.display();
c2.display(); 

class Item{
    constructor(iName, iHitPoints, img){
        this.iName = iName;
        this.iHitPoints = iHitPoints;
        this.img = img;
    }
}

const item1 = new Item('Goomba', 10, '<img class = "item" src="img/goomba.png">')
const item2 = new Item('Hammer', 50, '<img class = "item" src="img/hammer.jpg">')
const item3 = new Item('Beastball', 20, '<img class = "item" src="img/beastball.png">')
const item4 = new Item('Banana Gun', 30, '<img class = "item" src="img/banana.png">')
const item5 = new Item('Fan', 10, '<img class = "item" src="img/fan.png">')

const items = [item1, item2, item3, item4, item5];

function selectItem(){
    let selection = Math.floor(Math.random()*5);
    return items[selection];
}
// general function
restart = function() {
    let defaultEnergy=100;
    c1.energy=defaultEnergy;
    c2.energy=defaultEnergy;
    c1.display();
    c2.display();
    document.getElementById('console').innerHTML = "";
}