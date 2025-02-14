const express = require("express");
const os = require("os");
const cors = require("cors");

const app = express();
app.use(cors());

function getMacAddress() {
    const networkInterfaces = os.networkInterfaces();
    for (const key in networkInterfaces) {
        for (const net of networkInterfaces[key]) {
            if (!net.internal && net.mac !== "00:00:00:00:00:00") {
                return net.mac;
            }
        }
    }
    return "MAC not found";
}

app.get("/", (req, res) => {
    res.send(getMacAddress()); // Similar to api.ipify.org, plain text response
});

app.get("/json", (req, res) => {
    res.json({ mac_address: getMacAddress() }); // JSON response
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});