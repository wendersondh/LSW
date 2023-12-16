import { adicionar, listar, remover, comprar } from "./lista.js"

let btnAdd = document.querySelector("form");
let body = document.querySelector("body");


btnAdd.addEventListener("submit", (e)=>{
    let nome = e.target.produto.value;
    let preco = Number(e.target.preco.value);
    adicionar(nome, preco);
})


body.onload = ()=> {
    let tbody = document.querySelector("tbody");
    listar().forEach(produto => {
        let item = tabela(produto);
        tbody.appendChild(item)
    });
} 


//adicionando produto na tabela
function tabela (produto) {
    let item = document.createElement('tr');
    let nome = document.createElement('th');
    nome.innerText = produto.nome;
    let preco = document.createElement('td');
    preco.innerText = produto.preco + " R$";

    let comprado = document.createElement('td');
    let checkbox = document.createElement('input');
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("class", "form-check-input")
    checkbox.checked = produto.comprado;
    checkbox.addEventListener("click", ()=>{comprar(produto.id)})
    comprado.appendChild(checkbox);

    let excluir = document.createElement('td');
    let i = document.createElement('i');
    i.setAttribute('class', 'btn btn-outline-danger bi bi-trash');
    excluir.appendChild(i);

    i.addEventListener("click", ()=> {
        item.remove();
        remover(produto);
    })

    item.append(nome, preco, comprado, excluir);
    return item;
}