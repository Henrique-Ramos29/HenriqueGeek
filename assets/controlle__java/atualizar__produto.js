import { $adicionarProduto } from "../js/adicionar__produto.js"

( async() => {
    const pegaURL = new URL (window.location)

    const id = pegaURL.searchParams.get('id')
    
    const inputImgURL = document.querySelector('[data-form-url]')
    const inputName = document.querySelector('[data-form-nome]')
    const inputPric = document.querySelector('[data-form-preco]')
    try {
        const dados = await $adicionarProduto.$editaProduto(id)
        inputImgURL.value = dados.imgURL
        inputName.value = dados.name
        inputPric.value = dados.price
    }
    catch(erro) {
        console.log(erro)
        window.location.href = '../index.html'
    }
    
    const $formularioCadastro = document.querySelector('[data-form]')
    
    $formularioCadastro.addEventListener('submit', async (evento) => { 
        evento.preventDefault()
        try {

            await $adicionarProduto.$atualizaProduto(id, inputImgURL.value, inputName.value, inputPric.value)
            window.location.href = "../lista__Produto.html"
            alert('Produto editado com sucesso.')
        }
        catch(erro) {
            console.log(erro)
            window.location.href = '../index.html'
        }
        
         
    })
    
})()


