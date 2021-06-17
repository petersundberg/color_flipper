const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function(){
    // get random number between 0 - 3 
    const randomNumber = getRandomNumber();
    console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
})

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
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
