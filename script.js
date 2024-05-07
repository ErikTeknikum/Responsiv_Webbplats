
let json = [
    {    
        "img": "hugo.png",
        "imgText": "hugo",
        "category": "hej",
        "text":"Hugo när han fokuserar kraftfullt när han programmerar"
        
    },
    {    
        "img": "stump.jpg",
        "imgText": "Stubbe",
        "category": "hej",
        "text":"Detta var en gång i tiden ett ståtligt träd, nu endast ett minne av sitt forna själv"
    },
    {    
        "img": "StartImage.jpg",
        "imgText": "Starten",
        "category": "hej",
        "text":"Vi alla börjar någonstans, förlora dig inte på vägen"
    },
    {
        "img": "JavaVsCPlusPlus.jpg",
        "imgText": "Meme",
        "category": "hej2",
        "text":"Detta är ett meme om två olika programmeringsspråk, C++ utvecklare är g"
    }
]

let main;
let filteredArray;
function init(){
    main = document.getElementsByTagName("main")[0];
    classw();
    let highest = document.getElementById("highest");
    let name = document.getElementById("name");
    let lowest = document.getElementById("lowest");
    name.addEventListener("click" , event =>{
        swap1Reverse();
        console.log("hej");
    })
    highest.addEventListener("click" , event =>{
        swap1();
        console.log("hej");
    })
    lowest.addEventListener("click" , event =>{
        filter();
        console.log("hej");
    })

    createMainJson();
}
window.onload = init();


function createMainJson(){
    console.log(json);
    let img;
    let figure;
    let figCaption;
    let p;
    for(i = 0; i < json.length; i++){
        figure = document.createElement("figure");
        main.appendChild(figure);
        img = document.createElement("img");
        img.src = json[i].img;
        figCaption = document.createElement("figcaption");
        figCaption.innerHTML = json[i].imgText;
        figure.appendChild(img);
        figure.appendChild(figCaption);
        p = document.createElement("p");
        main.appendChild(p);
        p.innerHTML = json[i].text;
    }
}


function createMainJsonCat() {
    console.log(filteredArray);
    let img;
    let figure;
    let figCaption;
    let p;
    for (let i = 0; i < filteredArray.length; i++) {
        figure = document.createElement("figure");
        main.appendChild(figure);
        img = document.createElement("img");
        img.src = filteredArray[i].img; // Corrected line
        figCaption = document.createElement("figcaption");
        figCaption.innerHTML = filteredArray[i].imgText; // Corrected line
        figure.appendChild(img);
        figure.appendChild(figCaption);
        p = document.createElement("p");
        main.appendChild(p);
        p.innerHTML = filteredArray[i].text; // Corrected line
    }
}

function swap1Reverse(){
    json.sort((a, b) => {
        const textA = a.kostnad;
        const textB = b.kostnad;

        if (textA < textB) {
            return -1;
        }
        if (textA > textB) {
            return 1;
        }
        return 0;
    });
    json.reverse();
    main.innerHTML = '';
    createMainJson();
    console.log(json)
}

function filter(){
    filteredArray = json.filter(item => item.category=== "hej");
    console.log(filteredArray);
    main.innerHTML = '';
    createMainJsonCat();

}
function classw(){
    let sideBar = document.getElementById("1");
    var divElement = document.createElement("div");
    sideBar.appendChild(divElement);
    var highestButton = document.createElement("button");
    highestButton.innerHTML = "Highest";
    highestButton.id = "highest";
  
    var lowestButton = document.createElement("button");
    lowestButton.innerHTML = "Lowest";
    lowestButton.id = "lowest";
  
    var nameButton = document.createElement("button");
    nameButton.innerHTML = "Name";
    nameButton.id = "name";
  
 
    divElement.appendChild(highestButton);
    divElement.appendChild(lowestButton);
    divElement.appendChild(nameButton);
 }