import { $adicionarProduto } from "../js/adicionar__produto.js"

const $botao_entre = document.querySelector('[data-form-log]')

$botao_entre.addEventListener('submit', (evento) => {
    evento.preventDefault()

    const user = 'henriquegeek@alura.com'
    const pass = '1234'

    const inputNomeLog = document.querySelector('[data-name-log]').value
    const inputSenhaLog = document.querySelector('[data-senha-log]').value
    
    
    if (inputNomeLog === user && inputSenhaLog === pass){
        window.location.href = './lista__produto.html'
        alert('Seja Bem-Vindos!')
    } else {
        alert('OPS! "Usuário" ou "Senha" inválidos')               
    } 
    
})