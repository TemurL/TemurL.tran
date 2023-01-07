// const delBtn = document.querySelector('button#clean')
const delBtn = document.createElement('button');
delBtn.id = 'clean';
delBtn.textContent = 'Delete All'
const sList = document.querySelector('.play-list');
const main = document.querySelector('main');
delBtn.onclick = () => {
    localStorage.clear();
    location.reload();
     console.log('done')
}

if (sList.textContent) {
    main.appendChild(delBtn)
} else {
    console.log('btn yokk')
}