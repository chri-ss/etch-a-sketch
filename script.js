let input = 16;

let container = document.querySelector('#container');

let resize = document.querySelector('.resize');
resize.addEventListener('click', resizeGrid);

function resizeGrid() {
    input = prompt("enter a new size for the grid.");

    container.cssText = `grid-template-columns: repeat(${ parseInt(input) }, 
                        1fr);grid-template-rows: repeat(${ parseInt(input) }, 1fr);`

    for(i = 0; i < input ** 2; ++i)
    {
        container.appendChild(document.createElement('div'));
        container.lastChild.classList.add('.div');
    }

}

function createGrid() {

    for(i = 0; i < input ** 2; ++i)
    {
        container.appendChild(document.createElement('div'));
        container.lastChild.classList.add('.div');
    }

}

function addColor() {

    let divs = document.querySelectorAll('div');

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