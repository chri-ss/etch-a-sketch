let input = 20;

let container = document.querySelector('#container');

let colorFlag = false;

let resize = document.querySelector('.rszbtn');
resize.addEventListener('click', resizeGrid);

let colorButton = document.querySelector('.clrbtn');
colorButton.addEventListener('change', (e) => {
    if (e.currentTarget.checked)
    {
        colorFlag = true;
    }
    else
    {
        colorFlag = false;
    }
    addColor();
})

createGrid();
addColor();

let erase = document.querySelector('.erase')
erase.addEventListener('click', function() { 
    const divs = document.querySelectorAll('.div');
    let realDivs = Array.from(divs);
    for (let i = 0; i < realDivs.length; ++i)
        {
            realDivs[i].style.backgroundColor = 'white';
        }
})

function resizeGrid() {

    for (i = 0; i < input ** 2; ++i)
    {
        container.removeChild(container.lastChild);
    }

    input = prompt('Enter a new size for the grid.');

    if (input <= 0 || input > 100)
    {
        input = prompt('Enter a new size for the grid.');
    }

    container.style.gridTemplateColumns = `repeat(${ input }, 1fr)`;
    container.style.gridTemplateRows = `repeat(${ input }, 1fr)`;
        
    createGrid();
    addColor();
}

function createGrid() {

    for(i = 0; i < input ** 2; ++i)
    {
        container.appendChild(document.createElement('div'));
        container.lastChild.classList.add('div');
    }

}

function addColor() {

    const divs = document.querySelectorAll('div');

    let realDivs = Array.from(divs);

    console.log(realDivs);

    if (colorFlag === false)
    {
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
    else
    {
        for (let i = 0; i < realDivs.length; ++i)
        {
            realDivs[i].addEventListener('mouseover', function() {
                realDivs[i].style.backgroundColor = `rgb(${ Math.floor(Math.random() * 256) }, 
                ${ Math.floor(Math.random() * 256) }, ${ Math.floor(Math.random() * 256) })`;
                })
        }

        const container = document.querySelector('#container');

        container.addEventListener('mouseover', function() {
        container.style.backgroundColor = 'aquamarine';
        })
    }
}

