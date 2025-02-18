const { networkInterfaces } = require('os');

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