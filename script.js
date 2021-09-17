let caixa_entrada = document.getElementById('caixa-entrada'), btnAdicionar = document.getElementById('btn-adicionar'), ul = document.getElementById('list');
let Posc_produtcts = 0, cont = 0, li = "";
let Produtos = {
    nome: [],
    quantidade: [],
    span: [],
    itemButton: document.getElementsByClassName('remove')
}
//REMOVER E DIMINUIR QUANTIDADE DO ELEMENTO
function deleteProduto(este, i) {
    Produtos.quantidade[i]-=1
    if(Produtos.quantidade[i] > 1) {
        Produtos.span[i].innerHTML = `${Produtos.nome[i]} ${Produtos.quantidade[i]}x`
    }else if(Produtos.quantidade[i] === 1) {
        Produtos.span[i].innerHTML = `${Produtos.nome[i]}`
    }else {
        este.parentElement.remove()
        Produtos.nome[i] = "";
        Produtos.quantidade[i] = 0;
    }
    caixa_entrada.value = "";
    caixa_entrada.focus();
}

function ButtonEvents(i) {
    Produtos.itemButton[i].addEventListener('click', function() {
        let este = this
        deleteProduto(este, i)
    });
}

function CriarProdutos() {
    if(caixa_entrada.value !== "") {
        let nome_novo = caixa_entrada.value.toLowerCase();
        let elemento_repetido = Produtos.nome.indexOf(nome_novo);
        Posc_produtcts = Produtos.itemButton.length;
        if(elemento_repetido === -1) {
            var xButton = document.createElement('button');
            Produtos.span[Posc_produtcts] = document.createElement('span');
            Produtos.span[Posc_produtcts].innerHTML = caixa_entrada.value.toLowerCase();
            
            xButton.innerHTML = "X";
            xButton.className = "remove";

            li = document.createElement('li');
            Produtos.quantidade[Posc_produtcts] = 1
            Produtos.nome[Posc_produtcts] = nome_novo;
            li.appendChild(xButton);
            li.appendChild(Produtos.span[Posc_produtcts]);
            
            ul.appendChild(li);
            ButtonEvents(Posc_produtcts);
        //aumentar quantidade
        }else {
            Produtos.span[elemento_repetido].innerHTML = `${Produtos.nome[elemento_repetido]} ${Produtos.quantidade[elemento_repetido]+=1}x`
        }
    }
    caixa_entrada.value = "";
    caixa_entrada.focus();
}
//uma function precisa ter apenas um proposito!
btnAdicionar.addEventListener('click', function() {
    CriarProdutos();
});