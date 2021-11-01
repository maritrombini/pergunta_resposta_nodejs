//importando biblioteca
const http = require('http')
const url = require('url')
const queryString = require('query-string')

// Definição de endereço / URL
const hostname = '127.0.0.1' //localhost
const port = 3000

// implementação da regra de negócio

const server = http.createServer((req, res) => {
  //Pegar a pergunta na url
  const params = queryString.parse(url.parse(req.url, true).search)
  // console.log(params)

  //Verificar a pergunta e escolher uma resposta
  let resposta
  if (params.pergunta == 'melhor-filme') {
    resposta = 'Star Wars'
  } else if (params.pergunta == 'melhor-tecnologia-backend') {
    resposta = 'NodeJs'
  } else {
    resposta = 'Nao sei, desculpe =['
  }
  //Retornar a resposta escolhida

  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end(resposta)
})

// execução
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})

//localhost:3000/?pergunta=melhor-filme
