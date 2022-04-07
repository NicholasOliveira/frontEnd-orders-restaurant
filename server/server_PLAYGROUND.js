const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('server/db.json')
const middlewares = jsonServer.defaults()
const http = require("http");
const socketIo = require('socket.io')

server.use(middlewares)
server.use(router)

const serverhttp = http.createServer(server);

const io = socketIo(serverhttp);

let interval;

io.on("connection", (socket) => {
  console.log("New client connected");
  if (interval) {
    clearInterval(interval);
  }
  interval = setInterval(() => getApiAndEmit(socket), 1000);
  socket.on("disconnect", () => {
    console.log("Client disconnected");
    clearInterval(interval);
  });
});

const getApiAndEmit = socket => {
  const response = new Date();
  // Emitting a new message. Will be consumed by the client
  socket.emit("FromAPI", response);
};

server.listen(5000, () => {
  console.log('JSON Server is running')
})