function adicionar() { 
    let produto = document.getElementById('produto').value; //pegando  o valor do input produto
    let nomeProduto = produto.split('-')[0]; //separando o nome do produto(o que estava antes do '-') 
    let valorUnitario = produto.split('R$')[1]; //pegando o valor unitario do produto (o que estava após o R$)
    let quantidade = document.getElementById('quantidade'); //pegando  o valor do input quantidade  
    let preco =  quantidade.value * valorUnitario; //calculando o preco total

}

function limpar() {

}


//roteiro:
//recuperar valores de nome do produto, quantidade e valor ✓
//calcular preco ✓
//adicionar ao carrinho 
//atualizar valor total da compra 