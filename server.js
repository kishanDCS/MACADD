const { networkInterfaces } = require('os');

const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000; // Use the PORT provided by Render or default to 3000

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
console.log(getMacAddress());

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});