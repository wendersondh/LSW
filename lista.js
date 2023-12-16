function adicionar (nome, preco) {
    let produto = {
        id:null,
        nome:nome,
        preco:preco,
        comprado:false,
    }

    let lista = JSON.parse( localStorage.getItem("lista") ) || [];
    lista.length > 0? produto.id = lista[lista.length-1].id + 1 : produto.id = 1000;
    localStorage.setItem("lista", JSON.stringify( [...lista, produto]));
}

function listar () {
    return JSON.parse(localStorage.getItem("lista")) || [];
}

function remover (produto) {
    let lista = JSON.parse( localStorage.getItem("lista") );
    // lista com os id
    let lista_ids = lista.map((item)=>item.id);
    lista.splice(lista_ids.indexOf(produto.id), 1);
    localStorage.setItem("lista", JSON.stringify(lista));  
}

function comprar (id) {
    let lista = JSON.parse( localStorage.getItem("lista") );
    let lista_ids = lista.map((item)=>item.id);
    let index = lista_ids.indexOf(id);
    lista[index].comprado = !(lista[index].comprado)
    localStorage.setItem('lista', JSON.stringify(lista));
}


export {adicionar, listar, remover, comprar};