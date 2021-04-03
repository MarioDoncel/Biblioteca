let posters = [
    'https://uauposters.com.br/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/2/0/201906131110-uau-posters-filmes-bumblebee.jpg', 
    'https://assets0.minhaserie.com.br/uploads/editor_pictures/000/050/824/content_pic.jpg',
    'http://br.web.img2.acsta.net/r_1280_720/pictures/19/04/30/17/13/2380866.jpg'
]
let filmes = [
    'Bumblebee',
    'Justice League',
    'Sonic - O Filme'
]

// Arrays de dados poderiam ser apenas um array de objetos mas o curso pedia para que fosse feito dessa forma

let index = 0 // posição do array


//Selecionado os tres elementos de apresentação  ***** colocar um icone de direcao entre eles no HTML para fazer onclick *****
const movieRight = document.querySelector('.movie.right')
const movieLeft = document.querySelector('.movie.left')
const movieActive = document.querySelector('.movie.active')


// display do carousel de 3 items, com logica de alteração 
//**pesquisar maneira mais limpa de obter o mesmo resultado ***
function populateMovies() { 
    //logicao de alteração
    let leftindex = index 
    let activeIndex = index + 1 
    let rightIndex = index + 2 

    if (leftindex == -1) leftindex = posters.length-1
    if (leftindex == -2) leftindex = posters.length-2

    if (activeIndex == -1) activeIndex = posters.length-1
    if (activeIndex == posters.length) activeIndex = 0

    if (rightIndex == posters.length) rightIndex = 0
    if (rightIndex == posters.length+1) rightIndex = 1

    //display
    movieRight.innerHTML = `
        <img src="${posters[rightIndex]}" alt="">
        <h3>${filmes[rightIndex]}</h3>`
    movieLeft.innerHTML = `
        <img src="${posters[leftindex]}" alt="">
        <h3>${filmes[leftindex]}</h3>`
    movieActive.innerHTML = `
        <img src="${posters[activeIndex]}" alt="">
        <h3>${filmes[activeIndex]}</h3>`
}

populateMovies() // execuntado funcao de popular items inicial

var timer // variavel declarada em separado para poder manipular o clearTimeout
function moveRight(e) { //movendo para a direito apos 400ms
    clearInterval(timer)
    timer = setInterval(() => { // 
    index++
    if (index >= posters.length) {
        index = 0
    }
    populateMovies()
},500)
    e.target.onmouseleave = () => {clearInterval(timer)} // logica foi feita com onmouseenter portanto se retirado o mouse antes da execucao 
                                                        // a funcao é interrompida, evita que uma passada rapida de mouse execute a funcao
}

function moveLeft(e) {//movendo para a esquerda apos 400ms
    clearInterval(timer)
    timer = setInterval(() => {
        index--
        if (index <= -3) {
            index = 2
        }
    populateMovies()
},500)
    e.target.onmouseleave = () => {clearInterval(timer)} // logica foi feita com onmouseenter portanto se retirado o mouse antes da execucao 
                                                        // a funcao é interrompida, evita que uma passada rapida de mouse execute a funcao 
}