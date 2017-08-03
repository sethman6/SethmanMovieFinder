const server = require('./server')
const PORT = require process.env.PORT || 3000

server.listen(PORT, () => {
    console.log('listening on port' + PORT)
})
