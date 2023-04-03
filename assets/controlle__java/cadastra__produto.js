import { $adicionarProduto } from "../js/adicionar__produto.js";

const $formularioCadastro = document.querySelector('[data-form]');


$formularioCadastro.addEventListener('submit', async (evento) => {
    evento.preventDefault()
    try {
        const imgURL = evento.target.querySelector('[data-form-url]').value
        const name = evento.target.querySelector('[data-form-nome]').value
        const price = evento.target.querySelector('[data-form-preco]').value
        const id = evento.target.querySelector('[data-id]')
     
        await $adicionarProduto.$criarProduto(imgURL, name, price, id)
        window.location.href = '../lista__produto.html'
        alert('Cadastrado com sucesso!!!')
    }
    catch(erro) {
        console.log(erro)
        window.location.href = '../index.html'
        
    }
       

    
})
