
/*

 function d6NumGen (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
 };
   //  console.log(d6NumGen(1, 6));

var drives = {
    1 : "Faith",
    2 : "Glory",
    3 : "Justice",
    4 : "Power",
    5 : "Thrill",
    6 : "Wonder"

};
var drivesResult = drives[d6NumGen(1, 6)]

console.log(drivesResult)

var domOfMagic = {
    1 : "Astral",
    2 : "Divination",
    3 : "Glamour",
    4 : "Nature",
    5 : "Pyromancy",
    6 : "Thaumaturgy"

};

var domOfMagicResult = domOfMagic[d6NumGen(1, 6)]

console.log(domOfMagicResult)

var backgrounds = {
    1 : "Consul",
    2 : "Labourer",
    3 : "Occultist",
    4 : "Physician",
    5 : "Trader",
    6 : "Vagabond"

};
var backgroundResult = backgrounds[d6NumGen(1, 6)]

console.log(backgroundResult)

const button = document.createElement('button')

button.innerText = "Generate"

button.addEventListener('click', () => {
    alert(drivesResult)
})
document.body.appendChild(button)
*/

// document.getElementById("results").innerHTML = 
//"The volume of this cube is " +result1 + " and " +result2;
const button = document.createElement('button')

button.innerText = "Generate Drive"

button.addEventListener('click', () => {
    function d6NumGen (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
     };
     var drives = {
        1 : "Faith",
        2 : "Glory",
        3 : "Justice",
        4 : "Power",
        5 : "Thrill",
        6 : "Wonder"
    
    };
    var drivesResult = drives[d6NumGen(1, 6)]
    document.getElementById("results1").innerHTML = (drivesResult)
    //alert(drivesResult)  --- pop up window version
})

button.style.width = '100px'; // setting the width
button.style.height = '80px'; // setting the height 
button.style.background = ''; // setting the background color
button.style.color = 'black'; // setting the color 
button.style.fontSize = '16px'; // setting the font size 

document.body.appendChild(button)


const button2 = document.createElement('button')

button2.innerText = "Generate Magic"

button2.addEventListener('click', () => {
    function d6NumGen (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
     };
     var domOfMagic = {
        1 : "Astral",
        2 : "Divination",
        3 : "Glamour",
        4 : "Nature",
        5 : "Pyromancy",
        6 : "Thaumaturgy"
    
    };
    
    var domOfMagicResult = [[domOfMagic[d6NumGen(1, 6)]],     // needs work 
    [domOfMagic[d6NumGen(1, 6)]], [domOfMagic[d6NumGen(1, 6)]]]
    document.getElementById("results2").innerHTML = (domOfMagicResult)
    //alert(domOfMagicResult)   --- pop up window version
})

button2.style.width = '100px'; // setting the width
button2.style.height = '80px'; // setting the height 
//button3.style.background = ''; // setting the background color
button2.style.color = 'black'; // setting the color 
button2.style.fontSize = '16px'; // setting the font size \

document.body.appendChild(button2)


const button3 = document.createElement('button')

button3.innerText = "Generate Background"

button3.addEventListener('click', () => {
    function d6NumGen (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
     };
     var backgrounds = {
        1 : "Consul",
        2 : "Labourer",
        3 : "Occultist",
        4 : "Physician",
        5 : "Trader",
        6 : "Vagabond"
    
    };
    var backgroundResult = backgrounds[d6NumGen(1, 6)]
    document.getElementById("results3").innerHTML = (backgroundResult)
    //alert(backgroundResult)       --- pop up window version
})

button3.style.width = '100px'; // setting the width
button3.style.height = '80px'; // setting the height 
//button3.style.background = ''; // setting the background color
button3.style.color = 'black'; // setting the color 
button3.style.fontSize = '16px'; // setting the font size 

document.body.appendChild(button3)

