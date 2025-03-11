const express = require("express");
const WebSocket = require("ws");
const {SerialPort} = require("serialport");
const { ReadlineParser } = require("@serialport/parser-readline");
const cors = require("cors");

const app = express();
const port = 5000;

app.use(cors());

const server = app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

const wss = new WebSocket.Server({ server });

const serialPort = new SerialPort({ path: "COM10", baudRate: 9600 }); // Change COM3 to match your port
const parser = serialPort.pipe(new ReadlineParser({ delimiter: "\n" }));

wss.on("connection", (ws) => {
  console.log("Client connected");
  parser.on("data", (data) => {
    console.log("Received:", data);
    ws.send(data);
  });

  ws.on("close", () => console.log("Client disconnected"));
});
