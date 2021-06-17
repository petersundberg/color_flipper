const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
//#f15025 (orange)

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function(){
    let hexColor = '#';
    for(let i = 0; i < 6; i++){
        hexColor += hex[getRandomNumber()];
    }
    color.textContent = hexColor;
    color.style.color = hexColor; //hex color code same as background
    document.body.style.backgroundColor = hexColor;
})

function getRandomNumber(){
    return Math.floor(Math.random() * hex.length);
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