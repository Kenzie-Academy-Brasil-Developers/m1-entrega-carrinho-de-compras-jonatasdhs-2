const productsCart = [
    {
        id: 1,
        name: "Banana",
        price: 20.00
    },
    {
        id: 2,
        name: "Caju",
        price: 36.98
    },
    {
        id: 3,
        name: "Morango",
        price: 44.99
    },
    {
        id: 4,
        name: "Manga",
        price: 6.90
    },
    {
        id: 5,
        name: "Melância",
        price: 25.00
    },
    {
        id: 6,
        name: "Pêssego",
        price: 56.50
    },
    {
        id: 7,
        name: "Maçã",
        price: 4.00
    },
]

let soma = 0

//Corpo do HTML
const body = document.querySelector('body')
let main = document.createElement('main')
body.appendChild(main)

//Título Principal
let h1 = document.createElement('h1')
h1.innerText = 'Virtual Market'
main.appendChild(h1)

//DIV legenda da lista
let div = document.createElement('div')
let item = document.createElement('span')
let valor = document.createElement('span')
div.classList.add('header')
item.innerText = 'Itens'
valor.innerText = 'Valor'

div.appendChild(item)
div.appendChild(valor)
main.appendChild(div)


//Criando lista não ordenada
let ul = document.createElement('ul')
main.appendChild(ul)

//Criando a section
let section = document.createElement('section')
main.appendChild(section)




//Criando div Soma da lista
let divPrice = document.createElement('div')
divPrice.classList.add('div-price')
let p = document.createElement('p')
p.innerText = 'Total'
divPrice.appendChild(p)
section.appendChild(divPrice)

//Botão
let button = document.createElement('button')
button.innerText = 'Finalizar Compra'
section.appendChild(button)






//Criando elemento para receber o total da Soma
let totalPrice = document.createElement('p')

createList()

function createList() {
    for (let i = 0; i < productsCart.length; i++) {
        soma += productsCart[i].price
        let name = document.createElement('p')
        let price = document.createElement('p')
        let list = document.createElement('li')

        name.innerText = productsCart[i].name
        price.innerText = `R$${productsCart[i].price.toFixed(2)}`

        list.appendChild(name)
        list.appendChild(price)

        ul.appendChild(list)
    }
    totalPrice.innerText = `R$${soma.toFixed(2)}`
    divPrice.appendChild(totalPrice)
}