const http = require('http')
const fs = require('fs')
const server = http.createServer(requestListener)
const users = []
server.listen(3000)

function requestListener(request, response) {
  if (request.url == '/' || request.url == '/index.html') {
    response.end(fs.readFileSync('index.html'))
  }
  else if (request.url.startsWith('/api/user=')) {
    users.push(request.url.slice(10))
    console.log(users)
  }
}