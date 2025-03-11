# **Serial Data Visualizer with React and Node.js**

This project visualizes real-time data from a serial port using a React frontend and a Node.js backend.

---

## **Getting Started**

### **1. Clone the Repository**
```sh
git clone <repository-url>
cd <repository-folder>
```

---

### **2. Install Dependencies**

**For Backend:**
```sh
cd Serial_Data_To_React
npm install express ws serialport cors
```

**For Frontend (React App):**
```sh
npx create-react-app serial-graph
cd ../serial-graph
npm install recharts
```

---

### **3. File Setup**

- **Create a new folder** (e.g., `serial-backend`) and place the provided `server.js` file inside it.
- In the **React app folder** (`serial-graph`), navigate to `/src` and replace the existing `App.js` with the provided one.

---

### **4. Configure the Serial Port**
In **`server.js`**, update this line to match your device's port:
```javascript
const serialPort = new SerialPort({ path: "<Your Com Port>", baudRate: 9600 }); 
```
*Connect your device else it will show an error

---

### **5. Run the Application**

**Start the Backend:**
```sh
cd serial-backend
node server.js
```

**Start the Frontend:**
```sh
cd ../serial-graph
npm start
```

---

### **6. Viewing the Data**
- Open your browser and go to: **`http://localhost:3000`**  
- Real-time graphs will display incoming serial data.

---

### **7. Simulate Sample Data Using Arduino**
If you want to simulate sample data using an Arduino, you can upload the provided code.


---

If you encounter any issues or have questions, feel free to ask! 🚀
```
