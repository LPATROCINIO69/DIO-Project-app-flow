import * as http from "http";
const porta = process.env.PORT;

// create http server
const server = http.createServer((request:http.IncomingMessage, response:http.ServerResponse) => {

})

server.listen(porta, () =>{
    console.log(`Servidor iniciado na porta ${porta}`);
})