# MAC Address API

A simple Express.js API to fetch the MAC address of the server.

## Installation

1. Extract the ZIP file.
2. Open a terminal in the project folder.
3. Run the following commands:

```sh
npm install
npm start
```

## API Endpoints

- `GET /` - Returns the MAC address as plain text.
- `GET /json` - Returns the MAC address as JSON.

## Example Response

```json
{
  "mac_address": "XX:XX:XX:XX:XX:XX"
}
```

## Notes

- This API only returns the **server's MAC address**, not the client's.
- Works only on systems where Node.js has access to network interfaces.