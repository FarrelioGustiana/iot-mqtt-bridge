# IoT MQTT Bridge

## Overview

The IoT MQTT Bridge is a application designed to facilitate communication between IoT devices and a Firebase using the MQTT protocol. This project leverages Express for handling HTTP requests and Firebase Admin for interacting with Firebase services.

## Features

- **MQTT Protocol**: Utilizes the MQTT protocol for lightweight messaging.
- **Express Server**: Provides an HTTP server for additional functionalities.
- **Firebase Integration**: Connects to Firebase for data storage and management.

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd iot-mqtt-bridge

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Create a `.env` file in the root directory.
   - Add necessary environment variables as required by your application.

4. Configure Firebase:
   - Place your `serviceAccount.json` file in the root directory.
   - Ensure it contains the correct credentials for Firebase Admin SDK.

## Usage

To start the application, run:

```bash
npm start
```

This will launch the server and begin listening for MQTT messages.

## Dependencies

- **dotenv**: For loading environment variables.
- **express**: For creating the HTTP server.
- **firebase-admin**: For interacting with Firebase services.
- **mqtt**: For MQTT protocol support.

## Author

Farrelio Gustiana Dzaki

## Acknowledgments

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Firebase](https://firebase.google.com/)
- [MQTT](https://mqtt.org/)
