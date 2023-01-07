const addBtnsArr = document.querySelectorAll('button')
class Song {
    constructor(name, url) {
        this.name = name;
        this.url = url
    }
}
let PL = []

if (localStorage.test) {
    PL = JSON.parse(localStorage.test);
} else {
    PL = [];
}

function findBtn(list, name) {
    for (let i = 0; i < list.length; i+=1) {
        if (list[i].name === name) {
            return true
        }
    }
    return false
}


addBtnsArr.forEach((addBtn) => {



    if (findBtn(PL, addBtn.id)) {
        addBtn.setAttribute('disabled','disabled');
    } else {
    
    addBtn.onclick = () => {
        let url = addBtn.parentElement.parentElement.childNodes[5].getAttribute('src')
        const song = new Song(addBtn.id, url)

        PL.push(song)

        localStorage.test = JSON.stringify(PL)

        addBtn.setAttribute('disabled','disabled');
        addBtn.style.boxShadow = 'inset 5px 6px 7px 20px #0000004d';

    }}
})


