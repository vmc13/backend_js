import http from "node:http"
import url from "node:url"

const port = 5000
const host = "localhost"

const server = http.createServer((request, response) => {
  const endpoint = url.parse(request.url, true)

  if (request.method === "GET" && endpoint.path === "/") {
    response.end("Seja bem-vind@!")
  } else if (request.method === "GET" && endpoint.path === "/me") {
    response.end("Meu nome é Duany Dreyton")
  } else if (request.method === "GET" && endpoint.path === "/users") {
    response.end("{Usuário 1, Usuário 2, Usuário 3...}")
  } else {
    response.end("Vaza....")
  }

})

server.listen(port, host, () => {
  console.log("Servidor iniciado com sucesso!")
})