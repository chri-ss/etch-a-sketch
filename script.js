let input = 20;

let container = document.querySelector('#container');

let resize = document.querySelector('.rszbtn');
resize.addEventListener('click', resizeGrid);

function resizeGrid() {

    for (i = 0; i < input ** 2; ++i)
    {
        container.removeChild(container.lastChild);
    }

    input = prompt('Enter a new size for the grid.');

    container.style.gridTemplateColumns = `repeat(${ input }, 1fr)`;
    container.style.gridTemplateRows = `repeat(${ input }, 1fr)`;

    for(i = 0; i < input ** 2; ++i)
    {
        container.appendChild(document.createElement('div'));
        container.lastChild.classList.add('.div');
    }

        addColor();
}

function createGrid() {

    for(i = 0; i < input ** 2; ++i)
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
        container.style.backgroundColor = 'aquamarine';
    })
}

createGrid();
addColor();