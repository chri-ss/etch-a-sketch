function createGrid () {
    let container = document.querySelector('#container');

    for(i = 0; i < 256; ++i)
    {
        container.appendChild(document.createElement('div'));
        container.lastChild.classList.add('.div');
    }

}

function addColor() {

    const divs = document.querySelectorAll('div');

    let realDivs = Array.from(divs);

    console.log(realDivs);

    for (let i = 0; i < realDivs.length; ++i)
    {
        realDivs[i].addEventListener('mouseover', function() {
            realDivs[i].style.backgroundColor = 'black';
        })
    }

    const container = document.querySelector('#container');

    container.addEventListener('mouseover', function() {
        container.style.backgroundColor = 'white';
    })
}

createGrid();
addColor();