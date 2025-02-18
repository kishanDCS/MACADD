const { networkInterfaces } = require('os');

const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000; // Use the PORT provided by Render or default to 3000

const cors = require("cors");
app.use(cors());

app.get("/", (req, res) => {
    res.send("MAC Address API is running...");
});

function getMacAddress() {
    const nets = networkInterfaces();
    for (const interface in nets) {
        for (const net of nets[interface]) {
           if (!net.internal && net.mac !== '00:00:00:00:00:00') {
                return net.mac;
            }
        }
    }
}

app.get("/mac", (req, res) => {
    res.json({ mac_address: getMacAddress() });
});

console.log(getMacAddress());

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

