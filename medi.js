
let get = document.querySelector('ul');

let fill = document.querySelector('input');

function add(item) {
    let make = document.createElement('li');
    make.innerHTML = `${item}<button class="item" onclick="destroy()">x</button>`;
    get.appendChild(make);
}


function destroy() {

    let off = document.querySelector('li');
    off.remove();
    
}