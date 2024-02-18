const PORT = 6969;

const server = Bun.serve({
  port: PORT,
  fetch(req, server) {
    // upgrade the request to a WebSocket
    if (server.upgrade(req)) {
      return; // do not return a Response
    }
    return new Response("Upgrade failed :(", { status: 500 });
  },
  websocket: {
    message(ws, message) {
      ws.publish("chat", message);
      // ws.send(message) {
      //     ws.publish("chat", message);
      // }
    }, // a message is received
    open(ws) {
      ws.subscribe("chat");
    }, // a socket is opened
    close(ws, code, message) {}, // a socket is closed
    drain(ws) {}, // the socket is ready to receive more data
  },
});

console.log(`Listening on http://localhost:${server.port} ...`);