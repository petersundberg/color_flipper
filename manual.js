// const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const color = document.querySelector('.color');

const hex1 = document.getElementById('hex1');
const hex2 = document.getElementById('hex2');
const hex3 = document.getElementById('hex3');
const hex4 = document.getElementById('hex4');
const hex5 = document.getElementById('hex5');
const hex6 = document.getElementById('hex6');

const hexClass = document.querySelectorAll('.hexClass');
let hexColor = '#';


// Set default values at start
function setDefaultValues(){
    const values = ['F', 1, 'F', 5, 'F', 8]        
        for(let j = 0; j < 6; j++){
            document.querySelectorAll('.hexClass')[j].value = values[j];
            hexColor += values[j];
        }
        color.textContent = hexColor;
        color.style.color = hexColor; //hex color code same as background
        document.body.style.backgroundColor = hexColor;        
}
setDefaultValues();


//change color when drop-down-lists changes value
document.querySelectorAll('.hexClass').forEach(item => {
    item.addEventListener('change', event => {
        
        hexColor = putTogetherHexes();

        color.textContent = hexColor;
        color.style.color = hexColor; //hex color code same as background
        document.body.style.backgroundColor = hexColor;
    })
    })

function putTogetherHexes(){
    hexColor = '#' + hex1.value + hex2.value + hex3.value + hex4.value + hex5.value + hex6.value;
    return hexColor;
}


function highlightCurrentLink(){
    let linkValues = document.querySelectorAll('a');
    
    linkValues.forEach(function(link) {
        let linkValue = link.getAttribute('href'); //the VALUE of link in html
        let lastPartOfUrl = document.URL.substring(document.URL.lastIndexOf('/') + 1)
            if(linkValue === lastPartOfUrl){
                link.classList.add('active-link');
            }
    });
}
highlightCurrentLink();  
