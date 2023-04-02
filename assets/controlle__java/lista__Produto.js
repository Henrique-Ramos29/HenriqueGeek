
import { $adicionarProduto } from '../js/adicionar__produto.js'

const $criarNovoDoProduto = (name, price, imgURL, id) => {
    const $linhaNovoProduto = document.createElement('li')
    const $conteudo = `
    <li class="colecao__produto" >

            </li>

                <li class="colecao__produto">
                    <img class="colecao__imagem" src="${imgURL}" alt="">
                    <div class="colecao__conteudo" >
                        <h4 class="colecao__titulo">${name}</h4>
                        <p class="colecao__descricao">R$ ${price}</p>
                        <button class="colecao__botao">Ver produto</button>
                        </div>
                        <ul class="container__botao__edita__excluir">
                        <li><a class="botao__edita"  href = '../edita__produto.html?id=${id}'>Edita</a></li>
                        <li><a href = '#' class="botao__excluir">Excluir</a></li>
                        </ul>
                </li>
            `
    $linhaNovoProduto.innerHTML = $conteudo
    $linhaNovoProduto.dataset.id = id
    
    return $linhaNovoProduto

}

const $criarLista = document.querySelector('[data-task]')

$criarLista.addEventListener('click', async (evento) => {
    let ehBotaoDeletar = evento.target.className === 'botao__excluir'
    if(ehBotaoDeletar) {
          try {
            const linhaProduto = evento.target.closest('[data-id]')
        let id = linhaProduto.dataset.id
        await $adicionarProduto.$removeProduto(id)
            linhaProduto.remove()
          }
        catch(erro) {
            console.log(erro)
            alert('Erro tenter mas tarde')
        }
    }
})

const render = async () => {
    try {
        const $listaProduto = await $adicionarProduto.$listaDoProduto()
        
        $listaProduto.forEach(elemento => {
                 $criarLista.appendChild($criarNovoDoProduto
                   (elemento.name, elemento.price, elemento.imgURL, elemento.id))
   
   
     })
    }
    catch(erro) {
        console.log(erro)
        window.location.href = '../index.html'
   }
}
render()