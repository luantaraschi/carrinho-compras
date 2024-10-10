let totalGeral = 0;

function adicionar() { 
    let produto = document.getElementById('produto').value; //pegando  o valor do input produto
    let nomeProduto = produto.split('-')[0]; //separando o nome do produto(o que estava antes do '-') 
    let valorUnitario = produto.split('R$')[1]; //pegando o valor unitario do produto (o que estava após o R$)
    let quantidade = document.getElementById('quantidade').value; //pegando  o valor do input quantidade  
    let preco =  quantidade * valorUnitario; //calculando o preco total
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
        </section>`; // mudando o conteúdo do carrinho
        totalGeral += preco; //somando o preco total ao total geral
        let campoTotal = document.getElementById('valor-total');
        campoTotal.textContent =  `R$${totalGeral}`; //atualizando o valor total no campo
        document.getElementById('quantidade').value = 0; //zerando o campo quantidade ao clique
}

function limpar() {
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$0,00';
}


//roteiro:
//recuperar valores de nome do produto, quantidade e valor ✓
//calcular preco ✓
//adicionar ao carrinho ✓
//atualizar valor total da compra ✓
//adicionar funcionalidade ao botao limpar ✓