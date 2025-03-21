// const mainAddButton = document.getElementById('mainAddButton');
// const innercontainer = document.getElementById('innercontainer')
// const page = document.getElementById('page')
// const container = document.getElementById('container');


// let count = 0;
// let pagenumbers = []
// let boxes = [0,]
// mainAddButton.addEventListener('click', function() {
//     count++;
//     pagenumbers.push(count)
//     const div = document.createElement('div');
//     div.classList.add('container');
//     div.id = `container${count}`;

//     const input = document.createElement('input');
//     input.type = 'number';
//     input.id = `value${count}`;
//     input.style.margin = '10px';
//     div.appendChild(input);

//     const button = document.createElement('button');
//     button.textContent = "submit";
//     button.id = `button${count}`;
//     button.style.margin = '10px';
//     button.addEventListener('click', function() {
//         handlesubmit(div);
//     });
//     div.appendChild(button);

//     const cross = document.createElement('span');
//     cross.textContent = 'X';
//     cross.classList.add('cross');
//     cross.addEventListener('click', function () {
//         handlecross(div, pagenumber);
//     });
//     div.appendChild(cross);

//     const subcontainer = document.createElement('div');
//     subcontainer.classList.add('subcontainer');
//     subcontainer.id = `subcontainer${count}`;
//     div.appendChild(subcontainer);

//     container.appendChild(div);

//     const pagenumber = document.createElement('span');
//     pagenumber.classList.add('pagenumber');
//     pagenumber.id = `pagenumber${count}`;
//     pagenumber.textContent = pagenumbers.length
//     pagenumber.addEventListener('click', function () {handlePage(div)})
//     page.appendChild(pagenumber);

//     const allDivs = container.getElementsByClassName('container');
//     const spans = innercontainer.querySelectorAll('.pagenumber')

//     for (let i = 0; i < allDivs.length; i++) {
//         allDivs[i].style.display = 'none';
//         spans[i].style.color = 'black';
//     }
//     div.style.display = 'block';
//     pagenumber.style.color = 'red'

// });



// function handlecross(div, pagenumber) {
//     const allDivs = container.getElementsByClassName('container');
//     const getspan = document.getElementsByClassName('pagenumber')

//     if (div === allDivs[0] && allDivs.length === 1) {
//         div.remove()
//     }


//     if (div === allDivs[allDivs.length -1]) {
//         allDivs[allDivs.length -2].style.display = 'block'
//         getspan[allDivs.length -2].style.color = "red"
//     } else {
//         for (let i = 0; i < allDivs.length; i++) {
//             if(div === allDivs[i]) {
//                 allDivs[i+1].style.display = 'block'
//                 getspan[i+1].style.color = "red"
//             }
//         }
//     }
//     pagenumber.remove();
//     div.remove();
//     for (let i = 0; i < getspan.length; i++) {
//         getspan[i].textContent = i+1
//     }
//     pagenumbers.pop()
// }

// function handlePage(div) {
//     const allDivs = container.getElementsByClassName('container');
//     const getspan = document.getElementsByClassName('pagenumber')
//     for (let i = 0; i < allDivs.length; i++) {
//         getspan[i].textContent = i+1
//         if (div === allDivs[i]) {
//             allDivs[i].style.display = "block"
//             getspan[i].style.color = 'red'
//         } else {
//             allDivs[i].style.display = 'none';
//             getspan[i].style.color = 'black';
//         }
//     }
// }

// function handlesubmit(div) {
    
//     const containerId = div.id;
//     const input =  div.querySelector(`#value${containerId.replace('container', '')}`);
//     let value = parseInt(input.value);
//     const subcontainer = div.querySelector(`#subcontainer${containerId.replace('container', '')}`);
//     console.log(subcontainer)


//     if (value <= 0) {
//         alert("Number should be between 1 and 12");
//         return;
//     }

//     for (let i = 0; i < value; i++) {
//         const box = document.createElement('div');
//         box.id = `box${boxes.length}`;
//         box.textContent = boxes.length
//         box.classList.add('box');

//         const cross = document.createElement('span');
//         cross.textContent = 'X';
//         cross.classList.add('innercross')
//         cross.addEventListener('click', function () {
//             innerhandlecross(box, subcontainer);
//         });
//         box.appendChild(cross);

//         subcontainer.appendChild(box);
//         boxes.push(i)
//     }
//     input.value = ""
//     console.log(boxes)
// }


// function innerhandlecross(del,div) {
//     del.remove();

//     const getElement = document.querySelectorAll(`#${div.id} .box`)
//     div.innerHTML = ''
//     for (let i=0; i < getElement.length; i++) {
//         const box = document.createElement('div');
//         box.id = `box${i + 1}`;
//         box.textContent = `${i+1}`
//         box.classList.add('box');

//         const cross = document.createElement('span');
//         cross.textContent = 'X';
//         cross.classList.add('innercross')
//         cross.addEventListener('click', function () {
//             innerhandlecross(box, div);
//         });
//         box.appendChild(cross);
//         div.appendChild(box)
//     }
//     boxes.pop()
// }




// const mainAddButton = document.getElementById('mainAddButton');
// const innercontainer = document.getElementById('innercontainer')
// const page = document.getElementById('page')
// const container = document.getElementById('container');


// const bounds = container.getBoundingClientRect()


// let count = 0;
// let pagenumbers = []
// let boxes = {}
// let boxescount = 1

// mainAddButton.addEventListener('click', function() {
//     console.log(bounds)
//     count++;
//     pagenumbers.push(count)
//     const div = document.createElement('div');
//     div.classList.add('container');
//     div.id = `container${count}`;

//     const input = document.createElement('input');
//     input.type = 'number';
//     input.id = `value${count}`;
//     input.style.margin = '10px';
//     div.appendChild(input);

//     const button = document.createElement('button');
//     button.textContent = "submit";
//     button.id = `button${count}`;
//     button.style.margin = '10px';
//     button.addEventListener('click', function() {
//         handlesubmit(div);
//     });
//     div.appendChild(button);

//     const cross = document.createElement('span');
//     cross.textContent = 'X';
//     cross.classList.add('cross');
//     cross.addEventListener('click', function () {
//         handlecross(div, pagenumber);
//     });
//     div.appendChild(cross);

//     const subcontainer = document.createElement('div');
//     subcontainer.classList.add('subcontainer');
//     subcontainer.id = `subcontainer${count}`;
//     div.appendChild(subcontainer);

//     container.appendChild(div);

//     const pagenumber = document.createElement('span');
//     pagenumber.classList.add('pagenumber');
//     pagenumber.id = `pagenumber${count}`;
//     pagenumber.textContent = pagenumbers.length
//     pagenumber.addEventListener('click', function () {handlePage(div)})
//     page.appendChild(pagenumber);

//     const allDivs = container.getElementsByClassName('container');
//     const spans = innercontainer.querySelectorAll('.pagenumber')

//     for (let i = 0; i < allDivs.length; i++) {
//         allDivs[i].style.display = 'none';
//         spans[i].style.color = 'black';
//     }
//     div.style.display = 'block';
//     pagenumber.style.color = 'red'
//     boxes[`box${count}`] = 1
// });



// function handlecross(div, pagenumber) {
//     const allDivs = container.getElementsByClassName('container');
//     const getspan = document.getElementsByClassName('pagenumber')

//     if (div === allDivs[0] && allDivs.length === 1) {
//         div.remove()
//     }


//     if (div === allDivs[allDivs.length -1]) {
//         allDivs[allDivs.length -2].style.display = 'block'
//         getspan[allDivs.length -2].style.color = "red"
//     } else {
//         for (let i = 0; i < allDivs.length; i++) {
//             if(div === allDivs[i]) {
//                 allDivs[i+1].style.display = 'block'
//                 getspan[i+1].style.color = "red"
//             }
//         }
//     }
//     pagenumber.remove();
//     div.remove();
//     for (let i = 0; i < getspan.length; i++) {
//         getspan[i].textContent = i+1
//     }
//     pagenumbers.pop()
// }

// function handlePage(div) {
//     const allDivs = container.getElementsByClassName('container');
//     const getspan = document.getElementsByClassName('pagenumber')
//     for (let i = 0; i < allDivs.length; i++) {
//         getspan[i].textContent = i+1
//         if (div === allDivs[i]) {
//             allDivs[i].style.display = "block"
//             getspan[i].style.color = 'red'
//         } else {
//             allDivs[i].style.display = 'none';
//             getspan[i].style.color = 'black';
//         }
//     }
// }

// function handlesubmit(div) {
    
//     const containerId = div.id;
//     const input =  div.querySelector(`#value${containerId.replace('container', '')}`);
//     let value = parseInt(input.value);
//     const subcontainer = div.querySelector(`#subcontainer${containerId.replace('container', '')}`);
//     let countId = containerId.replace("container","")
//     console.log(countId)


//     if (value <= 0) {
//         alert("Number should be between 1 and 12");
//         return;
//     }

//     let start = boxes[`box${countId}`]
//     console.log(start)

//     for (let i = start; i < value + start; i++) {
//         const box = document.createElement('div');
//         box.id = `box${boxescount}`;
//         box.textContent = i
//         box.classList.add('box');

//         const cross = document.createElement('span');
//         cross.textContent = 'X';
//         cross.classList.add('innercross')
//         cross.addEventListener('click', function () {
//             innerhandlecross(box, subcontainer);
//         });
//         box.appendChild(cross);
//         boxes[`box${countId}`] +=1
//         subcontainer.appendChild(box);
//     }
//     input.value = ""
//     console.log(boxes)
// }


// function innerhandlecross(del,div) {
//     del.remove();

//     let countId = div.id.replace("subcontainer","")
//     console.log(countId)
//     const getElement = document.querySelectorAll(`#${div.id} .box`)
//     div.innerHTML = ''
//     for (let i=0; i < getElement.length; i++) {
//         const box = document.createElement('div');
//         box.id = `box${i + 1}`;
//         box.textContent = `${i+1}`
//         box.classList.add('box');

//         const cross = document.createElement('span');
//         cross.textContent = 'X';
//         cross.classList.add('innercross')
//         cross.addEventListener('click', function () {
//             innerhandlecross(box, div);
//         });
//         box.appendChild(cross);
//         div.appendChild(box)
//     }
//     boxes[`box${countId}`] -=1
//     console.log(boxes)
// }





const mainAddButton = document.getElementById('mainAddButton');
const innercontainer = document.getElementById('innercontainer')
const page = document.getElementById('page')
const container = document.getElementById('container');


let count = 0;
let pagenumbers = []
let boxes = {}
let boxsize = {}
let boxescount = 1


mainAddButton.addEventListener('click', function() {
    count++;
    pagenumbers.push(count)
    const div = document.createElement('div');
    div.classList.add('container');
    div.id = `container${count}`;

    const input = document.createElement('input');
    input.type = 'number';
    input.id = `value${count}`;
    input.style.margin = '10px';
    div.appendChild(input);

    const button = document.createElement('button');
    button.textContent = "submit";
    button.id = `button${count}`;
    button.style.margin = '10px';
    button.addEventListener('click', function() {
        handlesubmit(div);
    });
    div.appendChild(button);

    const cross = document.createElement('span');
    cross.textContent = 'X';
    cross.classList.add('cross');
    cross.addEventListener('click', function () {
        handlecross(div, pagenumber);
    });
    div.appendChild(cross);

    const subcontainer = document.createElement('div');
    subcontainer.classList.add('subcontainer');
    subcontainer.id = `subcontainer${count}`;
    div.appendChild(subcontainer);

    container.appendChild(div);

    const pagenumber = document.createElement('span');
    pagenumber.classList.add('pagenumber');
    pagenumber.id = `pagenumber${count}`;
    pagenumber.textContent = pagenumbers.length
    pagenumber.addEventListener('click', function () {handlePage(div)})
    page.appendChild(pagenumber);

    const allDivs = container.getElementsByClassName('container');
    const spans = innercontainer.querySelectorAll('.pagenumber')

    for (let i = 0; i < allDivs.length; i++) {
        allDivs[i].style.display = 'none';
        spans[i].style.color = 'black';
    }
    div.style.display = 'block';
    pagenumber.style.color = 'red'
    boxes[`box${count}`] = 1
    boxsize[`size${count}`] = 150
});



function handlecross(div, pagenumber) {
    const allDivs = container.getElementsByClassName('container');
    const getspan = document.getElementsByClassName('pagenumber')

    if (div === allDivs[0] && allDivs.length === 1) {
        div.remove()
    }


    if (div === allDivs[allDivs.length -1]) {
        allDivs[allDivs.length -2].style.display = 'block'
        getspan[allDivs.length -2].style.color = "red"
    } else {
        for (let i = 0; i < allDivs.length; i++) {
            if(div === allDivs[i]) {
                allDivs[i+1].style.display = 'block'
                getspan[i+1].style.color = "red"
            }
        }
    }
    pagenumber.remove();
    div.remove();
    for (let i = 0; i < getspan.length; i++) {
        getspan[i].textContent = i+1
    }
    pagenumbers.pop()
}

function handlePage(div) {
    const allDivs = container.getElementsByClassName('container');
    const getspan = document.getElementsByClassName('pagenumber')
    for (let i = 0; i < allDivs.length; i++) {
        getspan[i].textContent = i+1
        if (div === allDivs[i]) {
            allDivs[i].style.display = "block"
            getspan[i].style.color = 'red'
        } else {
            allDivs[i].style.display = 'none';
            getspan[i].style.color = 'black';
        }
    }
}


function handlesubmit(div) {
    const containerId = div.id;
    const input = div.querySelector(`#value${containerId.replace('container', '')}`);
    let value = parseInt(input.value);
    const subcontainer = div.querySelector(`#subcontainer${containerId.replace('container', '')}`);
    let countId = containerId.replace("container", "");


    if (value <= 0) {
        alert("Number should be greater than Zero");
        return;
    }

    let start = boxes[`box${countId}`];

    for (let i = start; i < value + start; i++) {
        let currentSize = boxsize[`size${countId}`]
        const box = document.createElement('div');
        box.id = `box${i}`;
        box.textContent = i;
        box.style.height = `${currentSize}px`;
        box.style.width = `${currentSize}px`;
        box.classList.add('box');

        const cross = document.createElement('span');
        cross.textContent = 'X';
        cross.classList.add('innercross');
        cross.addEventListener('click', function () {
            innerhandlecross(box, subcontainer);
        });

        if (hasEnoughSpace(box, subcontainer)) {
            subcontainer.appendChild(box);
            box.appendChild(cross);
            boxes[`box${countId}`] += 1;
        } else {
            boxsize[`size${countId}`] -=10
            if (boxsize[`size${countId}`] < 40) {
                boxsize[`size${countId}`] = 40
                alert("No space to add box");
                break;
            }
            resizeShapes(boxsize[`size${countId}`], countId);
            
            i--;
        }
    }
    input.value = "";
}

function innerhandlecross(del, div) {
    del.remove();
    let countId = div.id.replace("subcontainer", "");
    const getElement = document.querySelectorAll(`#${div.id} .box`);
    div.innerHTML = '';
    let currentSize = boxsize[`size${countId}`]
    for (let i = 0; i < getElement.length; i++) {
        const box = document.createElement('div');
        box.id = `box${i + 1}`;
        box.textContent = `${i + 1}`;
        box.style.height = `${currentSize}px`;
        box.style.width = `${currentSize}px`;
        box.classList.add('box');

        const cross = document.createElement('span');
        cross.textContent = 'X';
        cross.classList.add('innercross');
        cross.addEventListener('click', function () {
            innerhandlecross(box, div);
        });

        box.appendChild(cross);
        div.appendChild(box);
    }
    boxes[`box${countId}`] -= 1;
}

function hasEnoughSpace(shape, subcontainer) {
    subcontainer.appendChild(shape);
    const rect = shape.getBoundingClientRect();
    const containerRect = subcontainer.getBoundingClientRect();
    const hasAvailSpace = rect.bottom <= containerRect.bottom && rect.right <= containerRect.right;
    subcontainer.removeChild(shape);
    return hasAvailSpace;
}

function resizeShapes(newSize, countId) {
    const shapes = document.querySelectorAll(`#subcontainer${countId} .box`);
    shapes.forEach((shape) => {
        shape.style.height = `${newSize}px`;
        shape.style.width = `${newSize}px`
    });
}
