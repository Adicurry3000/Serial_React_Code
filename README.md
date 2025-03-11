# Serial Data Graph Visualizer

This project reads data from a **serial port**, sends it to a **WebSocket server**, and visualizes it in **real-time graphs** using **React** and **Recharts**.

---

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone <your-repository-link>
cd serial-graph
```

### 2. Install Dependencies
**Backend Dependencies:**
```bash
cd backend
npm install express ws serialport @serialport/parser-readline
```

**Frontend Dependencies:**
```bash
cd ../serial-graph
npm install
npm install recharts
```

---

## ⚙️ Configuration

### 3. Serial Port Setup (Backend)
1. Open `server.js` in the **backend** folder.
2. Update the serial port path in this line:
```javascript
const serialPort = new SerialPort({ path: "COM3", baudRate: 9600 });
```
- On **Windows**, use `COM3`, `COM4`, etc.
- On **Mac/Linux**, use `/dev/ttyUSB0` or similar.

### 4. Finding Your Serial Port
Run this command to find your serial port:
```bash
npx @serialport/list
```

---

## 📡 Running the Application

### 5. Start the Backend Server
In the **backend** folder:
```bash
node server.js
```
> The server will run on `http://localhost:5000`

### 6. Start the Frontend React App
In the **serial-graph** folder:
```bash
npm start
```
> The React app will run on `http://localhost:3000`

---

## 🖥️ How to Use
1. Connect your device to the correct **serial port**.
2. Start both **backend** and **frontend** servers.
3. Open `http://localhost:3000` in your browser.
4. Watch your serial data visualized in **real-time graphs**.

---

## ❗ Common Issues & Solutions

**1. Error: `EADDRINUSE: address already in use :5000`**
- Run this command to kill the process using port 5000:
```bash
netstat -ano | findstr :5000
```
Then:
```bash
taskkill /PID <PID> /F
```

**2. Error: `Module not found: Can't resolve 'recharts'`**
- Run this to install `recharts`:
```bash
npm install recharts
```

**3. Error: `"path" is not defined: undefined`**
- Ensure you have specified the correct serial port path in `server.js`.

---

## 🤝 Contributing
Feel free to submit issues or pull requests for improvements or new features.

---

## 📄 License
This project is licensed under the **MIT License**.

