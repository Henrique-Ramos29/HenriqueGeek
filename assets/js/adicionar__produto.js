

const $listaDoProduto = () => {
    return fetch(`http://localhost:3000/profile`)
    .then( resposta => {
        if(resposta.ok) {
          return resposta.json()
        }
        throw new Error('Não foi possivel cadastra produto')
        })
}   

const $criarProduto = (imgURL, name, price, id) => {
    return fetch(`http://localhost:3000/profile`, {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            imgURL: imgURL,  
            name: name, 
            price: price,
            id: id
        })
    })
    .then(resposta => {
        if(resposta.ok) {
           return resposta.body
    }
    throw new Error('Não foi possivel cadastra produto')
    })
}

const $removeProduto = (id) => {
   return fetch(`http://localhost:3000/profile/${id}`, {
        method: 'DELETE'
    }).then(resposta => {
        if(!resposta.ok) {
            throw new Error('Não foi possivel remove produto')
        }
    })
}

const $editaProduto = (id) => {
    return fetch(`http://localhost:3000/profile/${id}`)
    .then(resposta => {
        if(resposta.ok){
            return resposta.json()
        }
        throw new Error('Não foi possivel edita produto')
    })
}

const $atualizaProduto = (id, imgURL, name, price) => {
    return fetch(`http://localhost:3000/profile/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            imgURL: imgURL,  
            name: name, 
            price: price,
            id: id
        })
     })
     .then(resposta => {
        if(resposta.ok) {
         return resposta.json()
        }
        throw new Error('Não foi possivel atualizar produto')
    })
}



export const $adicionarProduto = {
    $listaDoProduto,
    $criarProduto,
    $removeProduto,
    $editaProduto,
    $atualizaProduto

}