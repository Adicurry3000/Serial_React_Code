import React, { useState, useEffect } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:5000");

    socket.onmessage = (event) => {
      const parsedData = parseData(event.data);
      setData((prevData) => [...prevData.slice(-20), parsedData]);
    };

    return () => socket.close();
  }, []);

  const parseData = (raw) => {
    try {
      const values = raw.trim().split(",").map(Number);
      return { time: new Date().toLocaleTimeString(), value1: values[0], value2: values[1] };
    } catch (error) {
      console.error("Invalid data format:", raw);
      return {};
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Real-Time Serial Data</h2>
      <LineChart width={800} height={400} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="value1" stroke="#8884d8" />
        <Line type="monotone" dataKey="value2" stroke="#82ca9d" />
      </LineChart>
    </div>
  );
};

export default App;
